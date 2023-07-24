import { createChatBotMessage } from "react-chatbot-kit";
import Header from "../components/Header";
import GotIt from "../components/GotIt";
import End from "../components/End";
import AgeDropDown from "../components/AgeDropDown"
const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "gotIt",
    }),
  ],
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: "ageDropDown",
      widgetFunc: (props) => <AgeDropDown {...props} />,
    },
    {
      widgetName: "ended",
      widgetFunc: (props) => <End {...props} />,
    },
  ],
  customComponents: {
    // Replaces the default header
    header: (props) => <Header {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#008caa",
    },
    chatButton: {
      backgroundColor: "#008caa",
    },
    userMessageBox: {
      backgroundColor: "#008caa",
    },
  },
};

export default config;
