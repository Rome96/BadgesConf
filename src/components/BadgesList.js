import React, { Component } from "react";
import "./styles/BadgeList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li className='BadgesListItem' key={badge.id}>
              <div className="container">
                <div className="row">
                  <div className="col-3 ">
                    <img
                      className="BadgesListItem__avatar"
                      src={badge.avatarUrl}
                    />
                  </div>
                  <div className="col-9">
                    <h4>
                      {badge.firstName} {badge.lastName}
                    </h4>
                    <span  className='twitter'> <FontAwesomeIcon icon={faTwitter} /> @{badge.twitter}</span> <br></br>
                    <span>{badge.jobTitle}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
