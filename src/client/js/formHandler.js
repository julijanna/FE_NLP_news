import { checkForName } from "./nameChecker";

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const validatedText = validateForm(formText);
  if (validatedText === false) {
    return;
  }

  const sentimentResponse = await checkForName(formText);

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

export { handleSubmit };
