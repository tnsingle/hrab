import React, { Component } from "react";
import ShoutBoard from "../components/shout-board"

export default class ShoutBoardContainer extends Component {
    render() {
        return (
            <div className="o-shout-board w-100 flex flex-column flex-row-l">
            <div className="o-shout-board__info pb4 pb0-l pr4-l w-20-l w-100">
              <h2 className="f1 normal">What Does Aggie Pride Mean to You?</h2>
              <p className="brand-black lh-copy">
                  "Aggie Pride" is a catchphrase that encompasses the love and pride that students have for North Carolina A&T State University. Compared to the 130 year history of North Carolina A&T, the “Aggie Pride” catchphrase is relatively new. The sense of “Aggie Pride”, however, has been around, for decades. You may recall phrases such as “Aggie Spirit” and “Aggie born, Aggie bred, and when I die I’ll be an Aggie dead!” that students used to express their school pride.

                <br/><br/>Most recently, an acronym has been created to go along with the meaning: Achieving Great Goals In Everything

                <br/><br/>What does Aggie Pride mean to you? Shout your Aggie Pride for everyone to hear!</p>
              <a href="https://airtable.com/shrwe8HmwfGIbpfwC" target="_blank" rel="noreferrer" title="Form to Add Your Aggie Pride" className="a-shout link brand-dark-blue-bg white ttu pv3 ph4 br3 f5 b dib">Add Yours!</a>
              <p className="f6 mv3 mid-gray"><span className="b">We will never sell your information.</span><br/>To learn more, view our <a href="/privacy" target="_blank" className="brand-blue ttu f6 link dim" title="Privacy Policy">Privacy Policy</a>.</p>
              </div>
              <ShoutBoard className="o-shout-board__content w-80-l w-100 flex flex-wrap justify-center"/>
            </div>
        );
    }
}