import React from 'react';
import SearchBox from './components/SearchBox';
import RepoDetails from './components/RepoDetails';
import UserDetails from './components/UserDetails';
import './app.css';
import ErrorBoundary from './components/ErrorBoundary';
const darkStyle = {
  body: {
    color: "#EAF0F1",
    backgroundImage: "none",
    backgroundColor: "#1b262c",
    textShadow: "none"
  }
}

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      id: "",
      name: "",
      username: "",
      followers: "",
      following: "",
      repo_count: "",
      user_dp: "",
      repo_name: "",
      fork_count: "",
      star_count: "",
      repo_detail: "",
      dark_style: true,
      repo_style: "",
      loading: "",
    }
  }

  componentDidMount(){
    let oldRepoStyle = localStorage.getItem("local_repo_style")
    console.log(oldRepoStyle)
    this.setState({dark_style: Boolean(oldRepoStyle)})
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
          user_dp: data.avatar_url,
          following: data.following
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
    this.getRepoDetails(this.state.id);
    this.setState({loading: false})
  }

  darkConvert = ()=>{
    if(this.state.dark_style){
      this.setState({dark_style: false})
      for(let i in darkStyle.body){
        document.body.style[i] = darkStyle.body[i];
      }
      let darkRepoStyle = "dark-repo-details";
      this.setState({repo_style: darkRepoStyle})
      localStorage.setItem("local_repo_style", false)
    }
    else{
      this.setState({dark_style: true})
      document.body.style.backgroundColor = "#DAE0E2";
      document.body.style.color = "black";
      let whiteRepoStyle = "white-repo-details";
      this.setState({repo_style: whiteRepoStyle})
      localStorage.setItem("local_repo_style", true)
    }
    console.log(localStorage.getItem("local_repo_style"))
  }

  render(){
    const {username, followers, repo_count, user_dp, description,repo_name, fork_count, star_count, loading,following, repo_style,dark_style} = this.state;
    const darkImg = "https://img.icons8.com/pastel-glyph/64/000000/planet-on-the-dark-side.png";
    const whiteImg = "https://img.icons8.com/cotton/64/000000/planet-on-the-dark-side.png"
    if(loading){
      return(
        <div>
          <div className="heading-main">
            <h1 id="heading">Github Profile Finder</h1>
            <h2 onClick={this.darkConvert} id="dark">
              {!dark_style? <img src={whiteImg} alt="DarkMode"/> : <img src={darkImg} alt="WhiteMode"/> }
            </h2>
          </div>
          <h2>loading...</h2>
        </div>
      )
    }
    else{
      return(
        <div>
          <div className="heading-main">
            <h1 id="heading">Github Profile Finder</h1>
            <h2 onClick={this.darkConvert} id="dark">
              {!dark_style? <img src={whiteImg} alt="DarkMode"/> : <img src={darkImg} alt="WhiteMode"/> }
            </h2>
          </div>
          <ErrorBoundary>
            <SearchBox search={this.handleChange} submit ={this.handleSubmit}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <div className="user-repo">
              <UserDetails username={username} followers={followers} repo_count={repo_count} user_dp={user_dp} following={following}/>
              <RepoDetails description={description} repo_name={repo_name} fork_count={fork_count} star_count={star_count} darkOrwhite={repo_style} />
            </div>
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default App;
