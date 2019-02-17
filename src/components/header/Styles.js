import styled from 'styled-components';


export const Header1 = styled.header`
margin: 1em 0 6em 0;
top: 0;
left: 0;
height: 100px;
display: flex;
flex-direction: row;
`;

export const ApiColor = styled.div`
    color: ${p => p.theme.main.hsl};
`;
