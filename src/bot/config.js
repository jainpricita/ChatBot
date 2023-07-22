import { createChatBotMessage } from 'react-chatbot-kit';
import Header from '../component/Header';
function GotItButton(props){
  return <button onClick={()=>{console.log(props.actionProvider)}}>Got It</button>;
}
const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,{
    widget: "gotIt",
  })],
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc:(props)=> <GotItButton{...props}/>},
    ],
  customComponents: {
    // Replaces the default header
   header: (props) => <Header{...props}/>
 },
 customStyles: {
  botMessageBox: {
    backgroundColor: "#008caa",
  },
  chatButton: {
    backgroundColor: "#008caa",
  },
  userMessageBox:{
    backgroundColor: "#008caa",
  },
},
};

export default config;