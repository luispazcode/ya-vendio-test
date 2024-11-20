import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatInput from "../../src/components/ChatInput";

describe("ChatInput component tests", () => {
	test("Debe mostrarse el input correctamente", () => {
		const sendMessagesMock = jest.fn();
		render(<ChatInput sendMessages={sendMessagesMock} />);
		const inputElement = screen.getByPlaceholderText(
			"Pulsa enter para enviar tu mensaje"
		);
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveClass("w-full");
		expect(inputElement).toHaveClass("bg-white");
		expect(inputElement).toHaveClass("text-black");
		expect(inputElement).toHaveClass("rounded-lg");
		expect(inputElement).toHaveClass("border");
		expect(inputElement).toHaveClass("border-black");
		expect(inputElement).toHaveClass("p-4");
		expect(inputElement).toHaveClass("font-medium");
	});

	test("Debe actualizarse el valor del input correctamente", () => {
		const sendMessagesMock = jest.fn();
		render(<ChatInput sendMessages={sendMessagesMock} />);
		const inputElement = screen.getByPlaceholderText(
			"Pulsa enter para enviar tu mensaje"
		) as HTMLInputElement;
		fireEvent.change(inputElement, { target: { value: "Hola" } });
		expect(inputElement.value).toBe("Hola");
	});

	test("Debe enviarse el mensaje después de presionar la tecla Enter", () => {
		const sendMessagesMock = jest.fn();
		render(<ChatInput sendMessages={sendMessagesMock} />);
		const inputElement = screen.getByPlaceholderText(
			"Pulsa enter para enviar tu mensaje"
		) as HTMLInputElement;
		fireEvent.change(inputElement, { target: { value: "Hola" } });
		fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
		expect(sendMessagesMock).toHaveBeenCalledWith("Hola");
		expect(inputElement.value).toBe("");
	});

	test("No debe enviarse un mensaje vacio si se presiona la tecla Enter", () => {
		const sendMessagesMock = jest.fn();
		render(<ChatInput sendMessages={sendMessagesMock} />);
		const inputElement = screen.getByPlaceholderText(
			"Pulsa enter para enviar tu mensaje"
		) as HTMLInputElement;
		fireEvent.change(inputElement, { target: { value: "" } });
		fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
		expect(sendMessagesMock).not.toHaveBeenCalled();
		expect(inputElement.value).toBe("");
	});
});
