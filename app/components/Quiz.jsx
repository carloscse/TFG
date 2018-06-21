import React from 'react';
import './../assets/scss/quiz.scss';
import {onAnswer, onAnswerWithScorm, finish, previous, next, restart, addObjectives, resetObjectives} from './../reducers/actions';

import * as Utils from '../vendors/Utils.js';
import * as SAMPLES from "../config/samples";
import {GLOBAL_CONFIG} from "../config/config";
import * as I18n from "../vendors/I18n";
import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import MyModal from './MyModal.jsx';

export default class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {show:false};
  }

  handleClose(){
    this.setState({show:false});
  }
  componentDidMount(){
    // Create objectives (One per question included in the quiz)
    let objectives = [];
    let nQuestions = this.props.quiz.choices.length;
    for(let i = 0; i < nQuestions; i++){
      let score = this.props.quiz.choices[i].score;
      objectives.push(new Utils.Objective({id:("Pregunta " + (i + 1)), progress_measure:(1 / nQuestions), score:(score)}));
    }
    this.props.dispatch(addObjectives(objectives));
  }

  onAnswerTrue(){
    this.props.dispatch(onAnswerWithScorm(true));
    this.setState({show:true});
  }

  onAnswerFalse(){
    this.props.dispatch(onAnswerWithScorm(false));
    this.setState({show:true});
  }

  onNextQuestion(){
    if(this.props.game.nAnswers === this.props.quiz.choices.length){
      this.props.dispatch(finish());
    }
    if(this.props.game.index <= this.props.quiz.choices.length - 1){
      this.props.dispatch(next());
    }
  }

  onPreviousQuestion(){
    if(this.props.game.nAnswers === this.props.quiz.choices.length){
      this.props.dispatch(finish());
    }
    if(this.props.game.index <= this.props.quiz.choices.length - 1){
      this.props.dispatch(previous());
    }
  }

  onRestartQuiz(){
    this.props.dispatch(restart());
    this.props.dispatch(resetObjectives(objectives));
  }

  onEnd(){
    this.props.dispatch(finish());
  }

  render(){
    return (
      <div id="container">
        <MyModal show={this.state.show} handleClose={this.handleClose} dispatch={this.props.dispatch} tracking={this.props.tracking} game={this.props.game} quiz={SAMPLES.quiz_example}/>
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <div className="header">
        <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} quiz={SAMPLES.quiz_example} game={this.props.game}/>
        </div>
        <div className="quiz">
          <h1>{this.props.quiz.choices[this.props.game.index].title}</h1>
          <img className="image" src={this.props.quiz.choices[this.props.game.index].img}/>
          <div className="quizButtonsWrapper">
            <p>
              <button className="next" onClick={this.onNextQuestion.bind(this)}>{I18n.getTrans("i.next")}</button>
              <button className="previous" onClick={this.onPreviousQuestion.bind(this)}>{I18n.getTrans("i.previous")}</button>
              <button className="answerTrue" onClick={this.onAnswerTrue.bind(this)} disabled={this.props.quiz.choices[this.props.game.index].answered === true}>{I18n.getTrans("i.true")}</button>
              <button className="answerFalse" onClick={this.onAnswerFalse.bind(this)} disabled={this.props.quiz.choices[this.props.game.index].answered === true}>{I18n.getTrans("i.false")}</button>
            </p>
            <p>
              <button className="restart" onClick={this.onRestartQuiz.bind(this)}>{I18n.getTrans("i.restart")}</button>
            </p>
            <p>
              <button className="end" onClick={this.onEnd.bind(this)}>{I18n.getTrans("i.end")}</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
