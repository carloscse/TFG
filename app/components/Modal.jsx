import React from 'react';
import './../assets/scss/main.scss';

export default class Modal extends React.Component {

  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {show:false};
  }

  handleClose(){
    this.setState({show:false});
  }

  handleShow(){
    this.setState({show:true});
  }

  render(){
    return (
      <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.quiz.choices[this.props.game.index].feedback_answer}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <h4>{this.props.quiz.choices[this.props.game.index].feedback_text}</h4>
            </Modal.Body>

            <Modal.Footer>
               <button onClick={this.handleClose}>Close</button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  }
}
