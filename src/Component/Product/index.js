import React from "react";
import { format } from "date-fns";
import { FaTrashAlt } from "react-icons/fa";

import { Item } from "./style";

export default function Product({ product, remove }) {
  return (
    <Item>
      {product.name}
      <span>
        {format(new Date(product.due), "d/MM/yyyy")}&nbsp;
        <span onClick={() => remove(product._id)}>
          <FaTrashAlt />
        </span>
      </span>
    </Item>
  );
}
