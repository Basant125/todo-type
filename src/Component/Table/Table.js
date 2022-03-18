import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Table.css";
import { useEffect } from "react";

const Table = () => {
  const [status, setStatus] = useState("none");
  const companyState = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SELECT_STATUS",
      payload: status,
    });
    console.log(status);
  }, [status]);

  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE_COMPANY",
      payload: id,
    });
  };

  return (
    <div className="table">
      <div className="table-filter">
        <div className="table-filter-select">
          <select className="select">
            <option value="all">All select</option>
          </select>
        </div>
        <div className="table-filter-status">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="select"
          >
            <option value="none">None</option>
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="table-content">
        <div className="table-content-header  table-content-header-main">
          <span>Name</span>
          <span>Comapany</span>
          <span>Status</span>
          <span>Last Upadte</span>
          <span>Notes</span>
        </div>
        {companyState?.map((company) => {
          return (
            <div className="table-content-header" key={company.id}>
              <span>
                <input type="checkbox" className="checkbox" /> {company.name}
              </span>
              <span>{company.company}</span>
              <span>{company.status}</span>
              <span>{company.date}</span>
              <span className="notes">
                {company.notes}
                <DeleteIcon
                  onClick={() => handleDelete(company.id)}
                  className="delete-item"
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
