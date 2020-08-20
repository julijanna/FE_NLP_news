import { checkForName } from "./nameChecker";

/**
 * @description handles the submit form - front end text check and response check and updates UI
 * @param {object} event - A form submit event
 */

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const validatedText = validateForm(formText);
  if (validatedText === false) {
    setDefaults();
    return;
  }

  const sentimentResponse = await checkForName(formText);
  const apiResponse = validateResponse(sentimentResponse);
  if (apiResponse === false) {
    setDefaults();
    return;
  }

  document.getElementById("subjectivity").innerHTML = sentimentResponse[
    "subjectivity"
  ].toLowerCase();
  document.getElementById(
    "confidence"
  ).innerHTML = `${sentimentResponse["confidence"]}%`;
  document.getElementById("irony").innerHTML = sentimentResponse[
    "irony"
  ].toLowerCase();
}

/**
 * @description validates if text is a link or empty string
 * @param {string} text - text submitted in form
 */

function validateForm(text) {
  if (text == "") {
    alert("Please paste some text");
    return false;
  }
  if (text.match(/^https?:\/\/.*|^www\..*/g) !== null) {
    alert("Please paste valid text, not a link");
    return false;
  }
  return true;
}

/**
 * @description Checks if sentiment response is a valid response or an error
 * @param {object} resp - a sentiment API response object
 */

function validateResponse(resp) {
  if (resp["status"]["code"] !== "0") {
    if (resp["status"]["code"] === "offline") {
      alert("The application is offline. Please check network connection.");
      return false;
    }
    alert("Your text was not valid. Please paste a vaild text.");
    return false;
  }
  return true;
}

/**
 * @description Sets the result table to default empty strings
 */

function setDefaults() {
  document.getElementById("subjectivity").innerHTML = "";
  document.getElementById("confidence").innerHTML = "";
  document.getElementById("irony").innerHTML = "";
}

export { handleSubmit, validateForm, validateResponse };
