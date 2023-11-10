import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../features/featuresA/components/Header";
import './App.scss'
import User from "../features/featuresA/components/User";

const LogInPage = lazy(() => import('../pages/LogInPage'));
const BoardPage = lazy(() => import('../pages/BoardPage'))

const App: React.FC = () => {
    return (
        <BrowserRouter>
        <div className="app">
            {/* <Header /> */}
            <User />

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