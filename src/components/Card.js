import React from "react";

const Card = ({ children }) => {
  const style = {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "16px auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return <div style={style}>{children}</div>;
};

export default Card;
