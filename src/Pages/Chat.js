import React from 'react';
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from '../bot/config';
import MessageParser from '../bot/MessageParser.jsx';
import ActionProvider from '../bot/ActionProvider.jsx';

export default function Chat() {
  return (
    <div className='chat-bot-div'>
         <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}
