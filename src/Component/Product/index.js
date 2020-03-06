import React from "react";
import { format } from "date-fns";
import { FaTrashAlt } from "react-icons/fa";

import { Tr, Td, Delete } from "./style";

export default function Product({ product, remove, edit }) {
  return (
    <Tr>
      <Td style={{ width: "80%" }} onClick={() => edit(product._id)}>
        {product.name}
      </Td>
      <td style={{ width: "10%" }} onClick={() => edit(product._id)}>
        {format(new Date(product.due), "d/MM/yyyy")}
      </td>
      <td style={{ width: "10%" }}>
        <Delete
          onClick={() => {
            if (window.confirm("Tem certeza que deseja excluir esse item?"))
              remove(product._id);
          }}
        >
          <FaTrashAlt />
        </Delete>
      </td>
    </Tr>
  );
}
