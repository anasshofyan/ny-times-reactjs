import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../Search";

test("renders search page", () => {
  render(<Search />);
  const pageTitle = screen.getByText("Search");
  expect(pageTitle).toBeInTheDocument();
});