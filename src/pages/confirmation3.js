import React,{useEffect, useState} from 'react';
import "./confirmation.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Confirmation3 = ({paidamount, transpin, transactref}) => {
    const[examtype, setExamtype] = useState();
    useEffect(() =>{
        fetchallinfo();
    },[])

    const phone = localStorage.getItem('phone')
    console.log(phone)

    const fetchallinfo = async () =>{

        await axios.get(`${API}getByPhoneNumber/?phone=${phone}`)
        .then(response => {
          console.log(response)
        if(response.status===200){
            setExamtype(response.data[0].fields.RequestId);
        }
      })
    }

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
                <span id="heading">  Payment of ₦{paidamount} for C.O.A Exam</span>
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

export default Confirmation3;
