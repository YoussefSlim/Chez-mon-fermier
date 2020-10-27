// import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line object-curly-newline
import { Navbar, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Input, AutoComplete } from 'antd';
import Login from 'src/containers/Login';

import './style.scss';

const renderTitle = (title) => {
  return (
    <span>
      {title}
      <a
        style={{
          float: 'right',
        }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
};

const renderItem = (title) => {
  return {
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
      </div>
    ),
  };
};
const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('Categories', 10000), renderItem('Products', 10600)],
  },
];

const HeadBar = () => (
  <Container>
    <Navbar sticky="top" bg="dark" expand="x-lg">
      <Navbar.Brand href="#home">
        <img src="/app_log.png" alt="logo" />
      </Navbar.Brand>

      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{
          width: 250,
        }}
        options={options}
      >
        <Input.Search size="large" placeholder="chercher" />
      </AutoComplete>
      <Login />
      <a href="#">
        <ShoppingCartOutlined title="shopping" />
      </a>
    </Navbar>
  </Container>
);

export default HeadBar;
