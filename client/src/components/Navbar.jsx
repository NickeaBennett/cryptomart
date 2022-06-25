import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import icons from antd
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, HeartOutlined } from "@ant-design/icons";

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className='logo-container'>
            <Avatar src={icon} size="small" />
            {/* <Typography level={1}>*/}
            <Typography.Title level={2} className='logo'>
                <Link to="/">CryptoMart</Link>
            </Typography.Title>
        </div> 
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Crypto Coins</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<HeartOutlined />}>
                <Link to="/favorites">My Favorites</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}   

export default Navbar;