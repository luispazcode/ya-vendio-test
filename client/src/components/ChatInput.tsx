import { useState } from "react";

interface Props {
	sendMessages: (message: string) => void;
}

export default function ChatInput({ sendMessages }: Props) {
	const [newMessage, setNewMessage] = useState("");
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (newMessage.trim() === "") return;
			// Enviar mensaje al websocket
			sendMessages(newMessage);
			setNewMessage("");
		}
	};
	return (
		<div className='flex w-full mt-3 gap-2'>
			<input
				type='text'
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				className='w-full bg-white text-black rounded-lg border border-black p-4 font-medium'
				placeholder='Pulsa enter para enviar tu mensaje'
			/>
		</div>
	);
}
