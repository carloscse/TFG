import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="header">
        <h1 id="progress">{this.props.I18n.getTrans("i.progress_measure")}: {this.props.tracking.index + 1}/{this.props.quiz.choices.length}</h1>
        <h1 id="score">{this.props.I18n.getTrans("i.score")}: {this.props.tracking.score}</h1>
      </div>
    );
  }
}
/* let loggedText;
   let trackingTexts = [];

   if(typeof this.props.tracking.progress_measure === "number"){
     trackingTexts.push("Progress Measure: " + (this.props.tracking.progress_measure * 100) + "%");
   } else {
     trackingTexts.push("Progress Measure: null");
   }
   if(typeof this.props.tracking.score === "number"){
     trackingTexts.push("Score: " + (this.props.tracking.score * 100) + "%");
   } else {
     trackingTexts.push("Score: null");
   }

   let loggedEl = null;
   if(typeof loggedText === "string"){
     loggedEl = <p id="logged_user">{loggedText}</p>;
   }
   let trackingEls = trackingTexts.map(function(text, index){
     return <span key={index}>{text}</span>;
   });
*/
