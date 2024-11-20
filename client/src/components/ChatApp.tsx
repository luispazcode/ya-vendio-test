import { useChat } from "../hooks/useChat";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";

export default function ChatApp() {
	const { messages, sendMessages, currentUserId } = useChat(
		"ws://localhost:8000"
	);
	return (
		<div>
			<h1 className='text-black text-4xl font-semibold mb-4'>Chat App</h1>
			<ChatWindow messages={messages} currentUserId={currentUserId} />
			<ChatInput sendMessages={sendMessages} />
		</div>
	);
}
