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
export function finishApp(finished = true){
  return {
    type:'FINISH_APP',
    finished:finished,
  };
}

export function begin(game_started = true, index){
  return {
    type:'GAME_STARTED',
    game:game_started,
    index:index,
  };
}

export function next(index){
  return {
    type:'NEXT_QUESTION',
    index:index + 1,
  };
}

export function answer(score, index){
  return {
    type:'ANSWER_QUESTION',
    score:score,
    index:index,
  };
}
