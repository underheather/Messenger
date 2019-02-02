import * as React from "react";
import * as renderer from "react-test-renderer";

import App from "../src/App";

describe("App", () => {
  it("snapshot test", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
