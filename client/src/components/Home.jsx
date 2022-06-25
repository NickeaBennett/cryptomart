import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Title level={2} className="heading">Crypto Statistics</Title>
      <Row gutter={[32, 32]}>
        {/* Antd has 24 columns. Max half screen size in width*/}
        <Col span={12}> <Statistic title="Total Cryptocurrencies" Value='24' /></Col>
        <Col span={12}> <Statistic title="Total Exchanges" Value='24' /></Col>
        <Col span={12}> <Statistic title="Total Market Cap" Value='24' /></Col>
        <Col span={12}> <Statistic title="Total 24h Volume" Value='24' /></Col>
        <Col span={12}> <Statistic title="Total Markets" Value='24' /></Col>
        {/* <Col span={12}> <Statistic title="Total Cryptocurrencies" Value='24' /></Col> */}
      </Row>
    </>
  )
}

export default Home;