
import { ChatEngine } from 'react-chat-engine';
import '../../Chat.css';
import ChatFeed from './ChatFeed'

const Chat = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID="b6d65840-3a81-4345-b29d-ffdeb1b5217a"
            userName="HTTC"
            userSecret="123123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
       
    );
}

export default Chat