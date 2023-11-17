import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { HeaderProps } from '../Search/Search.interface'
import Search from '../Search'
import LogIn from '../LogIn'

const Header: React.FC<HeaderProps> = ({ items, user, handleSingOut }) => {
    const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)
  
    const toggleUserMenu = (): void => {
      setUserMenuOpen(!isUserMenuOpen);
    }
  
    return (
      <header className={styles.header}>
        <nav className={styles.menu}>
          <ul className={styles.mainMenu}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/user'>Profile</Link>
            </li>
            <li>
              <Link to='/board'>Board</Link>
            </li>
          </ul>
  
          <Search items={items} />
  
          <div className={styles.userContainer}>
            {
              user ? (
                <>
                {
                  user.photoURL ? (
                    <div>
                      <p>{user.displayName}</p>
                      <img
                    src={user.photoURL}
                    alt="user name"
                    className={styles.userImage}
                    onClick={toggleUserMenu}
                  />
                    </div>
                  ) : <div>{user.displayName}</div>
                }
  
                  {
                    isUserMenuOpen ? (
                      <div className={styles.userMenu}>
                        <ul>
                          <li>
                            <a href='#'>Profile</a>
                          </li>
                          <li>
                            <a href='#'>Settings</a>
                          </li>
                          <li>
                            <button onClick={handleSingOut}>Sign Out</button>
                          </li>
                        </ul>
                      </div>
                    ) : null
                  }
                </>
              ) : (
                <LogIn />
              )
            }
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header