import { validateResponse } from "../src/client/js/formHandler";

describe("Testing the response validation functionality", () => {
  test("Testing the validateResponse() function with an invalid response 204, should return false", () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    expect(
      validateResponse({
        status: {
          code: "204",
          msg:
            "Resource not compatible for the language automatically identified for the text",
          credits: "0",
          remaining_credits: "19937",
        },
      })
    ).toBe(false);
  });
  test("Testing the validateResponse() function with an invalid response offline, should return false", () => {
    expect(
      validateResponse({
        status: {
          code: "offline",
          msg: "offline",
        },
      })
    ).toBe(false);
  });
  test("Testing the validateResponse() with a valid response, should return true", () => {
    expect(
      validateResponse({
        status: {
          code: "0",
          msg: "OK",
          credits: "1",
          remaining_credits: "19933",
        },
        model: "general_en",
        score_tag: "NONE",
        agreement: "AGREEMENT",
        subjectivity: "OBJECTIVE",
        confidence: "100",
        irony: "NONIRONIC",
        sentence_list: [
          {
            text: "This is some text",
            inip: "0",
            endp: "16",
            bop: "y",
            confidence: "100",
            score_tag: "NONE",
            agreement: "AGREEMENT",
            segment_list: [
              {
                text: "This is some text",
                segment_type: "secondary",
                inip: "0",
                endp: "16",
                confidence: "100",
                score_tag: "NONE",
                agreement: "AGREEMENT",
                polarity_term_list: [],
              },
            ],
            sentimented_entity_list: [],
            sentimented_concept_list: [],
          },
        ],
        sentimented_entity_list: [],
        sentimented_concept_list: [],
      })
    ).toBe(true);
  });
});
