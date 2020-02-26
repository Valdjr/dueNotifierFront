import React, { Component } from "react";

import { Container, ModalContent, Close } from "./style.js";

export class Modal extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      due: ""
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleDue = e => {
    this.setState({ due: e.target.value });
  };

  handleSave = e => {
    e.preventDefault();
    const { name, due } = this.state;
    this.props.add(name, due);
    this.props.close();
  };

  render() {
    return (
      <Container show={this.props.show}>
        <ModalContent onSubmit={this.handleSave}>
          Novo produto
          <Close onClick={this.props.close}>&times;</Close>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            onChange={this.handleName}
          />
          <input type="date" onChange={this.handleDue} />
          <button>Salvar</button>
        </ModalContent>
      </Container>
    );
  }
}

export default Modal;
