import React from "react";

import ProductListHeader from "../ProductListHeader";
import Product from "../Product";

import { List } from "./style";

export default function ProductList({ products, remove }) {
  return (
    <List>
      <ProductListHeader />
      {products.length > 0 ? (
        products.map(product => (
          <Product key={product._id} product={product} remove={remove} />
        ))
      ) : (
        <div style={{ margin: "20px", textAlign: "center" }}>
          Nenhum produto foi encontrado. Refaça sua busca ou adicione produtos.
        </div>
      )}
    </List>
  );
}
