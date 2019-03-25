import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation'
//import Navigation from './Navigation';
import { styled, Header1 } from './Styles';

const Header = ({ click }) => (
  <Header1>
    <Logo click={click} />
    <Navigation />
  </Header1>
);

export default Header;