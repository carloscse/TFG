export function scormConnected(scorm){
  return {
    type:'SCORM_CONNECTED',
    scorm:scorm,
  };
}

export function updateUserProfile(user_profile){
  return {
    type:'UPDATE_USER_PROFILE',
    user_profile:user_profile,
  };
}

export function addObjectives(objectives){
  return {
    type:'ADD_OBJECTIVES',
    objectives:objectives,
  };
}

export function objectiveAccomplished(objectiveId){
  return {
    type:'OBJECTIVE_ACCOMPLISHED',
    objective_id:objectiveId,
  };
}

export function resetObjectives(objectives){
  return {
    type:'RESET_OBJECTIVES',
  };
}

export function finish(){
  return {
    type:'FINISH_APP',
  };
}

export function begin(){
  return {
    type:'GAME_STARTED',
  };
}

export function next(){
  return {
    type:'NEXT_QUESTION',
  };
}

export function previous(){
  return {
    type:'PREVIOUS_QUESTION',
  };
}

export function onAnswer(response){
  return {
    type:'ANSWER_QUESTION',
    response:response,
  };
}

export function onAnswerWithScorm(response){
  return (dispatch, getState) => {
    const firstState = getState();
    dispatch(onAnswer(response));
    const secondState = getState();
    // check if there is a new objectives_accomplished
    if(secondState.game.score > firstState.game.score){
      console.log("Objective from " + firstState.tracking.objectives["Pregunta " + (firstState.game.index + 1)].id + " was accomplished.");
      dispatch(objectiveAccomplished(firstState.tracking.objectives["Pregunta " + (firstState.game.index + 1)].id));
    }
  };
}

export function restart(){
  return {
    type:'RESTART',
  };
}
