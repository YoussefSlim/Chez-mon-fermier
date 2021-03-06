import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Checkbox, Button } from 'antd';
import './style.scss';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp = ({ onChange, handleForm, signup }) => {
  console.log(signup);
  const [form] = Form.useForm();

  const history = useHistory();
  const onclick = () => {
    if (!signup) {
      history.push('/authentification');
    } else {
      history.push('/inscription');
    }
  };

  const handleSend = (value) => {
    console.log('handlsend =>', value);
    handleForm(value);
    onclick();
  };
  const handleChange = (value) => {
    console.log('handlechange =>', value);
    onChange(value);
  };

  return (
    <>
      <div className="formulaire-inscription">
      <h1 className="title-form-signup">Création de mon compte utilisateur</h1>
      <Form 
        className="signup"
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={handleSend}
        onValuesChange={handleChange}
      >
        <span src="/icons/user.png" className="icon-user-signup"/>
        <Form.Item
          name="first_name"
          label="Nom"
          rules={[{ required: true, message: 'Veuillez entrer votre nom!', whitespace: true }]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Prenom"
          rules={[{ required: true, message: 'Veuillez entrer votre prénom!', whitespace: true }]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Adresse"
          rules={[{ required: true, message: 'Veuillez entrer votre adresse!' }]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item name="additional_address" label="Lieu-dit">
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item
          name="postcode"
          label="Code postal"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item
          name="department"
          label="Departement"
          rules={[{ required: true, message: 'Veuiller entre votre N° de departement!' }]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item
          name="city"
          label="Ville"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item
          name="phone_number"
          label="N° de mobile"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Votre adresse email doit contenir @!',
            },
            {
              required: true,
              message: 'Veuillez entrer votre mot de passe!',
            },
          ]}
        >
          <Input className="input-formulaire-signup" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Veuillez entrer votre mot de passe!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="passwordConfirm"
          label="Confirmation mot de passe"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Veuillez entrer votre mot de passe!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Veuillez entrer le mêm mot de passe!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Je reconnais avoir lu les <a href="">Conditions Générales de Ventes</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="button" className="btn-green btn" htmlType="submit">
            S'inscrire
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};

export default SignUp;
