import styled from 'styled-components';

/*********************************
*********Projects*****************
**********************************/

export const AllProjects = styled.div`
     margin-top: 2.1em;

`;

export const Work = styled.div`
    margin-top: 4em;
    display: grid;
    grid-template-columns: 1fr;
    padding: 1em;
`;

export const WorkGrid = styled.div`
     display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1em;
`;

export const PicturesProjects = styled.img`
    border-radius: 1em;
`;

export const ProjectsText = styled.p`
     padding: 1em;
     border: 1px solid rgba(165, 65, 123, 0.8);
    border-radius: 0.5em;
`;
