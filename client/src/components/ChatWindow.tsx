import ChatMessage from "./ChatMessage";
import { Message } from "../interfaces/message.interface";
import { useEffect, useRef } from "react";

interface Props {
	messages: Message[];
	currentUserId: string | null;
}

export default function ChatWindow({ messages, currentUserId }: Props) {
	const messagesEndRef = useRef<HTMLDivElement | null>(null);
	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	useEffect(() => {
		scrollToBottom();
	}, [messages]);
	return (
		<div className='bg-white flex flex-col h-[750px] rounded-lg border border-black'>
			<div className='flex-1 h-full  overflow-y-auto p-4 space-y-4'>
				{messages.map((message, index) => (
					<ChatMessage
						key={index}
						message={message}
						isCurrentUser={message.sender === currentUserId}
					/>
				))}
				<div ref={messagesEndRef} />
			</div>
		</div>
	);
}
