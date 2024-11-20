import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatWindow from "../../src/components/ChatWindow";

describe("ChatWindow component tests", () => {
	const messages = [
		{
			text: "Hola",
			sender: "0f06c19d-da00-4107-8f2c-814a4c463168",
		},
		{
			text: "Hola, que tal?",
			sender: "5b975f4e-ba5e-4182-92c6-22f4e3e3522c",
		},
	];

	test("Debe mostrar los mensajes correctamente", () => {
		render(
			<ChatWindow messages={messages} currentUserId={messages[0].sender} />
		);
		const helloMessage = screen.getByText(messages[0].text);
		const hiMessage = screen.getByText(messages[1].text);
		expect(helloMessage).toBeInTheDocument();
		expect(hiMessage).toBeInTheDocument();
	});
});
