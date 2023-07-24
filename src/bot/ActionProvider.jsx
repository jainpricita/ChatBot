import React from 'react';
import { createClientMessage} from 'react-chatbot-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addName, userSelected } from '../redux/validationSlice';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const {name,age}=useSelector(userSelected);
  const dispatch=useDispatch();

  const handleStart = () => {
    const message = createClientMessage('Got It!');
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

  const handleName=(input)=>{
      dispatch(addName(input));
      const botMessage = createChatBotMessage('Enter your Age',{
        widget:"ageDropDown",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      })); 
  }

  const handleAge=(input)=>{
      const message = createClientMessage(input);
     setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
      const botMessage = createChatBotMessage('Thank you. In 5 seconds, bot will exit',{
        widget:"ended",
      });
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
            handleStart,
            handleName,
            handleAge
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
