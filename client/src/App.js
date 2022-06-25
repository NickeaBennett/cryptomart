import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
// Imports components from index.js
// import { Navbar } from './components';  
import { Navbar, Home, Cryptocurrency, Exchanges, CoinDetails, Favorites, News} from './components/'; 

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main-content">
                {/* Layout component from antd */}
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrency />}></Route>
                            <Route exact path="/exchanges" element={<Exchanges />}></Route>
                            <Route exact path="/crypto/:coidId" element={<CoinDetails />}></Route> // dynamically render each coin detail: coinId
                            <Route exact path="/favorites" element={<Favorites />}></Route>
                            <Route exact path="/news" element={<News />}></Route>
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className="footer">
            </div>
        </div>
    );
}

export default App;