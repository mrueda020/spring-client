import "./App.css";
import { useEffect } from "react";

function App() {
  const url = "http://localhost:8080/api/v1/student";
  const getStudents = () => {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(url, params)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        return result;
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="w3-col  w3-display-middle" style={{ width: "450px" }}>
      <div className="w3-card ">
        <ul class="w3-ul w3-card-4 w3-white">
          <li class="w3-padding-16">
            <img
              src="https://www.w3schools.com/w3images/avatar3.png"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: "35px" }}
              alt="Avatar"
            />
            <span className="w3-xlarge">Mike</span>
          </li>
          <li className="w3-padding-16">
            <img
              src="https://www.w3schools.com/w3images/avatar3.png"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: "35px" }}
              alt="Avatar"
            />
            <span className="w3-xlarge">Jill</span>
          </li>
          <li className="w3-padding-16">
            <img
              src="https://www.w3schools.com/w3images/avatar3.png"
              class="w3-left w3-circle w3-margin-right"
              style={{ width: "35px" }}
              alt="Avatar"
            />
            <span className="w3-xlarge">Jane</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
