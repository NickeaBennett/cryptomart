import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import icons from antd
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons";

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className='logo-container'>
            <Avatar src={icon} size="small" />
            <Typography.Title level={2} className='logo'>
                <Link to="/">CryptoMart</Link>
            </Typography.Title>
        </div> 
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />} />
        </Menu>
    </div>
  )
}   

export default Navbar;