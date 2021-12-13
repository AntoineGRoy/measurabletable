import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/*No real time to work on test 
  I would test the behavior of 

*/

test("renders Measurabl logo", () => {
  render(<App />);
  const logoElement = screen.getByAltText("Measurabl");
  expect(logoElement).toBeInTheDocument();
});
