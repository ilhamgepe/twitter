import Head from "next/head";
import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar/Sidebar";
import Widget from "../components/Widget/Widget";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-[90rem] mx-auto">
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        <Feed />
        {/* widgets */}
        <Widget />
        {/* modal */}
      </main>
    </div>
  );
}
