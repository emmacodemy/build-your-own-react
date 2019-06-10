import { getNodeText } from "dom-testing-library";

import React from "../solution/react";
import ReactDOM from "../solution/react-dom";
import { getExampleDOM } from "../test-utils";

test("Check rendering with a CSS class", async () => {
  const container = getExampleDOM();

  ReactDOM.render(
    <p className="NDC">
      Hello world!
    </p>,
    container
  );

  expect(getNodeText(container.querySelector(".NDC"))).toBe("Hello world!");
});
