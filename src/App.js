import "./App.css";
import { useEffect, useState } from "react";
import { getStudents } from "./api/student";
import List from "./components/List";
import Form from "./components/Form";
function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    email: "",
    dob: "",
    name: "",
  });
  useEffect(() => {
    getStudents().then((students) => setStudents(students));
  }, [student]);

  return (
    <>
      <div className="w3-col  w3-display-middle" style={{ width: "500px" }}>
        <div className="w3-card">
          <ul className="w3-ul w3-card-4 w3-white ">
            <List students={students} setStudents={setStudents} />

            <button
              className="w3-button w3-green w3-block"
              onClick={() => {
                document.getElementById("id01").style.display = "block";
              }}
            >
              Insert new Student
            </button>
          </ul>
        </div>
      </div>
      <Form student={student} setStudent={setStudent} />
    </>
  );
}

export default App;
