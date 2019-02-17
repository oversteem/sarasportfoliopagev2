import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    height: 100%;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1.7em;

`;

export const ListItem = styled.li`
    margin: 1em;
    list-style: none;

`;

export const Link = styled.a`
    color: ${p => p.theme.main.hsl};
    text-decoration: none; 
    font-style: italic;

`;