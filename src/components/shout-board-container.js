import React from "react";
import ShoutBoard from "../components/shout-board"

export default class ShoutBoardContainer extends React.Component {
    render() {
        return (
            <div className="o-shout-board w-100 flex flex-column flex-row-l">
            <div className="o-shout-board__info pb4 pb0-l pr4-l w-20-l w-100">
              <h2 className="f1 normal">Shout Your Aggie Pride!</h2>
              <p className="brand-black lh-copy">Did you attend NC A&T? What are you most proud of from attending A&T? Add your shoutout via the button below.</p>
              <a href="https://airtable.com/shrwe8HmwfGIbpfwC" target="_blank" rel="noreferrer" title="Form to Add Your Aggie Pride" className="a-shout link brand-dark-blue-bg white ttu pv3 ph4 br3 f5 b dib">Add Yours!</a>
              <p className="f6 mv3 mid-gray"><span className="b">We will never sell your information.</span><br/>To learn more, view our <a href="/privacy" target="_blank" className="brand-blue ttu f6 link dim" title="Privacy Policy">Privacy Policy</a>.</p>
              </div>
              <ShoutBoard className="o-shout-board__content w-80-l w-100 flex flex-wrap pa4 justify-center"/>
            </div>
        );
    }
}