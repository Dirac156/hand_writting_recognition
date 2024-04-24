import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import App from './pages/app/app';
import DocumentPage from './pages/app/document/document.page';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/app" element={<App />} />
                {/* <Route path="/signup" component={Signup} /> */}
                {/* document */}
                <Route path='/app/documents/document/:documentId' element={<DocumentPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
