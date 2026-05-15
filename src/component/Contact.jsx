import React, { Component } from 'react';
import '../css/App.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        function sendEmail() {
            
        }
        return (
            <div className="box sideDecor" data-testid="contactComponent">
                <h2 className="sectionHeaderText" id="contact">Contact me</h2>
                <form method="POST" action="https://formspree.io/f/xoqpbeaw">
                    <input className="block" type="text" name="name" id="name" placeholder="Name"/>
                    <input className="block" type="email" name="_replyto" id="email" placeholder="Email"/>
                    <div>
                        <textarea  className="block" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <button className="button" onClick={sendEmail()}>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Contact;