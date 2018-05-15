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
      SAMPLES.quiz_example.choices[receivedState.index].answered = true;
      receivedState.nAnswers++;
    } else {
      SAMPLES.quiz_example.choices[receivedState.index].answered = true;
      receivedState.nAnswers++;
    }
    return receivedState;

  case 'NEXT_QUESTION':
    receivedState = JSON.parse(JSON.stringify(state));
    // for(let i = 1; i < SAMPLES.quiz_example.choices.length; i++){
    //   if((receivedState.index <= SAMPLES.quiz_example.choices.length - 1) && (SAMPLES.quiz_example.choices[receivedState.index + i].answered === false)){
    receivedState.index += 1;
    //     break;
    //  }
    //}
    if(receivedState.index === 4 && receivedState.nAnswers < SAMPLES.quiz_example.choices.length){
      receivedState.index = 0;
    }
    return receivedState;

  case 'PREVIOUS_QUESTION':
    receivedState = JSON.parse(JSON.stringify(state));
    // for(let j = 1; j < SAMPLES.quiz_example.choices.length; j++){
    //   if((receivedState.index <= SAMPLES.quiz_example.choices.length - 1) && (receivedState.index > 0) && (SAMPLES.quiz_example.choices[receivedState.index - j].answered === false)){
    receivedState.index -= 1;
    //    break;
    //   }
    // }
    if(receivedState.index < 0 && receivedState.nAnswers < SAMPLES.quiz_example.choices.length){
      receivedState.index = SAMPLES.quiz_example.choices[SAMPLES.quiz_example.choices.length - 1].index;
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
    receivedState.nAnswers = 0;
    for(let i = 0; i < SAMPLES.quiz_example.choices.length; i++){
      SAMPLES.quiz_example.choices[i].answered = false;
    }
    return receivedState;

  default:
    return state;
  }
}

export default gameReducer;
