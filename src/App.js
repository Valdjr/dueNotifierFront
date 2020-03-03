import React from "react";
import "./App.css";
import api from "./config/api";
import ProductList from "./Component/ProductList";
import Filter from "./Component/Filter";
import Modal from "./Component/Modal";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      baseUrl: "https://duenotifier.herokuapp.com",
      products: [],
      editProduct: false
    };
  }

  componentDidMount() {
    this.listProducts();
  }

  listProducts = (name = "", due = "") => {
    let query = "?";
    if (name) {
      query += "&name=" + name;
    }
    if (due) {
      query += "&due=" + due;
    }
    fetch(`${this.state.baseUrl}/products${query}`).then(res => {
      res.json().then(products => this.setState({ products }));
    });
  };

  handleFilter = (name, due) => {
    this.listProducts(name, due);
  };

  handleAdd = async (name, due) => {
    await api
      .post("/product", {
        name,
        due
      })
      .catch(function(error) {
        console.log(error);
      });
    this.listProducts();
  };

  remove = async id => {
    await api.delete(`/product/${id}`);
    this.listProducts();
  };

  edit = async id => {
    const { data } = await api.get(`/product/${id}`);
    this.setState({ editProduct: data });
  };

  handleClose = () => {
    this.setState({ editProduct: false });
  };

  handleEdit = async (name, due, id) => {
    await api
      .put(`/product/${id}`, {
        name,
        due
      })
      .catch(function(error) {
        console.log(error);
      });
    this.listProducts();
  };

  render() {
    return (
      <div className="App">
        <Filter
          filter={this.handleFilter}
          add={this.handleAdd}
          edit={this.state.editProduct}
        />
        <ProductList
          products={this.state.products}
          remove={this.remove}
          edit={this.edit}
        />
        {this.state.editProduct !== false ? (
          <Modal
            show={"auto"}
            close={this.handleClose}
            add={this.handleEdit}
            product={this.state.editProduct}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
