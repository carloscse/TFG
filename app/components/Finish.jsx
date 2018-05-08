import React from 'react';
import * as I18n from '../vendors/I18n.js';

export default class Finish extends React.Component {
  constructor(props){
    super(props);
  }
  _getFinishScreenTitle(score){
    let finishTitleText;
    let puntos = 0;
    let porcentaje = (this.props.game.nAnswers / this.props.quiz.choices.length) * 100;
    for(let i = 0; i < this.props.quiz.choices.length; i++){
      puntos += this.props.quiz.choices[i].score;
    }
    finishTitleText = I18n.getTrans("i.finish_screen_title_full", {score:(score), puntos:(puntos), porcentaje:(porcentaje)});
    return finishTitleText;
  }

  render(){
    let finishTitleText = this._getFinishScreenTitle(this.props.game.score);
    return (
        <div className="finish_screen">
            <h1 id="finish_title">{finishTitleText}</h1>
        </div>
    );
  }
}
