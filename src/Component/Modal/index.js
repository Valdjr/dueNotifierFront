import React, { Component } from "react";
import { toast } from "react-toastify";
import "./toast.css";

import { Container, ModalContent, Close, Tr } from "./style.js";

export class Modal extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      due: ""
    };
  }

  componentDidMount() {
    if (this.props.product) {
      const { _id, name, due } = this.props.product;
      this.setState({ id: _id, name, due: due.slice(0, 10) });
    }
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleDue = e => {
    this.setState({ due: e.target.value });
  };

  handleSave = e => {
    e.preventDefault();
    const { name, due, id } = this.state;
    if (!name || !due) {
      // toast.warn("Preencha as informações.");
      toast("Preencha as informações necessárias.", {
        className: "toast-content",
        progressClassName: "toast-progress-bar"
      });
    } else {
      this.props.add(name, due, id);
      this.props.close();
    }
  };

  render() {
    return (
      <Container show={this.props.show}>
        <ModalContent onSubmit={this.handleSave}>
          <strong style={{ verticalAlign: "sub" }}>Novo produto</strong>
          <Close onClick={this.props.close}>&times;</Close>
          <Tr />
          <input
            type="text"
            placeholder="Digite o nome do produto"
            onChange={this.handleName}
            value={this.state.name}
          />
          <input type="date" onChange={this.handleDue} value={this.state.due} />
          <Tr />
          <button>Salvar</button>
        </ModalContent>
      </Container>
    );
  }
}

export default Modal;
