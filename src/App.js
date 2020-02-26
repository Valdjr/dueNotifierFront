import React from "react";
import "./App.css";
import api from "./config/api";
import ProductList from "./Component/ProductList";
import Filter from "./Component/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      baseUrl: "http://localhost:5000",
      products: []
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

  render() {
    return (
      <div className="App">
        <Filter filter={this.handleFilter} add={this.handleAdd} />
        <ProductList products={this.state.products} remove={this.remove} />
      </div>
    );
  }
}

export default App;
