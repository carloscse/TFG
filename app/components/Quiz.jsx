import React from 'react';
import './../assets/scss/quiz.scss';

// import * as Utils from '../vendors/Utils.js';
import {finishApp} from './../reducers/actions';

import QuizChoice from './QuizChoice';
import * as SAMPLES from "../config/samples";
import {GLOBAL_CONFIG} from "../config/config";
import * as I18n from "../vendors/I18n";
import Finish from "./Finish";
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
/* componentDidMount(){
    // Create objectives
    let objective = new Utils.objective({id:"MyQuiz", progress_measure:1, score:1});
    this.props.dispatch(addObjectives([objective]));
  }*/
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
    // Calculate score
    let nChoices = this.props.quiz.choices.length;
    let correctAnswers = 0;
    for(let i = 0; i < nChoices; i++){
      let choice = this.props.quiz.choices[this.props.tracking.index];
      if(this.props.tracking.index === 0){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
        }
        break;
      }
      if(this.props.tracking.index === 1){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
        }
        break;
      }
      if(this.props.tracking.index === 2){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
        }
        break;
      }
      if(this.props.tracking.index === 3){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
        }
        break;
      }
    }
    this.props.tracking.nAnswers++;
    this.props.tracking.score = this.props.tracking.score + Math.max(correctAnswers * 10);
      //  let scorePercentage = Math.max(0, (correctAnswers) / this.props.quiz.choices.filter(function(c){return c.answer === true;}).length);
      // Send data via SCORM
      //  let objective = this.props.tracking.objectives.MyQuiz;
      //  this.props.dispatch(objectiveAccomplished(objective.id, objective.score * scorePercentage));
    // Mark quiz as answered
    // this.props.dispatch(answer(score));
    this.setState({answered:true});
  }

  onAnswerFalse(){
    // Calculate score
    let nChoices = this.props.quiz.choices.length;
    let correctAnswers = 0;
    for(let i = 0; i < nChoices; i++){
      let choice = this.props.quiz.choices[this.props.tracking.index];
      if(this.props.tracking.index === 0){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.props.tracking.index === 1){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.props.tracking.index === 2){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.props.tracking.index === 3){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
    }
    this.props.tracking.nAnswers++;
    this.props.tracking.score = this.props.tracking.score + Math.max(correctAnswers * 10);
      //  let scorePercentage = Math.max(0, (correctAnswers) / this.props.quiz.choices.filter(function(c){return c.answer === true;}).length);
      // Send data via SCORM
      //  let objective = this.props.tracking.objectives.MyQuiz;
      //  this.props.dispatch(objectiveAccomplished(objective.id, objective.score * scorePercentage));
    // Mark quiz as answered
    // this.props.dispatch(answer(score));
    this.setState({answered:true});
  }

  onNextQuestion(){
    let isLastQuestion = (this.state.current_question_index === this.props.quiz.choices.length - 1);
    if(this.props.tracking.index <= 3){
      this.props.tracking.index++;
    } else {
      this.props.dispatch(finishApp());
    }
    if(isLastQuestion === false){
      this.setState({current_question_index:(this.state.current_question_index + 1)});
    } else {
      this.props.dispatch(finishApp(true));
    }
    this.setState({selected_choices_titles:[], answered:false});
  }
  onRestartQuiz(){
    this.props.tracking.score = 0;
    this.props.tracking.index = 0;
    this.setState({selected_choices_titles:[], answered:false});
  }

 /* selectImg(){
    if(this.props.tracking.index === 0){
      return <img src={this.props.quiz.choices[0].img}/>;
    } else if(this.props.tracking.index === 1){
      return <img src={this.props.quiz.choices[1].img}/>;
    } else if(this.props.tracking.index === 2){
      return <img src={this.props.quiz.choices[2].img}/>;
    } else if(this.props.tracking.index === 3){
      return <img src={this.props.quiz.choices[3].img}/>;
    }
    return <img src={this.props.quiz.choices[0].img}/>;
  }*/
  render(){
    let appHeader = "";
    let appContent = "";
    if(this.props.tracking.index <= 3){
      appHeader = (
        <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} quiz={SAMPLES.quiz_example} game={this.props.game}/>
      );
      appContent = (
        <div className="quiz">
          <img className="image" src={this.props.quiz.choices[this.props.tracking.index].img}/>
          <div className="quizButtonsWrapper">
            <button className="restart" onClick={this.onRestartQuiz.bind(this)} disabled={!this.state.answered}>{this.props.I18n.getTrans("i.restart")}</button>
            <button className="answerTrue" onClick={this.onAnswerTrue.bind(this)} disabled={this.state.answered}>{this.props.I18n.getTrans("i.true")}</button>
            <button className="answerFalse" onClick={this.onAnswerFalse.bind(this)} disabled={this.state.answered}>{this.props.I18n.getTrans("i.false")}</button>
            <button className="next" onClick={this.onNextQuestion.bind(this)}>{this.props.I18n.getTrans("i.next")}</button>
          </div>
        </div>
      );
    } else {
      appContent = (
        <Finish dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }
   /* let choices = [];
    for(let i = 0; i < this.props.quiz.choices.length; i++){
      choices.push(<QuizChoice key={"MyQuiz_" + "quiz_choice_" + i} choice={this.props.quiz.choices[i]} checked={this.state.selected_choices_titles.indexOf(this.props.quiz.choices[i].title) !== -1} handleChange={this.handleChoiceChange.bind(this)} quizAnswered={this.state.answered}/>);
    }*/
    return (
      <div id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        {appHeader}
        {appContent}
      </div>
    );
  }
}
