import React from "react";

import ProductListHeader from "../ProductListHeader";
import Product from "../Product";

import { List } from "./style";

export default function ProductList({ products, remove, edit }) {
  return (
    <List>
      <ProductListHeader />
      {products.length > 0 ? (
        products.map(product => (
          <Product
            key={product._id}
            product={product}
            remove={remove}
            edit={edit}
          />
        ))
      ) : (
        <div style={{ margin: "20px", textAlign: "center" }}>
          Nenhum produto foi encontrado.
        </div>
      )}
    </List>
  );
}
