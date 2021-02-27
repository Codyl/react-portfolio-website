import React, { Component } from 'react';
import '../css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons' 

class Opening extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render () {
        return (
            
            <div id="open">
                <img src=".\img\self-portrait.jpg" alt="" id="selfPortrait"/>
                <h1 className="titleNav isHidden white outline" id="titleNav">Cody Lillywhite</h1>
                <h1 className="white decorativeText center" id="codyLillywhiteh1">Cody Lillywhite</h1>
                <div className="white navText">Software Engineering student at BYU-I</div>
                <hr id="titleHr"/>
                <div className="icons">
                    <a className="icon" href="https://github.com/Codyl"> 
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/cody-lillywhite/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="icon" href="https://dev.to/codyl"> 
                        <FontAwesomeIcon icon={faDev} />
                    </a>
                </div>
            </div>
        );
    }
}
export default Opening;