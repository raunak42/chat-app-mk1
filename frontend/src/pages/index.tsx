import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();
  console.log("Here is data", data)

  return <div>
    {
      data?.user ? (
        <div>
          <button onClick={() => signOut()}>Sign Out </button>
          {data.user.name}
        </div>
      ) : (
        <button onClick={() => signIn("google")}>Sign In</button>
      )
    }
  </div >
}

export default Home;