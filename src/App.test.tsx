import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/*No real time to work on test 
  I would test :
  - the behavior of error in case of error returned form the API.
  - I would check the render of Table and Row given a set of data.
  - I woud test the order of IDs is ascending in the table. 


*/

test("renders Measurabl logo", () => {
  render(<App />);
  const logoElement = screen.getByAltText("Measurabl");
  expect(logoElement).toBeInTheDocument();
});
test("renders loader", () => {
  render(<App />);
  const logoElement = screen.getByAltText("loading");
  expect(logoElement).toBeInTheDocument();
});
