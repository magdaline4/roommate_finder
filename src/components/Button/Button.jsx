import React from 'react'

const Button = ({ text, onClick }) => {
  return (
   <button style={styles.button} onClick={onClick}>
     {text}
    </button>
  )
}

const styles = {
  button: {
    padding: "8px 15px",
    background: " #004080",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Button