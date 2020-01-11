import React from 'react';
import './user.css'

const UserDetails = ({username, followers, repo_count, user_dp, following})=>{
    return(
        <div className="user-details">
            <div className="user-photo">
                <img src={user_dp} alt={username}/>
                <h3>{username}</h3>
            </div>
            <div className="other-details">
                <ul>
                    {followers? <li>Followers: <span className="data">{followers}</span></li>: null }
                    {following? <li>Following: <span className="data">{following}</span></li>: null }
                    {repo_count? <li>Repositories: <span className="data">{repo_count}</span></li>: null }
                </ul>
            </div>
        </div>
    );
}

export default UserDetails;