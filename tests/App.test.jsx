import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { BrowserRouter as Router } from "react-router-dom";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the NavBar with the correct links", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    const storeLink = screen.getByRole("link", { name: /store/i });
    const cartLink = screen.getByRole("link", { name: /cart/i });

    expect(homeLink).toBeInTheDocument();
    expect(storeLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });

  it("loads and displays the HomePage", async () => {
    const homePageElement = screen.getByText(/welcome to the store/i);
    expect(homePageElement).toBeInTheDocument();
  });
});
