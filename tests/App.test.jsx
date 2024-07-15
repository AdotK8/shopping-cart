import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

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

  it("loads the StorePage when clicking on the store link", async () => {
    const storeLink = screen.getByRole("link", { name: /store/i });
    userEvent.click(storeLink);

    await waitFor(() => {
      const storePageElement = screen.getByText(/Fjallraven/i);
      expect(storePageElement).toBeInTheDocument();
    });
  });

  it("loads the Cart page when clicking on the cart link", async () => {
    const cartLink = screen.getByRole("link", { name: /cart/i });
    userEvent.click(cartLink);

    await waitFor(() => {
      const cartPageElement = screen.getByText(/Cart Page/i);
      expect(cartPageElement).toBeInTheDocument();
    });
  });
});
