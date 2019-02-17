
import React from 'react';
import Scroll from '../Scroll';
import { Styled, Nav, List, ListItem, Link } from './Styles';

import Api from '../api';



const links = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Contact',
    href: '#contact',
  }

]

const Navigation = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <Api />
        </ListItem>
        {links.map((link, index) => (
          <ListItem key={index}>
            <Link href={link.href}>{link.name}</Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
}




export default Navigation;