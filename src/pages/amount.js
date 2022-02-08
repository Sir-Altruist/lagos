import React, {useState, useEffect} from 'react';
import "./amount.css"
import axios from 'axios'
import Footer from '../Component/Footer';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { v4 as uuidv4 } from 'uuid'
import Confirmation from './confirmation';
import {API} from './backend';

const Amount = ({closemodal}) => {
    console.log (`amount Incoming: ${closemodal}`)
    const [refid, setRefid] = useState();
    const [lasinvoice, setLasinvoice] = useState();
    const [lastel, setLastel] = useState();
    const [examtype, setExamtype] = useState();
    const [amountpay, setAmountpay] = useState();
    const [payername, setPayername] = useState();
    const [payeremail, setPayeremail] = useState();
    const [pin, setPin] = useState("");
    const [transref, setTransref] = useState();
    const [successstatus, setSuccessstatus] = useState(true);
    const [getPhone , setGetPhone] = useState("")
    let uuid;

    

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
            
            setRefid(response.data[0].fields.RequestId);
            setLasinvoice(response.data[0].fields.InvoiceNumber);
            setLastel(response.data[0].fields.phone);
            setExamtype(response.data[0].fields.ExamType);
            setAmountpay(response.data[0].fields.TotalPrice);
            setPayername(response.data[0].fields.Name);
            setPayeremail(response.data[0].fields.email);
            setPin(response.data[0].fields.pinum)
            setTransref(response.data[0].fields.RequestId)
            console.log(`Response ${response.data[0].fields.RequestId}`)
        }
      })

    //   console.log("demola" ,typeof pin)
      .catch(error => console.log(error))
    }
    const config = {
        public_key: process.env.REACT_APP_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: amountpay,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: payeremail,
          phonenumber: lastel,
          name: payername,
        },
        customizations: {
          title: 'Lagos Pay',
          description: 'PAYMENT FOR EXAMINATION (CBS)',
          logo: 'https://pbs.twimg.com/media/EtEwgbvXMAQfCXT.jpg',
        }
    }

    const handleOnChange = (e) =>{
        setAmountpay(e.target.value);
    }

    const handleOnClick = () =>{
        localStorage.clear()
        
        handleFlutterPayment({
            callback: (response) => {
                console.log(`Flutter Response: ${response}`);
                if(response.status === "successful"){
                    console.log("I am here Lord");
                    setSuccessstatus(false);
                }
                // closePaymentModal()
                // if(pin == ""){      
                    console.log(`my pin `)                           /// If the Pin is equal to empty string, i.e if the registeration was fresh one
                    uuid = uuidv4().substring(0,5)              /// Generate a fresh PIN for the candidiate and update its Row on the databaseTable
                    console.log(`UUID: ${uuid}`)
                    setPin(uuid);

                    let updatepin = {
                        pinum: uuid,
                        trnsref: transref,
                        flutrxid: response.transaction_id,
                        flutrxref: response.tx_ref,
                    }

                    let setnewepin = {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "content-type": "application/json"
                        },
                        body: JSON.stringify(updatepin)
                    }
                    let statuss;
                    return fetch("http:localhost:8000/portals/", setnewepin)
                        .then(res => {
                            statuss = res.status
                        })
                        .then(() => {
                            if (statuss < 400) {
                                console.log("New Pin Saved")
                            }
                            else {
                                console.log("New Pin Not Saved")
                            }
                        })
                        .catch(err => console.log(err))
                // }
                // else{
                //     uuid = pin                                  // if Pin coning from the back is not empty, then make the pin uuid
                // }
                
                // let bodyy = {
                //     pinnos: uuid,
                //     amount: response.amount,
                //     trnsactionref: transref,
                //     created_at: new Date(Date.now()).toString()
                // }
                // console.log(`Raw Body: ${bodyy}`)

                // let storetransaction = {
                //     method: "POST",
                //     headers: {
                //       Accept: "application/json",
                //       "content-type": "application/json"
                //     },
                //     body: JSON.stringify(bodyy)
                // }

                // let statuss;
                //     return fetch("http:localhost:5000/", storetransaction)
                //         .then(res => {
                //             statuss = res.status
                //         })
                //         .then(() => {
                //             if (statuss < 400) {
                //                 console.log("Transaction Record Saved")
                //             }
                //             else {
                //                 console.log("Transaction Not Saved")
                //             }
                //         })
                //         .catch(err => console.log(err))
            },
            onClose: () => {},
        });
        
    }

    const handleInvoice = () =>{
        
    }

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="amountContainer">
        {successstatus ? 
            <div className="subcontain">
                <div className="payment-heading">
                    <span className="title-heading">
                        Payment Preview
                    </span>
                </div>
                <div id='submitform'>
                    <div className="subfields">
                        <label>Req. ID:</label>
                        <input disabled value={refid} onChange={handleOnChange} className="amountfield" placeholder="Request ID" />
                    </div>

                    <div className="subfields">
                        <label>Invoice:</label>
                        <input disabled value={lasinvoice} onChange={handleOnChange} className="amountfield" placeholder="Invoice Number" />
                    </div>

                    <div className="subfields">
                        <label>Telephone:</label>
                        <input disabled value={lastel} onChange={handleOnChange} className="amountfield" placeholder="Telephone Number" />
                    </div>

                    <div className="subfields">
                        <label>Exam Type:</label>
                        <input disabled value={examtype == '0' ? 'B.E.C.E' : examtype == '1' ? 'JUNIOR SCHOOL' : examtype == '2' ? 'M C' : 'P C'} onChange={handleOnChange} className="amountfield" placeholder="Exam Type" />
                    </div>

                    <div className="subfields">
                        <label>Amount Payable:</label>
                        <input disabled value={amountpay} onChange={handleOnChange} className="amountfield" placeholder="Exam Type" />
                    </div>

                    <div className="subfields">
                        <label onClick={handleInvoice} id="viewInvoice">View Invoice</label>
                    </div>
                    <button onClick={handleOnClick} id="submitButton">Pay Now</button>
                </div>
            </div> : <Confirmation paidamount={amountpay} transpin={pin} transactref={transref}/>
            }

            <div className="container-footer">
                <Footer />
            </div>

        </div>
    );
};

export default Amount;
