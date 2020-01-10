import React from 'react';
import SearchBox from './components/SearchBox';
import RepoBox from './components/RepoBox';
import UserDetails from './components/UserDetails';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      id: "",
      username: "",
      followers: "",
      repoCount: "",
      user_dp: "",
      top_repo: {
        fork_count: "",
        star_count: ""
      }
    }
  }
  componentDidMount(){
    this.getUserInfo();
    this.getRepoInfo()
  }
  getUserInfo = ()=>{
    //get user information
    const url = `https://api.github.com/users/${this.state.id}`;
    fetch(url)
      .then(res => res.json())
      .then(data=>{
        this.setState({
          username: data.name, 
          followers: data.followers, 
          repoCount: data.public_repos,
          user_dp: data.avatar_url
        })
      })
      .catch(e=> console.log(e))
  }
  getRepoInfo(){
    //get repos detials of user and sort them
    const repo = `https://api.github.com/users/${this.state.id}/repos`;
    fetch(repo)
      .then(res => res.json())
      .then(repos=>{
        let sortedRepos = [...repos].sort((a,b) => {
          return a.forks + a.stargazers_count - (b.forks + b.stargazers_count)
        });
      })
      .catch(e=> console.log(e))
  }



  render(){
    const {username, followers, repoCount, user_dp} = this.state
    return(
      <div>
        <SearchBox search={this.handleChange}/>
        <UserDetails/>
        <RepoBox/>
      </div>
    );
  }
}

export default App;
