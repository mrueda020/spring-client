import React from "react";

function List(props) {
  const { students } = props;

  return (
    <>
      {students &&
        students.map((student) => {
          return (
            <>
              <div className="w3-contaner">
                <div className="w3-row " key={student.id}>
                  <div className="w3-col m10 w3-container">
                    <h4>
                      {student.name}
                      <span className="w3-margin-left w3-opacity w3-medium">
                        {student.dob}, {student.age} years old
                      </span>
                    </h4>
                    <p>Email: {student.email}</p>
                    <br />
                  </div>
                  <div className="w3-section w3-center">
                    <button className="w3-button w3-blue  w3-margin-right">
                      Update
                    </button>
                    <button className="w3-button w3-blue w3-red">Delete</button>
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })}
    </>
  );
}

export default List;
