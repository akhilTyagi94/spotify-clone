import Dashboard from "@/components/Dashboard";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>
  );
}
