import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation'
//import Navigation from './Navigation';
import {styled, Header1} from './Styles';

const Header = (props) => (
      <Header1>
        <Logo />
        <Navigation />
      </Header1>
    );
    //<Navigation />

export default Header;