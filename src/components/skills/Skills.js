import React from 'react';
import SkillBar from 'react-skillbars';
const SKILLS = [
  {
    "type": "Java",
    "level": 100
  },
  {
    "type": "React",
    "level": 85
  },
  {
    "type": "Javascript",
    "level": 75
  },
  {
    "type": "Spring",
    "level": 50
  },
  {
    "type": "Docker",
    "level": 25
  },
  {
    "type": "HTML",
    "level": 20
  },
  {
    "type": "NoSQL",
    "level": 0
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
  <div id="skills">
    <SkillBar skills={SKILLS} colors={colors} />
  </div>
);

export default Skills;