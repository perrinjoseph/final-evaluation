import React from "react";

function Button({ content, opposite }) {
  return (
    <button className={opposite ? "button-opposite" : "button"}>
      {content}
    </button>
  );
}

export default Button;
