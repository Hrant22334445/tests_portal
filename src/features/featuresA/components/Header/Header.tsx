import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaCircleInfo } from "react-icons/fa6"
import './Header.scss'
import { LogInProps } from '../LogIn/LogIn.interface'

import { auth } from "../../../../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Board from '../Board'
import LogIn from '../LogIn'

const Header: React.FC<LogInProps> = () => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return unsubscribe
    }, [])

    const handleSignOut = () => {
        signOut(auth).catch(error => console.log(error))
    }
    return (
        <div className="header">
            <div className='links'>
                <ul className='menu'> 
                    <li>
                        <Link to="/board">Board</Link>
                    </li>
                    <li>
                        <a href='#'>Workspaces</a>
                    </li>
                    <li>
                        <a href='#'>Favorites</a>
                    </li>
                    <li>
                        <a href='#'>Tempates</a>
                    </li>
                    <li>
                        <Link to="/login">Log Out</Link>
                    </li>
                </ul>
                
            </div>
            <div className="user">
                <input className="search" type='text' placeholder='Search...' />
                <button className="bell"><FaBell /></button>
                <button className="info"><FaCircleInfo /></button>
                <img
                className="userLogo"
            src="https://avatars.githubusercontent.com/u/98681?v=4"
            alt="user name"
          />    
            </div>

            {
                user ? <Board /> : <LogIn handleSignOut={handleSignOut} />
            }

        </div>
    )
}

export default Header;