import React from "react";
import styles from "./UserInfo.module.css"
import { UserInfoProps } from "../Search/Search.interface";

const User: React.FC<UserInfoProps> = ({ user }) => {
    return (
        <div className={styles.userPage}>
            <h1>See your profile</h1>
            <div className={styles.about}>
                About Me:
                {
                    user ? (
                        <>
                        {
                            user.photoURL ? (
                                <div>
                                    <img
                                    src={user.photoURL}
                                    alt="user name"
                                    className={styles.mainUser}
                                     />
                                     <p className={styles.para}>{user.displayName}</p>
                                </div>
                            ) : <div>{user.displayName}</div>
                        }
                        </>
                    ) : null
                }
            </div>
             
          <input className={styles.bio} type="text" placeholder="bio" />
        </div>
    )
}

export default User;