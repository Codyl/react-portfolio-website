import React, { Component } from 'react';
import '../css/App.css';
class Interests extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="box sideDecor" data-testid="interests-box">
                <h2 className="sectionHeaderText" id="interests">Interests</h2>
                <ul>
                    <li> Web front end</li>
                    <li> Exploring different tools and technologies</li>
                    <li> Teaching programming</li>
                    <li> Making something new and exciting</li>
                    <li> Long distance running</li>
                </ul>
            </div>
        );
    }
}
export default Interests;