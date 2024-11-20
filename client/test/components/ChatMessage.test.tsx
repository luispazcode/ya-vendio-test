import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatMessage from "../../src/components/ChatMessage";

describe("ChatMessage Component", () => {
	const message = {
		text: "Hola",
		sender: "0f06c19d-da00-4107-8f2c-814a4c463168",
	};
	test("Debe mostrar los valores del sender(user-uuid) y text correctamente", () => {
		render(<ChatMessage message={message} isCurrentUser={true} />);
		const textElement = screen.getByText(message.text);
		const senderElement = screen.getByText(
			`User: ${message.sender.slice(0, 10)}`
		);
		expect(textElement).toBeTruthy();
		expect(senderElement).toBeTruthy();
	});

	test("Debe mostrar las clases correctas si el isCurrentUser=true", () => {
		render(<ChatMessage message={message} isCurrentUser={true} />);
		const chatMessage = screen.getByText(message.text);
		expect(chatMessage).toHaveClass("bg-black");
		expect(chatMessage).toHaveClass("text-white");
		expect(chatMessage).toHaveClass("rounded-lg");
		expect(chatMessage).toHaveClass("p-3");
	});

	test("Debe mostrar las clases correctas si el isCurrentUser=false", () => {
		render(<ChatMessage message={message} isCurrentUser={false} />);
		const chatMessage = screen.getByText(message.text);
		expect(chatMessage).toHaveClass("bg-green-300");
		expect(chatMessage).toHaveClass("text-black");
		expect(chatMessage).toHaveClass("rounded-lg");
		expect(chatMessage).toHaveClass("p-3");
	});

	test("Debe mostrar alineación a la derecha si el isCurrentUser=true", () => {
		render(<ChatMessage message={message} isCurrentUser={true} />);
		const containerElement = screen.getByText(message.text).parentElement
			?.parentElement;
		expect(containerElement).toHaveClass("justify-end");
	});

	test("Debe mostrar alineación a la izquierda si el isCurrentUser=false", () => {
		render(<ChatMessage message={message} isCurrentUser={false} />);
		const containerElement = screen.getByText(message.text).parentElement
			?.parentElement;
		expect(containerElement).toHaveClass("justify-start");
	});
});
