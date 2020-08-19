async function checkForName(inputText) {
  return fetch(`http://localhost:8081/sentiment?formText=${inputText}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export { checkForName };
