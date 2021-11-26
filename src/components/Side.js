import React from "react";

export default function Side(props) {
  const changeTheme = props.changeTheme;

  return (
    <side className="aside-col">
      <div className="log-aside">
        <div className="log-color-down"></div>
        <img className="log-img" src={require("../assets/logo.svg").default} alt="logo" />
      </div>
      <div className="down-part">
        <div className="dark-light-mode">
          <img
            className="moon"
            src={require("../assets/icon-moon.svg").default}
            alt="moon"
            onClick={() => changeTheme("dark")}
          />
          <img
            className="sun"
            src={require("../assets/icon-sun.svg").default}
            alt="sun"
            onClick={() => changeTheme("light")}
          />
        </div>
        <div className="line"></div>
        <div className="avatar-photo">
          <img className="profil-img" src={require("../assets/image-avatar.jpg").default} alt="avatar" />
        </div>
      </div>
    </side>
  );
}
