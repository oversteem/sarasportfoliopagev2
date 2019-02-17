import React from  'react';
import Projectkyh from '../../assets/projectkyh1@2x.jpg';
import Portfoliopage from '../../assets/portfoliopage@2x.jpg';
import { Heading2 } from '../../basic/styles';
import { AllProjects, Work, WorkGrid, PicturesProjects, ProjectsText } from './Styles';

const Projects = () => (

            <AllProjects>
              <Heading2 id="projects">Projects</Heading2>
              <Work>
                <WorkGrid>
                  <PicturesProjects src={Projectkyh} alt="projectkyh" />
                  <ProjectsText>
                    This was my first assignment. Using a form I had to create a list of
                    all the different educations that my school can offer you. I then had 
                    to make it so you as a visitor could choose the program you wanted. 
                    <br />The form is very simple. You can not yet klick the button to send in your
                    choice , because I have’n learned about backend jet.  When I made this I
                    hade just learned about CSS. You might wonder why there is a guy running
                    on the page. The answer is that I was curious about sprite animations and 
                    I wanted to try it out. <br />
                    <br />At the beginning of the assignment I did not fully understand what to 
                    put in html and what to put in css. I also had to work out how class and id 
                    was connected between the files, and at the end of the assignment it all became clear.
                  </ProjectsText>
                </WorkGrid>
                <WorkGrid>
                  <PicturesProjects src={Portfoliopage} alt="projectkyh" id="portfoliopage" />
                  <ProjectsText>
                    Making the portfolio page my main focus was to make it as personal as possible without 
                    losing the elegant design. <br />
                    <br />I wanted to make the page responsive so that you as a visitor without difficulty 
                    could view it from your phone or iPad. To make this possible I used flex-box. 
                    It took a while to understand it, but once I did, it made my coding much easier. <br />
                    <br />The only JS I used are shown in the circles. I wanted to show my Training ooh focus 
                    levels. <br />
                    <br />The logo in the left corner of the header is an vector picture I made.
                  </ProjectsText>
                </WorkGrid>
              </Work>
            </AllProjects>
        
        );

export default Projects;