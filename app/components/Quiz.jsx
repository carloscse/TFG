import React from 'react';
import './../assets/scss/quiz.scss';

import * as Utils from '../vendors/Utils.js';
import {addObjectives, answer, finishApp} from './../reducers/actions';

import QuizChoice from './QuizChoice';

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
    // FOREACH?
    for(let i = 0; i < nChoices; i++){
      let choice = this.props.quiz.choices[i];
      if(this.props.tracking.index === 0){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
      if(this.props.tracking.index === 1){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
      if(this.props.tracking.index === 2){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
      if(this.props.tracking.index === 3){
        // Answered choice
        if(choice.answer === true){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
    }
    this.props.tracking.score = Math.max(correctAnswers * 10);
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
    // FOREACH?
    for(let i = 0; i < nChoices; i++){
      let choice = this.props.quiz.choices[i];
      if(this.props.tracking.index === 0){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
      if(this.props.tracking.index === 1){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
      if(this.props.tracking.index === 2){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
      if(this.props.tracking.index === 3){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
          this.props.tracking.index++;
        }
        break;
      }
    }
    this.props.tracking.score = Math.max(correctAnswers * 10);
      //  let scorePercentage = Math.max(0, (correctAnswers) / this.props.quiz.choices.filter(function(c){return c.answer === true;}).length);
      // Send data via SCORM
      //  let objective = this.props.tracking.objectives.MyQuiz;
      //  this.props.dispatch(objectiveAccomplished(objective.id, objective.score * scorePercentage));
    // Mark quiz as answered
    // this.props.dispatch(answer(score));
    this.setState({answered:true});
  }

  onNextQuestion(){
    let isLastQuestion = (this.state.current_question_index === this.props.quiz.choices.length);
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

  selectImg(){
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
  }
  render(){
    let choices = [];
    for(let i = 0; i < this.props.quiz.choices.length; i++){
      choices.push(<QuizChoice key={"MyQuiz_" + "quiz_choice_" + i} choice={this.props.quiz.choices[i]} checked={this.state.selected_choices_titles.indexOf(this.props.quiz.choices[i].title) !== -1} handleChange={this.handleChoiceChange.bind(this)} quizAnswered={this.state.answered}/>);
    }

    return (
      <div className="quiz">
          <img id="imagen"/>
          <script>
            document.getElementById("imagen").src = selectImg();
          </script>
         <div className="quizButtonsWrapper">
             <button className="restart" onClick={this.onRestartQuiz.bind(this)} disabled={!this.state.answered}>Restart</button>
             <button className="answerTrue" onClick={this.onAnswerTrue.bind(this)} disabled={this.state.answered}>True</button>
             <button className="answerFalse" onClick={this.onAnswerFalse.bind(this)} disabled={this.state.answered}>False</button>
             <button className="next" onClick={this.onNextQuestion.bind(this)} disabled={!this.state.answered}>Next</button>
         </div>
      </div>
    );
  }
}
