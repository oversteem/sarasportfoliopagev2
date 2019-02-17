import React from 'react';
import { Styled, Heading2 } from '../../basic/styles';
import { Social } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => (

  <div>
    <Heading2 id="contact">Contact</Heading2>
    <Social>
      <a href="https://www.linkedin.com/in/sara-%C3%B6verstr%C3%B6m-19700b164/"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></a>
      <a href="https://github.com/oversteem"><FontAwesomeIcon icon={["fab", "github"]} /></a>
      <a href="mailto:contactsaraoverstrom@gmail.com"><FontAwesomeIcon icon={["fas", "envelope"]} /></a>
    </Social>
  </div>
);

export default Contact; 