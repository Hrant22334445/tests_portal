import React, { Suspense, lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.scss'
import LogIn from "features/featuresA/components/LogIn";

const LogInPage = lazy(() => import('../pages/LogInPage/ui/LogInPage'));
const BoardPage = lazy(() => import('../pages/BoardPage/ui/BoardPage'))

const App: React.FC = () => {
    return (
        <BrowserRouter>
        <div className='app'>
            <LogIn />

            <Suspense fallback="Loading...">
                <Routes>
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/board" element={<BoardPage />} />
                </Routes>
            </Suspense>
        </div>
            
        </BrowserRouter>
    )
}

export default App;