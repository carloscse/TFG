import React from 'react';
import './../assets/scss/quiz.scss';
import {onAnswer, finish, previous, next, restart} from './../reducers/actions';

import * as SAMPLES from "../config/samples";
import {GLOBAL_CONFIG} from "../config/config";
import * as I18n from "../vendors/I18n";
import SCORM from './SCORM.jsx';
import Header from './Header.jsx';

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

  onAnswerTrue(){
    if(this.props.game.index === this.props.quiz.choices.length){
      this.props.dispatch(onAnswer(true));
      this.props.dispatch(finish());
    } else {
      this.props.dispatch(onAnswer(true));
    }
    alert(this.props.quiz.choices[this.props.game.index].feedback);
  }

  onAnswerFalse(){
    if(this.props.game.index === this.props.quiz.choices.length){
      this.props.dispatch(onAnswer(false));
      this.props.dispatch(finish());
    } else {
      this.props.dispatch(onAnswer(false));
    }
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
