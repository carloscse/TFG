function gameReducer(state = {}, action){
  switch (action.type){
  case 'GAME_STARTED':
    return action.game_started = true;
  case 'ANSWER_QUESTION':
    this.props.tracking.index = this.props.tracking.index + 1;
    // this.props.tracking.score = this.props.tracking.score + 10;
    return state;
  case 'FINISH_APP':
    return action.game_finished = true;
  default:
    return state;
  }
}

export default gameReducer;
