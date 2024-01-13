import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";

const AdminOrders: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar/>
    </div>
  );
};

export default AdminOrders;
