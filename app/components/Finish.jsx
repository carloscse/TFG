import React from 'react';
import * as I18n from '../vendors/I18n.js';
import {finish} from './../reducers/actions';
import {restart} from "../reducers/actions";

export default class Finish extends React.Component {
  constructor(props){
    super(props);
  }
  _getFinishScreenTitle(score){
    let finishTitleText;
    let puntos = 0;
    let acertadas = this.props.game.nAnswers;
    let longitud = this.props.quiz.choices.length;
    for(let i = 0; i < this.props.quiz.choices.length; i++){
      puntos += this.props.quiz.choices[i].score;
    }
    if(score < puntos / 2){
      finishTitleText = I18n.getTrans("i.finish_screen_title_suspenso", {score:(score), puntos:(puntos), acertadas:(acertadas), longitud:(longitud)});
    } else if(score >= puntos / 2 && score <= ((3 * puntos) / 4)){
      finishTitleText = I18n.getTrans("i.finish_screen_title_notable", {score:(score), puntos:(puntos), acertadas:(acertadas), longitud:(longitud)});
    } else if(score === puntos){
      finishTitleText = I18n.getTrans("i.finish_screen_title_sobresaliente", {score:(score), puntos:(puntos), acertadas:(acertadas), longitud:(longitud)});
    }
    return finishTitleText;
  }

  onRestartQuiz(){
    this.props.dispatch(restart());
  }

  render(){
    let finishTitleText = this._getFinishScreenTitle(this.props.game.score);
    return (
        <div className="finish_screen">
          <h1 id="finish_title">{finishTitleText}</h1>
          <div className="quizButtonsWrapper">
            <button className="restart" onClick={this.onRestartQuiz.bind(this)}>{I18n.getTrans("i.restart")}</button>
          </div>
        </div>
    );
  }
}
