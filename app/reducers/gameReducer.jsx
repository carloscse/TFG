import * as SAMPLES from "../config/samples";

function gameReducer(state = {}, action){
  let receivedState;
  switch (action.type){

  case 'GAME_STARTED':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState.game_started = true;
    return receivedState;

  case 'ANSWER_QUESTION':
    receivedState = JSON.parse(JSON.stringify(state));
    if(action.response === SAMPLES.quiz_example.choices[receivedState.index].answer){
      receivedState.score += SAMPLES.quiz_example.choices[receivedState.index].score;
      receivedState.index++;
      receivedState.nAnswers++;
    } else {
      receivedState.index++;
      receivedState.nAnswers++;
    }
    return receivedState;

  case 'NEXT_QUESTION':
    receivedState = JSON.parse(JSON.stringify(state));
    if(receivedState.index <= SAMPLES.quiz_example.choices.length - 1){
      receivedState.index++;
    }
    if(receivedState.index === 4 && receivedState.nAnswers < SAMPLES.quiz_example.choices.length){
      receivedState.index = 0;
    }
    return receivedState;

  case 'PREVIOUS_QUESTION':
    receivedState = JSON.parse(JSON.stringify(state));
    if(receivedState.index <= SAMPLES.quiz_example.choices.length - 1 && receivedState.index > 0){
      receivedState.index--;
    }
    if(receivedState.index === 4 && receivedState.nAnswers < SAMPLES.quiz_example.choices.length){
      receivedState.index = 0;
    }
    return receivedState;

  case 'FINISH_APP':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState.game_finished = true;
    return receivedState;

  case 'RESTART':
    receivedState = JSON.parse(JSON.stringify(state));
    receivedState.index = 0;
    receivedState.score = 0;
    return receivedState;

  default:
    return state;
  }
}

export default gameReducer;
