import { useDevDemo } from '../../../hooks/use-dev-demo'
import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const CoverImg = (
  <img
    alt="example"
    src="https://p3-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/75bbc65e0086441d8e518094eb2c3e02~tplv-mlhdmxsy5m-q75:0:0.image"
  />
);

const CsgCard = () => {
  const { orgName, slogan, member } = useDevDemo();
  return (
    <Card hoverable style={{ width: 300 }} cover={CoverImg} actions={member}>
      <Card.Meta title={orgName} description={slogan} />
    </Card>
  );
};

export default CsgCard