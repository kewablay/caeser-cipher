import React from "react";
import FormContainer from "../components/FormContainer";
import Nav from "../components/Nav";

import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import encryptImg from "../assets/images/encrypt1.png";

function Encrypt() {
  const location = useLocation();
  const encryptPage = location.pathname == "/encrypt";
  return (
    <div className="encryptPage">
      <Nav encryptPage={encryptPage} />
      {/* <div className="sidebarBg" ></div> */}
      <div className="mainContent">
        <Sidebar image={encryptImg} bgColor={"#E4E5FF"} />
        <FormContainer title="Encrypt" encryptPage={encryptPage} />
      </div>
    </div>
  );
}

export default Encrypt;
