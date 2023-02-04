import { useState } from "react";
import Blogs from "../components/Blogs";
import FirstGrid from "../components/FirstGrid";
import Footers from "../components/Footers";
import Header from "../components/Header";
import Landing from "../components/Landing";
import NewArival from "../components/NewArival";
import SecondGrid from "../components/SecondGrid";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <FirstGrid />
      <SecondGrid />
      <NewArival />
      <Blogs />
      <Footers/>
    </>
  );
}
