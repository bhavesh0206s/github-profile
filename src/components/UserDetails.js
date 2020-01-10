import React from 'react';


const UserDetails = ({username, followers, repo_count, user_dp})=>{
    return(
        <div>
            <div className="user-phot">
                <img src={user_dp} alt={username}/>
                <h3>{username}</h3>
            </div>
            <div className="other-detail">
                {followers? <p>Followers: {followers}</p>: null }
                {repo_count? <p>Repositories: {repo_count}</p>: null }
            </div>
        </div>
    );
}

export default UserDetails;