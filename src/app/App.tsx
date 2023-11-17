import React, { Suspense, lazy, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.scss'
import Header from "features/featuresA/components/Header";
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '../firebase'
import LogIn from "features/featuresA/components/LogIn";

const UserInfoPage = lazy(() => import('../pages/UserInfoPage/ui/UserInfoPage'));
const BoardPage = lazy(() => import('../pages/BoardPage/ui/BoardPage'))

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })

    return unsubscribe;
  }, [])

  const handleSingOut = () => {
    signOut(auth).catch(error => console.log(error))
  }

  const searchAutocomplite = [
    {
      text: "Hello",
      rating: 0.3,
    },
    {
      text: "test",
      rating: 0.4,
    },
    {
      text: "esim",
      rating: 0.1,
    },
    {
      text: "barev",
      rating: 0.8,
    }
]


    return (
        <BrowserRouter>
        <div className='app'>
            {
                user ? (
                    <Header items={searchAutocomplite} handleSingOut={handleSingOut} user={user} />
                ) : (
                    <LogIn />
                )
            }

            <Suspense fallback="Loading...">
                <Routes>
                    <Route path="/user" element={<UserInfoPage user={user} />} />
                    <Route path="/board" element={<BoardPage />} />
                </Routes>
            </Suspense>
        </div>
            
        </BrowserRouter>
    )
}

export default App;