import React from "react";
import {begin} from './../reducers/actions';

export default class Info extends React.Component {
  constructor(props){
    super(props);
  }

  onStartGame(){
    // this.setState({game_started:true});
    this.props.dispatch(begin());
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
