import React from 'react';
import './../assets/scss/main.scss';
import {Modal, Button} from 'react-bootstrap';

export default class MyModal extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render(){
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>{this.props.quiz.choices[this.props.game.index].feedback_answer}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>{this.props.quiz.choices[this.props.game.index].feedback_text}</h4>
          </Modal.Body>

          <Modal.Footer>
            <Button bsStyle="primary" className="btnmodal" onClick={this.props.handleClose}>Entendido</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
