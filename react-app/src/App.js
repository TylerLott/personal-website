import React, { Component } from "react";
import { useSpring, animated } from "react-spring";
import resumeData from "./resumeData";
import SplashScreen from "./Components/SplashScreen";
import Header from "./Components/Header";
import Socials from "./Components/Socials";
import Navigation from "./Components/Navigation";
import Skills from "./Components/Skills";
import ResumeSection from "./Components/ResumeSection";
import ProjectSection from "./Components/ProjectSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: false,
      renderSplashscreen: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickToClose = this.handleClickToClose.bind(this);
    this.splashTimer();
  }

  splashTimer() { 
      setTimeout(() => {
         this.setState({ renderSplashscreen: false });
       }, 3500);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleClickToClose(e) {
    const button = document.querySelector(".menu-button");
    if (e.target !== button && !button.contains(e.target)) {
      this.setState({ isToggleOn: false });
    }
  }

  render() { 
    
    if (this.state.renderSplashscreen) {
      return <SplashScreen/>;
    }

    return (
      <div className="App" id="Home" onClick={this.handleClickToClose}>

        <div className="mobile-menu">
          <button
            onClick={this.handleClick}
            className={
              this.state.isToggleOn ? "active menu-button" : "menu-button"
            }
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </button>
        </div>

        <Navigation toggle={this.state.isToggleOn} data={resumeData.menu} />
        <div className="wrapper">
          <Header props={resumeData} />
          <Socials data={resumeData.socialLinks} />
          <main>
            <Skills data={resumeData.skills} />
            <ResumeSection data={resumeData.experience} />
            <ResumeSection data={resumeData.education} />
            <ProjectSection data={resumeData.projects} />
          </main>

        </div>
      </div>
    );
  }
}

export default App;
