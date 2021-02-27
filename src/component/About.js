import React, { Component } from 'react';
import '../css/App.css';
class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="box sideDecor" data-testid="about-box">
                <h2 className="sectionHeaderText" id="about">About Me</h2>
                <div className="halfed">
                    <div>
                        <p className="paragraphText">
                            I am a wholistic minded developer residing
                            in Kentucky. I am looking for an Web Frontend
                            internship preferably in Kentucky or Texas but
                            I am more than willing to relocate if needs be. 
                        </p>
                        <p className="paragraphText">
                            I have a passion for art and learning. My focus is
                            with building projects using Java and JavaScript
                            though I also have experience with C++,C#,
                            Python, and other web technologies.
                        </p>
                    </div>
                    <div className="box highlights">
                        <h3 className="sectionHeaderText" id="about">Highlights</h3>
                        <ul>
                            <li>Devoted Learner</li>
                            <li>Thorough knowledge of Git</li>
                            <li>Clean code</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;