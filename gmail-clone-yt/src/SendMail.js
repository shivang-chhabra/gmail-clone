import React from 'react';
import "./SendMail.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from "react-hook-form";
import { useDispatch} from "react-redux";
import { closeSendMessage } from './features/mailSlice';

import firebase from "firebase";



import {db} from "./firebase";







export default function SendMail(props) {
    const dispatch = useDispatch();  
    console.log("shivang");
    console.log(db);
    const onSubmit = (formdata)=>{
        console.log(formdata);
        db.collection("emails").add({
        to : formdata.to,
        subject: formdata.subject,
        message: formdata.message,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    };
const {register, handleSubmit , watch , errors }= useForm();
 
return (
        <div className="sendMail">
            <div className ="sendMail__header">
                <h3>
                    New Message 
                </h3>
                <CloseIcon className="sendMail__close" onClick={()=>dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit ={handleSubmit(onSubmit)}>
               
             <input name ="to" ref={register({required:true})} placeholder =" To" type="email"/>
              {errors.to && <p className="sendMail__error"> To is required</p>}
                <input name ="subject" ref={register({required:true})}placeholder=" Subject"type="text"/>
                {errors.subject  && <p className="sendMail__error"> Subject is required</p>}
                <input  name ="message" ref={register({required:true})} placeholder="Message..." type="text" className=" sendMail__message"/>
                {errors.message  && <p className="sendMail__error"> Message is required</p>}
                <div className="sendMail__options">
                    <Button className="sendMail__send" variant="contained " color="primary" type="submit" >Send</Button>
                </div>
            </form>
        </div >
    )
}

