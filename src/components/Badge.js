import React from "react";

import logoConf from '../images/conf.png'

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={logoConf} alt="Logo de la conf." />
        </div>
        <div>
          <img src="" alt="Avatar"/>
          <h1>
            Turiano <br /> Romero
          </h1>
        </div>
        <div>
          <p>Developer Frontend</p>
          <p>@Rome2196</p>
        </div>
        <div>
          <p>#NodeConf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
