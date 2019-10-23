import * as React from 'react';
import { UpdateMessageParam } from './index';

interface ChatInterfaceProps {
  message: string;
  userName: string;
  sendMessage: (message: string) => void;
  updateMessage: (event: UpdateMessageParam) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ userName, message, updateMessage, sendMessage }) => {
  function send(): void {
    sendMessage(message);
  }

  function keyPress(e: React.KeyboardEvent<Element>): void {
    if (e.key === 'Enter') {
      send();
    }
  }

  return (
    <div className="chat-interface">
      <h3>User: {userName} </h3>
      <input
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={send}>Send</button>
    </div>
  );
};

export default ChatInterface;
