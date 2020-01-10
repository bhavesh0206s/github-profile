import React from 'react';
import SearchBox from './components/SearchBox';
import RepoDetails from './components/RepoDetails';
import UserDetails from './components/UserDetails';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      id: "",
      name: "",
      username: "",
      followers: "",
      repo_count: "",
      user_dp: "",
      repo_name: "",
      fork_count: "",
      star_count: "",
      repo_detail: "",
    }
  }

  getUserDetails = (id)=>{
    //get user information
    const url = `https://api.github.com/users/${id}`;
    if(this.state.id){
      fetch(url)
      .then(res => res.json())
      .then(data=>{
        this.setState({
          username: data.name, 
          followers: data.followers, 
          repo_count: data.public_repos,
          user_dp: data.avatar_url
        })
      })
      .catch(e=> console.log(e))
    }
  }
  getRepoDetails(id){
    //get repos detials of user and sort them
    const repo = `https://api.github.com/users/${id}/repos`;
    if(this.state.id){
      fetch(repo)
      .then(res => res.json())
      .then(repos=>{
        let sortedRepos = [...repos].sort((a,b) => {
          return b.forks + b.stargazers_count - (a.forks + a.stargazers_count)
        }).slice(0,4);
        let repoNameArr = [];
        let forkCountArr = [];
        let starCountArr = [];
        let repoDetailArr = [];  
        sortedRepos.forEach(element => {
          repoNameArr.push(element.name);
          forkCountArr.push(element.forks_count);
          starCountArr.push(element.stargazers_count);
          if(element.description!==null){
            repoDetailArr.push(element.description)
          }
          else{
            repoDetailArr.push("No description")
          }
          
        });
        console.log(repoDetailArr)
        this.setState({
          repo_name: repoNameArr,
          fork_count: forkCountArr,
          star_count: starCountArr,
          description: repoDetailArr
        })
      })
      .catch(e=> console.log(e))
    }
  }

  handleChange = (e)=>{
    this.setState({name: e.target.value})
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({id: this.state.name})
    this.getUserDetails(this.state.id);
    this.getRepoDetails(this.state.id)
  }

  render(){
    const {username, followers, repo_count, user_dp, description,repo_name, fork_count, star_count} = this.state
    return(
      <div>
        <SearchBox search={this.handleChange} submit ={this.handleSubmit}/>
        <UserDetails username={username} followers={followers} repo_count={repo_count} user_dp={user_dp} />
        <RepoDetails description={description} repo_name={repo_name} fork_count={fork_count} star_count={star_count} />
      </div>
    );
  }
}

export default App;
