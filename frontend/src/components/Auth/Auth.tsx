import { Button, Center, Image, Input, Stack, Text, useStatStyles } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface AuthProps {
    session: Session | null;
    reloadSession: () => void;
}

const Auth: React.FC<AuthProps> = ({ session, reloadSession }) => {

    const [username, SetUsername] = useState("");

    const onSubmit = async () => {
        try {
            /**
             * createUsername mutation to end our username to the graphql API
             */
        } catch (error) {
            console.log("onSubmit error", error)
        }
    }

    return (
        <Center height="100vh" border="1px solid red">
            <Stack spacing={8} align={"center"}>
                <Image src="bonfire-47558.png" height="100px"></Image>
                {
                    session ? (
                        <>
                            <Text fontSize="3xl">Create a username</Text>
                            <Input placeholder="Enter a username" value={username}
                                onChange={(e) => SetUsername(e.target.value)}
                            ></Input>
                            <Button width="100%" onClick={onSubmit}>Save</Button>
                        </>
                    ) : (
                        <>
                            <Text fontSize="3xl">FireChat</Text>
                            <Button onClick={() => signIn("google")} leftIcon={<Image height="20px" src="googlelogo.png"></Image>}>
                                Continue with Google
                            </Button>
                        </>
                    )
                }
            </Stack>
        </Center>

    )
}

export default Auth;