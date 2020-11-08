import React from "react";
import { render } from "@testing-library/react";
import Suprise from "./Suprise";

describe("Suprise tests", () => {
  it("should render", () => {
    expect(render(<Suprise />)).toBeTruthy();
  });
});
