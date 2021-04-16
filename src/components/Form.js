import React from "react";
import { addNewStudent } from "../api/student";
function Form({ student, setStudent }) {
  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  return (
    <div id="id01" className="w3-modal">
      <div
        className="w3-modal-content w3-card-4 w3-animate-zoom"
        style={{ maxWidth: "600px" }}
      >
        <form
          className="w3-container"
          onSubmit={(e) => {
            e.preventDefault();
            addNewStudent(student);
          }}
        >
          <div className="w3-section">
            <label>
              <b>Name</b>
            </label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="text"
              placeholder="Enter Student Name"
              name="name"
              onChange={onChange}
              required
            />
            <label>
              <b>Email</b>
            </label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={onChange}
              required
            />
            <label>
              <b>Date of birth</b>
            </label>
            <input
              className="w3-input w3-border"
              type="date"
              placeholder="Enter date of birth"
              name="dob"
              onChange={onChange}
              required
            />
          </div>

          <div className="w3-container w3-border-top w3-padding-16  w3-center">
            <button
              className="w3-button w3-margin-right w3-green  w3-padding"
              type="submit"
            >
              Add Student
            </button>
            <button
              onClick={() => {
                document.getElementById("id01").style.display = "none";
              }}
              type="button"
              className="w3-button w3-red"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
