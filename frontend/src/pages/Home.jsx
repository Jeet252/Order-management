import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import FormSection from "../components/FormSection";

export default function Home() {
  return (
    <div>
      <Navbar userName={JSON.parse(sessionStorage.getItem("user")).username} />
      <FormSection />
    </div>
  );
}
