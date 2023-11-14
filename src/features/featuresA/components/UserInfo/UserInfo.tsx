import React from "react";
import styles from "./User.module.css"

const User: React.FC = () => {
    return (
        <div className={styles.userPage}>
            <h1>See your profile</h1>
            <h2 className={styles.about}>About me:</h2>
             <img
             className={styles.mainUser}
            src="https://avatars.githubusercontent.com/u/98681?v=4"
            alt="user name"
          />
          <h2 className={styles.nameSurname}>John Johnson</h2>
          <input className={styles.bio} type="text" placeholder="bio" />
        </div>
    )
}

export default User;