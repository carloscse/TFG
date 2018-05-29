import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import {AppContainer} from 'react-hot-loader';
import thunk from 'redux-thunk';

import {INITIAL_STATE} from '../constants/constants';
import GlobalState from './../reducers/reducers';
import App from './App';

export default class ReduxProvider extends React.Component {
  constructor(props){
    super(props);
    this.initialState = INITIAL_STATE;
    this.store = this.configureStore();
  }
  configureStore(){
      let composeEnhancers = compose;
      if((process.env.NODE_ENV || 'dev') === 'dev'){
          composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      }
      const enhancers = composeEnhancers(
          applyMiddleware(thunk)
      );
      const store = createStore(GlobalState, this.initialState, enhancers);
      if(module.hot){
          module.hot.accept('./../reducers/reducers', () => {
              const nextRootReducer = require('./../reducers/reducers').default;
              store.replaceReducer(nextRootReducer);
          });
      }
      return store;
  }
  render(){
    return (
            <AppContainer>
                <Provider store={this.store}>
                    <div style={{height:'100%'}}>
                        <App store={this.store}/>
                    </div>
                </Provider>
            </AppContainer>
    );
  }
}
