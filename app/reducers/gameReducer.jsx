import {INITIAL_STATE} from "../constants/constants";

function gameReducer(state = {}, action){
  let receivedState;
  switch (action.type){

  case 'GAME_STARTED':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState = INITIAL_STATE.game;
    receivedState.game_started = true;
    return receivedState;

  case 'ANSWER_QUESTION_TRUE':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState = INITIAL_STATE.game;
    let nChoices = this.action.quiz.choices.length;
    let correctAnswers = 0;
    for(let i = 0; i < nChoices; i++){
      let choice = this.action.quiz.choices[action.index];
      if(action.index === 0){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.action.index === 1){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.action.index === 2){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.action.index === 3){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
    }
    receivedState.nAnswers++;
    receivedState.score = receivedState.score + Math.max(correctAnswers * 10);
    return receivedState;

  case 'ANSWER_QUESTION_FALSE':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState = INITIAL_STATE.game;
    for(let i = 0; i < nChoices; i++){
      let choice = this.action.quiz.choices[action.index];
      if(action.index === 0){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.action.index === 1){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.action.index === 2){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
      if(this.action.index === 3){
        // Answered choice
        if(choice.answer === false){
          correctAnswers += 1;
        }
        break;
      }
    }
    receivedState.nAnswers++;
    receivedState.score = receivedState.score + Math.max(correctAnswers * 10);
    return receivedState;

  case 'NEXT_QUESTION':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState = INITIAL_STATE.game;
    if(receivedState.index <= 3){
      receivedState.index++;
    } else if(this.props.game.index === 4 && receivedState.nAnswers < 4){
      receivedState.index = 0;
    }
    return receivedState;

  case 'FINISH_APP':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState = INITIAL_STATE.game;
    receivedState.game_finished = true;
    return receivedState;

  case 'RESTART':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState = INITIAL_STATE.game;
    receivedState.index = 0;
    return receivedState;

  default:
    return state;
  }
}

export default gameReducer;
