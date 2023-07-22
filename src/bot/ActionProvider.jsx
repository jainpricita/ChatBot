import React from 'react';
import { createClientMessage} from 'react-chatbot-kit';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleName = () => {
    const botMessage = createChatBotMessage('Enter your Age');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleStart = () => {
    const message = createClientMessage('Got It');
     setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    const botMessage = createChatBotMessage('Enter your Name');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
 
  const handleAge=()=>{
    const botMessage = createChatBotMessage('Enter your AgeThank you. In 5 seconds, bot will exit');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleName,
            handleStart,
            handleAge,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
