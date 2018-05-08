import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="header">
        <h1 id="progress">{this.props.I18n.getTrans("i.progress_measure")}: {this.props.game.index + 1}/{this.props.quiz.choices.length}</h1>
        <h1 id="score">{this.props.I18n.getTrans("i.score")}: {this.props.game.score}</h1>
      </div>
    );
  }
}
