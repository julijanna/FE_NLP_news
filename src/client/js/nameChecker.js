/**
 * @description gets data from sentiment API
 * @param {string} inputText - a text to be checked by sentiment API
 */

async function checkForName(inputText) {
  return fetch(`http://localhost:8081/sentiment?formText=${inputText}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => ({
      status: {
        code: "offline",
        msg: error,
      },
    }));
}

export { checkForName };
