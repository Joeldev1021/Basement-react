/* eslint-disable no-unused-vars */
import { useState } from "react";
import BtnCart from "../BtnCart/BtnCart";
import ModalCart from "../modal/ModalCart";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
      <header className='header'>
        <img className="logo-mobile" src="./B.svg" alt="" />
        <img className="logo-desktop" src="./basement.logotype.png" alt="" />
        <img className="hd-4k" src="./hd-4k.svg" alt="" />
         <BtnCart handleModal={handleModal}/>
         {showModal && <ModalCart handleModal={handleModal}/>}
     </header>
  );
};

export default Header;
