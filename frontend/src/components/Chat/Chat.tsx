import { signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";

interface ChatProps {

}

const Chat: React.FC<ChatProps> = (props) => {
    return <div>
        CHAT
        <Button onClick={() => signOut()}>Log Out</Button>
    </div>
}

export default Chat;