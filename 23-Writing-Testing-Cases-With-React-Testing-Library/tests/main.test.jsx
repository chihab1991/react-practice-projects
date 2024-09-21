import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe, test } from "vitest";
import App from "../src/App";

describe("group", () => {
	it("should render", () => {
		const { getByText } = render(<App />);
		const textElement = getByText(/Hello, World/i);
		expect(getByText("Hello, World!")).toBeInTheDocument();
		expect(textElement).toBeInTheDocument();
	});
});
