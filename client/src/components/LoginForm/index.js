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
        
      <div className="formulaire-connexion">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: false }}
        onValuesChange={handleChange}
        onFinish={handleLogin}
        onFinishFailed={onFinish}
      >
        <span src="/icons/user.png" className="icon-user-log"/>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Veuillez renseigner votre email!' }]}
          className="input-login-formulaire"
        >
          <Input prefix={<UserOutlined className="site-form-item-icon icon-log-form" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Entrez votre mot de passe' }]}
          className="input-login-formulaire"
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon icon-log-pswd" />}
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Item>
        

        <Form.Item className="group-button-log">
          <Button type="button" htmlType="submit" className="btn-marine btn btn-login-formulaire">
            Connexion
          </Button>
           <p> ou </p>
           <Button type="button" htmlType="submit" className="btn-green btn btn-login-formulaire"><a href="/inscription">Inscription</a></Button>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Se souvenir de moi</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Mot de passe perdu ?
          </a>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};

export default LoginForm;
