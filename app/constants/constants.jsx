export const INITIAL_STATE = {
  tracking:{
    progress_measure:0,
  },
  scorm:null,
  user_profile:{
    id:undefined,
    name:"Unknown",
    learner_preference:{},
  },
  game:{
    game_started:false,
    game_finished:false,
    index:0,
    score:0,
    nAnswers:0,
  },
};
