import React from "react";

function Button({ content, opposite ,scrollTo}) {
  const scrollToInfo = () => {
    console.log("clicked");
    window.scroll({
      top: scrollTo,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToInfo}
      className={opposite ? "button-opposite" : "button"}
    >
      {content}
    </button>
  );
}

export default Button;
