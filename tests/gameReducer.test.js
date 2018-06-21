import * as actions from '../app/reducers/actions.jsx';
import expect from 'expect';
import gameReducer from "../app/reducers/gameReducer.jsx";

describe('game reducer', () => {
  it('should handle restart', () => {
    const state = gameReducer(undefined, actions.restart());

    expect(state.index).toEqual(0);
    expect(state.game_started).toEqual(false);
    expect(state.game_finished).toEqual(false);
    expect(state.nAnswers).toEqual(0);
  });

  it('should handle begin', () => {
    const state = gameReducer(undefined, actions.begin());

    expect(state.game_started).toEqual(true);
  });

  it('should handle next', () => {
    const before = gameReducer(undefined, actions.begin());
    const state = gameReducer(undefined, actions.next());

    expect(state.index).toEqual(before.index + 1);
  });

  it('should handle previous', () => {
    const before = gameReducer(undefined, actions.begin());
    const state = gameReducer(undefined, actions.previous());

    expect(state.index).toEqual(before.index - 1);
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
