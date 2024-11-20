import { useEffect, useState } from "react";
import { Message } from "../interfaces/message.interface";

export const useChat = (url: string) => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [currentUserId, setCurrentUserId] = useState<string | null>(null);
	const [socket, setSocket] = useState<WebSocket | null>(null);

	useEffect(() => {
		const ws = new WebSocket(url);
		setSocket(ws);

		ws.onopen = () => console.log("Conexión establecida desde el cliente");

		ws.onmessage = (event) => {
			const newMessage = JSON.parse(event.data);
			if (newMessage.type === "uuid") {
				setCurrentUserId(newMessage.uuid);
			} else {
				setMessages((prev) => [...prev, newMessage]);
			}
		};
		ws.onclose = () => console.log("Conexión cerrada");

		return () => ws.close();
	}, [url]);

	const sendMessages = (message: string) => {
		if (socket?.readyState === WebSocket.OPEN) {
			socket.send(message);
		}
	};

	return { messages, sendMessages, currentUserId };
};
