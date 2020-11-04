import React from 'react';

import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchBar = () => (
  <>
    <Search placeholder="Recherchez un produit" onSearch={onSearch} />
  </>
);

export default SearchBar;
