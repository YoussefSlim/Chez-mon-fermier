import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginModal = ({ onChange, handleLog, handleLogout }) => {
  const handleLogin = (value) => {
    // TODO empecher le chargement de la page
    //event.preventDefault();
    handleLog(value);
  };

  const handleChange = (value) => {
    // console.log('handleCredentialsChange', event.target.value);
    // console.log('nam :', event.target.name);
    console.log(value);
    onChange(value);
  };

  const handleLoginFailed = (errorInfo) => {
    console.log('Error ', errorInfo);
  };
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleSubmit = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <UserOutlined onClick={showModal} title="Se connecter" />

      <Modal title="S'identifier" visible={visible} onCancel={handleCancel} footer={[]}>
        <Form
          {...layout}
          name="normal-login"
          initialValues={{ remember: true }}
          onValuesChange={handleChange}
          onFinish={handleLogin}
          onFinishFailed={handleLoginFailed}
        >
          <Form.Item
            label="Votre Identifiant"
            name="email"
            rules={[{ required: true, message: 'Veuillez entrer votre email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Veuillez entrer votre identifiant!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>se souvenir de moi</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Se connecter
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

//LoginModal.propTypes = {};

export default LoginModal;
