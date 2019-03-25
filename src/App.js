import React, { Component } from 'react';
//import Route from 'react-router-dom';
// HEJ!
//import logo from './logo.svg';
//import './App.css';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import { Heading1 } from './basic/styles';
import Scroll from './components/Scroll';
//import Navigation from './components/Navigation';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Color from './components/Color';
import { ThemeProvider } from 'styled-components';
import Footer from './components/footer/index';



library.add(fas, fab)

class App extends Component {
  state = {
    theme: {
      main: new Color(350, 77, 60, 1),
    }
  };

  changeColor = (hue = 350) => {
    return this.setState((prevState) => ({
      theme: {
        main: new Color(hue, 77, 60, 1),
      }
    }));
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="app">
          <Header click={this.changeColor} />
          <Scroll />
          <Heading1> &lt; Front End Developer in Stockholm &gt; </Heading1>
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
};



export default App;
