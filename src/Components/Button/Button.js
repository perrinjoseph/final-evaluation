import React from "react";

function Button({ content, opposite ,onClick}) {
  return (
    <button onClick ={()=>onClick}className={opposite ? "button-opposite" : "button"}>
      {content}
    </button>
  );
}

export default Button;
