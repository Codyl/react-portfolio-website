import React, { Component } from 'react';
import '../css/App.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownExpanded: false
        };
    }
    smallScreenNavToggle() {
        this.setState(prevState => ({
            dropdownExpanded: !prevState.dropdownExpanded
          }));
    }
    smallScreenNavMinimize() {
        this.setState(prevState => ({
            dropdownExpanded: false
          }));
    }
    componentDidMount() {
        const titleNav = document.getElementById('titleNav');
        document.addEventListener("scroll", () => {
            this.setState(prevState => ({
                dropdownExpanded: false
              }));
            if(window.scrollY > 400) {
                titleNav.classList.remove('isHidden');
            }
            else if(window.scrollY < 350){
                titleNav.classList.add('isHidden');
            }
            if(this.displayActive) {
                this.setState({
                    dropdownExpanded: false
                });
            }
        });
    }
    render () {  
        return (
            <nav id="nav" className={this.state.dropdownExpanded ? "navExpanded" : "navNotExpanded"}>
                <h1 className="titleNav isHidden white outline" id="titleNav">Cody Lillywhite</h1>
                <a className="navIconBars white " id="navIcon" onClick={() => this.smallScreenNavToggle()}>
                <FontAwesomeIcon icon={faBars} />
                </a> 
                <div className={this.state.dropdownExpanded ? "isNotHidden block left" : "isHidden inline"}>
                    <a id="navAbout" className="navSectionAnchor navText" href="#about" onClick={() => this.smallScreenNavMinimize()}>About</a>
                    <a id="navInterests" className="navSectionAnchor navText" href="#interests" onClick={() => this.smallScreenNavMinimize()}>Interests</a>
                    <a id="navProjects" className="navSectionAnchor navText" href="#projects" onClick={() => this.smallScreenNavMinimize()}>Projects</a>
                    <a id="navContact" className="navSectionAnchor navText" href="#contact" onClick={() => this.smallScreenNavMinimize()}>Contact</a>
                </div>
            </nav>
        );
    }
}
export default Navigation;