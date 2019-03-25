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
    padding: 2em;
    @media (max-width: 600px) {
        margin-left: 1em;
        width: 15em;
  }
  @media (min-width: 992px) {
        width: 20em;     
  }
`;


export const WorkGrid = styled.div`
     display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    margin: 0 11em;

    @media (max-width: 600px) {
      margin-left: 1em;
        width: 15em;       
  }
`;

export const PicturesProjects = styled.img`
    border-radius: 1em; 
    @media (max-width: 600px) {       
        width: 15em;
  }
`;

export const ProjectsText = styled.p`
     padding: 1em;
     border: 1px solid rgba(165, 65, 123, 0.8);
    border-radius: 0.5em;

    @media (max-width: 600px) {     
        width: 15em;
  }
`;
