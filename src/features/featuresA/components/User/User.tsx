import React from "react";
import './User.scss'

const User: React.FC = () => {
    return (
        <div className="userPage">
            <h1>See your profile</h1>
            <h2>About</h2>
             <img
             className="mainUser"
            src="https://avatars.githubusercontent.com/u/98681?v=4"
            alt="user name"
          />
          <h2 className="nameSurname">John Johnson</h2>
          <input className="bio" type="text" placeholder="bio" />
        </div>
    )
}

export default User;