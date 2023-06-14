import React from "react";
import FormContainer from "../components/FormContainer";
import Nav from "../components/Nav";
import decryptImg from "../assets/images/decrypt.png";

import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Decrypt() {
  const location = useLocation();
  const decryptPage = location.pathname == "/decrypt";
  //   console.log(decryptPage)
  return (
    <div className="decryptPage">
      <Nav decryptPage={decryptPage} />
      <div className="mainContent">
        <Sidebar image={decryptImg} bgColor={"#F8E3FF"} />
        <FormContainer title="Decrypt" decryptPage={decryptPage} />
      </div>
    </div>
  );
}

export default Decrypt;
