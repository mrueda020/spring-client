const url = "http://localhost:8080/api/v1/student";
export const getStudents = () => {
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
};

export const addNewStudent = (student) => {
  const params = {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((result) => {
      return result;
    });
};
