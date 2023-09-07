import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const [add, setAdd] = useState("Add to Cart");

  function handleAdd() {
    if (inCart) {
      setInCart(false);
      setAdd("Add to Cart");
    } else {
      setInCart(true);
      setAdd("Remove from Cart");
    }
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>
        {add}
      </button>
    </li>
  );
}

export default Item;
