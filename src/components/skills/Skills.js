import React from 'react';
import SkillBar from 'react-skillbars';
import { MySkills } from './Styles';

const SKILLS = [

  {
    "type": "React",
    "level": 20
  },
  {
    "type": "Javascript",
    "level": 45
  },


  {
    "type": "HTML",
    "level": 80
  },
  {
    "type": "CSS",
    "level": 80
  }
]
const colors = {
  "bar": {
    "hue": 350,
    "saturation": 77,
    "level": {
      "minimum": 80,
      "maximum": 100
    }

  },
  title: {
    text: {
      hue: 0,
      saturation: 0,
      level: 13
    },
    background: {
      hue: 350,
      saturation: 77,
      level: 60
    }
  }
}

const Skills = (props) => (
  <MySkills id="skills">
    <SkillBar skills={SKILLS} colors={colors} />
  </MySkills>
);

export default Skills;