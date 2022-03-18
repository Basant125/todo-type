import React from "react";
import "./Header.css";
import AddIcon from "@material-ui/icons/Add";

const Header = ({ setShow }) => {
  const handleAdd = () => {
    setShow(true);
  };
  return (
    <div className="header">
      <h2>Team Members</h2>
      <button onClick={handleAdd}>
        <AddIcon /> add member
      </button>
    </div>
  );
};

export default Header;
