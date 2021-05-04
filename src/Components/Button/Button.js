import React from "react";
import $ from "jquery";
function Button({ content, opposite, scrollTo }) {
  const scrollToInfo = () => {
    window.scroll({
      top: scrollTo,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      id="btnInfo"
      onClick={scrollToInfo}
      className={opposite ? "button-opposite" : "button"}
    >
      {content}
    </button>
  );
}

export default Button;
