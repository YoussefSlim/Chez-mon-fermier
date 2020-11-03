import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//import ButtonLogin from './button';
import './style.scss';
import { Link } from 'react-router-dom';

const LoginForm = ({ onChange, handleLog }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const handleLogin = (value) => {
    console.log('handllogin =>', value);
    handleLog(value);
  };

  const handleChange = (value) => {
    // console.log('handleCredentialsChange', event.target.value);
    // console.log('nam :', event.target.name);
    console.log('handlechange =>', value);
    onChange(value);
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: false }}
        onValuesChange={handleChange}
        onFinish={handleLogin}
        onFinishFailed={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/inscription">s'inscrire!</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
