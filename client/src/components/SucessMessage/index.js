import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

const SucessMessage = () => (
  <div className="">
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[<Link to="/">revenir à l'acceuil</Link>]}
    />
  </div>
);

export default SucessMessage;
