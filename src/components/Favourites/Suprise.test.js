import React from "react";
import { render } from "@testing-library/react";
import Favourites from "./Favourites";

describe("Suprise tests", () => {
  it("should render", () => {
    expect(render(<Favourites />)).toBeTruthy();
  });
});
