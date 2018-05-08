import React from "react";
import {begin} from './../reducers/actions';
import * as I18n from "../vendors/I18n";
import * as SAMPLES from "../config/samples";
import {GLOBAL_CONFIG} from "../config/config";

export default class Info extends React.Component {
  constructor(props){
    super(props);
  }

  onStartGame(){
    this.props.dispatch(begin());
    // this.setState({game_started:true});
  }

  render(){
    return (
        <div className="info">
            <h1>{this.props.I18n.getTrans("i.welcome")}</h1>
            <h3>{this.props.I18n.getTrans("i.welcomemsg")}</h3>
            <div className="quizButtonsWrapper">
                <button className="begin" onClick={this.onStartGame.bind(this)}>{this.props.I18n.getTrans("i.begin")}</button>
            </div>
        </div>
    );
  }
}

/*
render(){
    let appHeader = "";
    let appContent = "";
    if(this.props.game.game_started === true){
        appHeader = (
            <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n} quiz={SAMPLES.quiz_example} game={this.props.game}/>
        );
        appContent = (
            <Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.quiz_example} config={GLOBAL_CONFIG} game={this.props.game} I18n={I18n}/>
        );
    } else {
        appContent = (
            <div className="info">
                <h1>{this.props.I18n.getTrans("i.welcome")}</h1>
                <h3>{this.props.I18n.getTrans("i.welcomemsg")}</h3>
                <div className="quizButtonsWrapper">
                    <button className="begin"
                            onClick={this.onStartGame.bind(this)}>{this.props.I18n.getTrans("i.begin")}</button>
                </div>
            </div>
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
*/
