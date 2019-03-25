import styled from 'styled-components';

export const Procented = styled.footer`
text-align: start;
    font-size: 1em;
    color: ${p => p.theme.main.light(7)};
    font-style: italic;

    @media (max-width: 600px) {
      margin-left: 5em;
        width: 15em;
  }
`;