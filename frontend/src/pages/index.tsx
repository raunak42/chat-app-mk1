import Auth from '@/components/Auth/Auth';
import Chat from '@/components/Chat/Chat';
import type { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { Session } from "next-auth";


const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log("Here is data", session)

  const reloadSession = () => {

  }

  return <div>
    {session?.user?.username ? <Chat /> : <Auth session={session} reloadSession={reloadSession} />}
  </div >
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }

}

export default Home;