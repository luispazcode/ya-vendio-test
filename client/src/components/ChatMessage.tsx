import { Message } from "../interfaces/message.interface";

interface Props {
	message: Message;
	isCurrentUser: boolean;
}

export default function ChatMessage({ message, isCurrentUser }: Props) {
	return (
		<div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
			<div
				className={`flex flex-col ${
					isCurrentUser ? "items-end" : "items-start"
				}`}
			>
				<div
					className={`max-w-[70%] rounded-lg p-3 ${
						isCurrentUser ? "bg-black text-white" : "bg-green-300 text-black"
					}`}
				>
					{message.text}
				</div>
				<span className='text-xs text-muted-foreground mt-1'>
					User: {message.sender.slice(0, 10)}
				</span>
			</div>
		</div>
	);
}
