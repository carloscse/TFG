import React from 'react';
import './../assets/scss/quiz.scss';
import {onAnswerWithScorm, finish, previous, next, restart, addObjectives} from './../reducers/actions';

import * as Utils from '../vendors/Utils.js';
import * as SAMPLES from "../config/samples";
import {GLOBAL_CONFIG} from "../config/config";
import * as I18n from "../vendors/I18n";
import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import Modal from './Modal.jsx'

export default class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected_choices_titles:[],
      current_question_index:0,
    };
  }

  handleChoiceChange(choice){
    let newSelectedChoices = Object.assign([], this.state.selected_choices_titles);
    let indexOf = newSelectedChoices.indexOf(choice.title);
    if(indexOf === -1){
      newSelectedChoices.push(choice.title);
    } else {
      newSelectedChoices.splice(indexOf, 1);
    }
    this.setState({selected_choices_titles:newSelectedChoices});
  }

  componentDidMount(){
    // Create objectives (One per question included in the quiz)
    let objectives = [];
    let nQuestions = this.props.quiz.choices.length;
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Pregunta" + (i + 1)), progress_measure:(1 / nQuestions), score:(this.props.quiz.choices[i].score)}));
    }
    this.props.dispatch(addObjectives(objectives));
  }

  onAnswerTrue(){
    this.props.dispatch(onAnswerWithScorm(true));
    alert(this.props.quiz.choices[this.props.game.index].feedback_text);
  }

  onAnswerFalse(){
    this.props.dispatch(onAnswerWithScorm(false));
    alert(this.props.quiz.choices[this.props.game.index].feedback);
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
  }

  onEnd(){
    this.props.dispatch(finish());
  }

  render(){
    return (
      <div id="container">
        {/* <Modal dispatch={this.props.dispatch} tracking={this.props.tracking} game={this.props.game} quiz={SAMPLES.quiz_example}/>*/}
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        <div className="header">
        <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} quiz={SAMPLES.quiz_example2} game={this.props.game}/>
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
