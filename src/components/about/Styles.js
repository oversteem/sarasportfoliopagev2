//import React from 'react';
import styled from 'styled-components';



/*********************************
******Styles for the About******** 
**********************************/

export const Flexcontainer2 = styled.div`
     position: relative;
    justify-content: center; 
    flex-direction: column;
    display: flex; 
    align-items: center;
    list-style-type: none;
    padding: 1em;
`;

export const Profilpicture = styled.div`
     position: absolute;
    top: 1em;
    width: 0.4em;
    height: 0.4em; 
    justify-content: center;
    flex-direction: row;
    display: flex;
    align-self: center;
    flex-wrap: wrap;
`;

export const Picture = styled.picture`

`;

export const Section = styled.section`
    padding-top: 100px;
`;

export const Article = styled.article`
     border: 1px solid ${p => p.theme.main.light(15)};
    border-radius: 0.5em;
    padding: 1em;
    margin: 0 11em 0 11em;
    @media (max-width: 600px) {
      margin-left: 10em;
        width: 15em;       
  }
`;