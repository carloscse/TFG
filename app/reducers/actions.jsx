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

export function objectiveAccomplished(objectiveId, accomplishedScore = null){
  return {
    type:'OBJECTIVE_ACCOMPLISHED',
    objective_id:objectiveId,
    accomplished_score:accomplishedScore,
  };
}
export function finishApp(game_finished, finished){
  return {
    type:'FINISH_APP',
    game:game_finished,
    finished:finished,
  };
}

export function begin(){
  return {
    type:'GAME_STARTED',
  };
}

export function next(index){
  return {
    type:'NEXT_QUESTION',
    index:index + 1,
  };
}

export function onAnswerTrue(score, index, nAnswers){
  return {
    type:'ANSWER_QUESTION_TRUE',
    score:score,
    index:index,
    nAnswers:nAnswers,
  };
}

export function onAnswerFalse(score, index, nAnswers){
  return {
    type:'ANSWER_QUESTION_FALSE',
    score:score,
    index:index,
    nAnswers:nAnswers,
  };
}

export function restart(score, index, nAnswers){
  return {
    type:'RESTART',
    score:score,
    index:index,
    nAnswers:nAnswers,
  };
}
