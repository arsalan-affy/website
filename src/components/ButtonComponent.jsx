import React from "react";

const ButtonComponent = () => {
  const styles = {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(45deg, #6a11cb, #2575fc)",
    borderColor: "#ff5733",
    color: "white",
    padding: "5px 10px",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "100px",
    display: "inline-block",
    textDecoration: "none",
    animation: "flash 1s infinite alternate",
  };

  const pseudoStyles = {
    content: "''",
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "200%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
    animation: "wavy 2s infinite linear",
  };

  return (
    <a
      href="https://test.mywingsacademy.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={styles}
    >
      Get Free Demo
      <span style={pseudoStyles}></span>
    </a>
  );
};

export default ButtonComponent;

const keyframes = `
@keyframes flash {
  0% { opacity: 1; }
  100% { opacity: 0.6; }
}

@keyframes wavy {
  0% { left: -100%; }
  100% { left: 100%; }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);