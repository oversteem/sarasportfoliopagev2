import styled from 'styled-components';

/*********************************
*********Headings*****************
**********************************/
export const Heading1 = styled.h1`
    text-align: center;
    display: block;
    color: ${p => p.theme.main.hsl
    };
    font-style: italic;
    font-size: 2.4em;  
    margin-bottom: 3em;
`;

export const Heading2 = styled.h2`
    margin-top: 3em;
    text-align: center;
    font-size: 2.5em;
    color: ${p => p.theme.main.light(9)};
    font-style: italic;
`;

export const Heading3 = styled.h3`
    text-align: center;
    font-size: 1.9em;
    color: ${p => p.theme.main.light(7)};
    font-style: italic;
`;

export const Heading5 = styled.h5`
   text-align: start;
    font-size: 1em;
    color: ${p => p.theme.main.light(7)};
    font-style: italic;
    margin: auto;
`;
export const NavScroll = styled.div`
    text-align: center;
    font-size: 1.9em;
    color: ${p => p.theme.main.hsl};
    font-style: italic;
`;

export const Logo = styled.picture`

`;

