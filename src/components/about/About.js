import React from 'react';
import Portrait from '../about/sara4.jpg';
import { Flexcontainer2, Profilpicture, Picture, Section, Article } from './Styles';
import { Heading2, Heading3, Heading5, } from '../../basic/styles';

const About = (props) => (

      <Flexcontainer2>
          <Profilpicture>
            <Picture>
              <img src={Portrait} alt="profilpicture" />
            </Picture>
          </Profilpicture>
          <Section>
            <Heading2 id="about">About</Heading2>
            <Heading3> &lt; Who am I? &gt;</Heading3>
            <Article>
              <Heading5>This is me</Heading5>
              My name is Sara Överström and I am 31 years old. Not long ago I made a decision <br /> 
              to start studying Front End Developer at KYH Stockholm, and it was the best thing 
              I have ever done.  I just started coding 2 moths ago and I  love it. <br />It’s not easy
              to find something in life that challenges you and is fun and inspiring at the same
              time.<br /> <br />I love how every day coding challenges both my mind and me as a person. It 
              lets <br />me explore and find new solutions. It keeps me focused, on my toes and allows<br />
              me to think out side the box. Every day it leaves me wanting more. <br />
              I am the class representative to the Management Team of my education. <br />
              I am always laughing. I am a down to earth, caring person, who loves to hang out <br />
              with my friends.
              I also love to dance Square dance and spending time with horses.<br />
            </Article>
            <Heading3> &lt; How do I work? &gt;</Heading3>
            <Article>
              <Heading5>Oh that’s a tough one</Heading5>
              I am stubborn, determined, and I have a mind of my one.  I like solving problems,<br />
              meet new people and try new things. During my career I have always worked with people
              and because of that I ’m very service minded. To help costumers get what they need and 
              create customer satisfaction is something I care a lot about. <br />
              <br />I like to work, agileIn, in a team and on my own.  When I work it is important for me to
              be organised, structured, efficient and flexible.
            </Article>
            <Heading3> &lt; What have I done? &gt;</Heading3>
            <Article>
              <Heading5>The short version is</Heading5>
              When I was a teenager I worked weekends in a stable as a stable host. My duties were bringing
              in the horses and helping the riders to get them ready in time for the lesson. This thought me 
              to be organised, structured and efficient. <br />
              <br />After finish higschool I bought my own pet shop. It was a great experience and it thought me 
              to build something out of nothing. It, thought me the value of, customer satisfaction, customer
              service and the importance of a study costumer base as well as finding new creative ways to find 
              new ones. <br />It is not easy to be a young businesswoman. You have to have a mind of your own, be driven,
              focused and organised. You have to be able to handle many things at ones and you can’t be afraid to 
              meet new people. <br />I had the shop for 5 years and In that time I also became a certified dog trainer 
              with the SBK. Working as a dog trainer I learned to tackle different types of people, and find ways
              to get them to work towards a common goal as a team. It also taught me to be direct, consistent and 
              humble. <br />
              <br />Before I went back to school and Front End, I worked in the family company Järfälla Låsservice 
              for 6 years as a locksmith. I was responsible for the work inside the shop. I answered the phone, 
              booked jobs, took care of costumers.<br /> I was responsible for ordering and handling supplies. 
              I made sure  my coworkers had everything they needed to do a good job. <br />During me time here, 
              I had to be, service minded, organised, efficient and structured. I had to juggle many things and be
              able to handle stress. I learned how to be flexible and a team player. I also learned how in a team 
              if you want to do a good job, every player is important.
            </Article>
          </Section>
    
      </Flexcontainer2>
    );

      export default About