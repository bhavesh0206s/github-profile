import React from 'react';


const RepoDetails = ({repo_name, fork_count, star_count, description})=>{
    if(repo_name.length===0){
        return null
    }
    else{
        return(
            <div>
                {repo_name.map((repo,index) => {
                    return(
                        <React.Fragment key={index}>
                            <h2>{repo}</h2>
                            <div className="fork-star">
                                <p>{fork_count[index]}</p>
                                <p>{star_count[index]}</p>
                                <p>{description[index]}</p>
                            </div>
                        </React.Fragment>
                    )})}
            </div>
        );
    }
}

export default RepoDetails;