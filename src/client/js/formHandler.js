import { checkForName } from "./nameChecker";

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
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

export { handleSubmit };
