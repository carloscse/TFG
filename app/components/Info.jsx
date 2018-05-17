import React from "react";
import {begin} from './../reducers/actions';
import * as I18n from "../vendors/I18n";

export default class Info extends React.Component {
  constructor(props){
    super(props);
  }

  onStartGame(){
    this.props.dispatch(begin());
  }

  render(){
    return (
      <div className="info">
        <h1>{I18n.getTrans("i.welcome")}</h1>
        <h3>{I18n.getTrans("i.welcomemsg")}</h3>
        <div className="quizButtonsWrapper">
          <button className="begin" onClick={this.onStartGame.bind(this)}>{I18n.getTrans("i.begin")}</button>
        </div>
      </div>
    );
  }
}
