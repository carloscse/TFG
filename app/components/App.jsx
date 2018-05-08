import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';
import * as SAMPLES from '../config/samples.js';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import Quiz from './Quiz.jsx';
import Info from './Info.jsx';
import Finish from './Finish.jsx';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();
  }

  render(){
    let appHeader = "";
    let appContent = "";

    if(this.props.game.game_started === false){
      appContent = (
            <Info dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n} game={this.props.game}/>
      );
    } else if(((this.props.tracking.finished !== true) || (GLOBAL_CONFIG.finish_screen === false)) || (this.props.game.game_started === true)){
      /* appHeader = (
            <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} quiz={SAMPLES.quiz_example} game={this.props.game}/>
      );*/
      appContent = (
           <Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n} game={this.props.game}/>
        );
    } else if(this.props.game.game_finished === true){
      appContent = (
           <Finish dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }
    return (
      <div id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        {appHeader}
        {appContent}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
