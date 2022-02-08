import React from 'react';
import "./confirmation.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Confirmation = ({paidamount, transpin, transactref}) => {
    console.log(`Incoming: ${paidamount}`)
    const navigate = useNavigate()

    const CloseModal = () =>{
        navigate("/")
    }

  return( 
  <div className="confcontainer">
      <div className="subcontainer">
            <div className="top-subcontain-4">
                <AiOutlineCloseCircle onClick={CloseModal} id="heading5" />
            </div>
            <div className="top-subcontain">
                <span id="heading">  Payment of ₦{paidamount}</span>
            </div>
            <div className="top-subcontain-2">
                <span id="heading2">  Successful</span>
            </div>
            <div className="top-subcontain-3">
                <span id="heading3">Pin:{transpin}</span>
                <span id="heading4">Transaction Ref:{transactref}</span>
            </div>
      </div>
  </div>
  );
};

export default Confirmation;
