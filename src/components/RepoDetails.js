import React from 'react';
import "./repo.css"

const RepoDetails = ({repo_name,user, fork_count, star_count, description, darkOrwhite})=>{
    if(repo_name.length===0){
        return null
    }
    else{
        return(
          <div id="repo">
            {repo_name.map((repo,index) => {
              return(
                <React.Fragment key={index}>
                  <div className={darkOrwhite? darkOrwhite :"white-repo-details"}>
                    <h2><a id='anchor-tag' href={`https://github.com/${user}/${repo}`} >{repo}</a></h2>
                    <div className="fork-star">
                        <p>Forks: {fork_count[index]}</p>
                        <p id="star">Stars: {star_count[index]}</p>
                    </div>
                    <p id="description"><em>{description[index]}</em></p>
                  </div>
                </React.Fragment>
              )})}
          </div>
        );
    }
}

export default RepoDetails;