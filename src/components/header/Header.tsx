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
          <h1 className="header-title">Basement</h1>
         <BtnCart handleModal={handleModal}/>
         {showModal && <ModalCart handleModal={handleModal}/>}
     </header>
  );
};

export default Header;
