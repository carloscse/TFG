import React from 'react';
// import './../assets/scss/finish_screen.scss';

export default class FinishScreen extends React.Component {
  constructor(props){
    super(props);
  }
  _getFinishScreenTitle(score){
    let finishTitleText;
    let nChoices = this.props.quiz.choices.length;
    let nTotal = (this.props.tracking.nAnswers / nChoices) * 100;
    let hasProgressMeasure = (typeof nTotal === "number");
    let hasScore = (typeof score === "number");
    if(hasProgressMeasure && hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_full", {nTotal:(nTotal), score:(score)});
    } else if(hasProgressMeasure){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_wpm", {nAnswers:(nTotal)});
    } else if(hasScore){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_ws", {score:(score)});
    }
    if(typeof finishTitleText === "undefined"){
      finishTitleText = this.props.I18n.getTrans("i.finish_screen_title_simple");
    }
    return finishTitleText;
  }

  render(){
    let finishTitleText = this._getFinishScreenTitle(this.props.tracking.score);
    return (
        <div className="finish_screen">
            <h1 id="finish_title">{finishTitleText}</h1>
        </div>
    );
  }
}
