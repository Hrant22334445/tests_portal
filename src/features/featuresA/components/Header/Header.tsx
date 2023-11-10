import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaCircleInfo } from "react-icons/fa6"
import './Header.scss'

const Header: React.FC = () => {
    return (
        <div className='header'>
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
            <div className='user'>
                <input className='search' type='text' placeholder='Search...' />
                <button className='bell'><FaBell /></button>
                <button className='info'><FaCircleInfo /></button>
                <img
                className='userLogo'
            src="https://avatars.githubusercontent.com/u/98681?v=4"
            alt="user name"
          />
                
            </div>
        </div>
    )
}

export default Header;