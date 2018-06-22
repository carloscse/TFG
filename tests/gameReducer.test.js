import * as actions from '../app/reducers/actions.jsx';
import expect from 'expect';
import gameReducer from "../app/reducers/gameReducer.jsx";
import { next, previous } from '../app/reducers/actions.jsx';


describe('game reducer', () => {

  it('should handle begin', () => {
    const state = gameReducer(undefined, actions.begin());

    expect(state.game_started).toEqual(true);
  });

  it('should handle next', () => {
    const TEST_STATE1 = {
      game:{
        game_started:true,
        game_finished:false,
        index:1,
        score:10,
        nAnswers:1,
      },
    };
    const state = gameReducer(TEST_STATE1, next());

    expect(state.game.index).toEqual(TEST_STATE1.game.index + 1);
    expect(state.game.score).toEqual(TEST_STATE1.game.score);
    expect(state.game.nAnswers).toEqual(TEST_STATE1.game.nAnswers);

  });

  it('should handle previous', () => {
    const TEST_STATE2 = {
      game:{
        game_started:true,
        game_finished:false,
        index:3,
        score:55,
        nAnswers:3,
      },
    };
    const state = gameReducer(TEST_STATE2, previous());

    expect(state.game.index).toEqual(TEST_STATE2.game.index - 1);
    expect(state.game.score).toEqual(TEST_STATE2.game.score);
    expect(state.game.nAnswers).toEqual(TEST_STATE2.game.nAnswers);
  });

  it('should handle restart', () => {
    const state = gameReducer(undefined, actions.restart());

    expect(state.index).toEqual(0);
    expect(state.game_started).toEqual(false);
    expect(state.game_finished).toEqual(false);
    expect(state.nAnswers).toEqual(0);
  });

  it('should handle finish', () => {
    const state = gameReducer(undefined, actions.finish());

    expect(state.game_finished).toEqual(true);
  });
});
