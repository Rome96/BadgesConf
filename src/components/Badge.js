import React from "react";
import "./styles/Badge.css";
import logoConf from "../images/conf.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoConf} alt="Logo de la conf." />
        </div>
        <div className="Badge__section-name ">
          <img
            className='Badge__avatar'
            src="https://s.gravatar.com/avatar/d504fcbfc3b0940c812fd0e7e94e90ee?s=80"
            alt="Avatar"
          />
          <h1>
            Turiano De Jesus <br /> Romero Guzmán
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Developer Frontend</h3>
          <div>@Rome2196</div>
        </div>
        <div className="Badge__footer">
          <p>#NodeConf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
