import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

import { Container } from "./style.js";
import Modal from "../Modal";

export default class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      due: "",
      show: "none"
    };
  }

  handleSearch = e => {
    const { name, due } = this.state;
    this.props.filter(name, due);
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleDue = e => {
    this.setState({ due: e.target.value });
  };

  handleAdd = e => {
    this.setState({ show: "auto" });
  };

  handleClose = e => {
    this.setState({ show: "none" });
  };

  render() {
    return (
      <>
        <Container onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            onChange={this.handleName}
          />
          <input type="date" onChange={this.handleDue} />
          <button title="Pesquisar" onClick={this.handleSearch}>
            <FaSearch color="#FFF" />
          </button>
          <button
            type="button"
            title="Adicionar produto"
            onClick={this.handleAdd}
          >
            <FaPlus color="#FFF" />
          </button>
        </Container>
        <Modal
          show={this.state.show}
          close={this.handleClose}
          add={this.props.add}
        />
      </>
    );
  }
}
