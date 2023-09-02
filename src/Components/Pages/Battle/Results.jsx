import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../../../api";
import PlayerPreview from "./PlayerPreview";
import star from './ResultImages/star.svg';
import locationImage from './ResultImages/location.svg';
import followersImage from './ResultImages/followers.svg'
import followingImage from './ResultImages/following.svg'
import winnerImage from './ResultImages/winner.svg'

function Results() {
    const location = useLocation();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const params = new URLSearchParams(location.search);
  
      battle([params.get("playerOneName"), params.get("playerTwoName")])
        .then((data) => setData(data));
    }, []);
  
    return (
      <div className="row">
        {data.map((item, index) => (
          <PlayerPreview
            key={index}
            avatar={item.profile.avatar_url}
            userName={item.profile.login}
          >
            <div className="column">
              <div className="results">
                {index === 0 ?
                  <div className="info-wrapper">
                    <img src={winnerImage} alt="winner" />
                    {!item.profile.name ? 
                        <h2>User</h2> : 
                        <h2>{item.profile.name}</h2>
                    }
                  </div> :
                  <h2>{item.profile.name}</h2>
                }
                <div className="info-wrapper">
                  {!item.profile.location ?
                    <p>Hidden</p> :
                    <div className="info-wrapper">
                      <img src={locationImage} alt="location" />
                      <p>{item.profile.location}</p>
                    </div>
                  }
                </div>
                {!item.profile.company ?
                  <p>Hidden</p> :
                  <p>Company = {item.profile.company}</p>
                }
                <div className="info-wrapper">
                  <img src={followersImage} alt="followers" />
                  <p>Followers = {item.profile.followers}</p>
                </div>
                <div className="info-wrapper">
                  <img src={followingImage} alt="followings" />
                  <p>Following = {item.profile.following}</p>
                </div>
                <p>Public repositories = {item.profile.public_repos}</p>
                {!item.profile.blog ?
                  <p>None</p> :
                  <p>{item.profile.blog}</p>
                }
                <div className="info-wrapper">
                  <img src={star} alt="star" />
                  <p>{item.score}</p>
                </div>
              </div>
            </div>
          </PlayerPreview>
        ))}
      </div>
    );
  }
  
  export default Results;
  