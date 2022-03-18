import React from "react";
import "./Form.css";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import cuid from "cuid";

const Form = ({ setShow }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  const stateCompany = useSelector((state) => state.company);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !company || !status || !notes) {
      toast.warning("Please fill all fields");
    } else {
      const data = {
        id: cuid(),
        name,
        company,
        status,
        date: new Date().toLocaleDateString(),
        notes,
      };

      dispatch({
        type: "SET_COMPANY",
        payload: data,
      });

      toast.success("Add successfully");
      setShow(false);
    }
    return;
  };

  return (
    <div className="add">
      <div className="add-container">
        <div className="add-header">
          <h2 className="add-heading">Add member</h2>
          <span className="close" onClick={handleClose}>
            <CloseIcon />
          </span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              id="notes"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input type={"submit"} value="Add member" className="submit-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
