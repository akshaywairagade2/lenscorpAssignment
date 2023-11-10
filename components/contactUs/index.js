'use client'
import styles from './contactUs.module.css';
import { useState} from 'react'
const ContactUs = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [question,setQuestion]=useState("");

  const sendResponse=()=>{
    let desc=`Hello Sir/Ma'am,\nMy name is ${name}.\nMy email is ${email}.\n My phone number is ${phone}.\nHere is my ${question}\n\nRegards ${name}`
    const recipientEmail = 'info@neurodactyl.com';
    const encodedDesc = encodeURIComponent(desc);
    window.location.href = `mailto:${recipientEmail}?subject=Contact%20Us%20Query&body=${encodedDesc}`;
    alert("Please click on Send button of the email to get the query")
    setName("");
    setEmail("");
    setPhone("");
    setQuestion("");
  }
  return (
    <div className={styles.contact_main} id='contact'>
      <text style={{fontSize:"40px", fontWeight:700, color:"blue"}}>
        Contact Us
      </text>
      <text style={{ textAlign:'center',fontSize:"25px", fontWeight:400, color:"blue"}}>Any question about our products or technologies?<br></br>
Just text us!</text>
      <div className={styles.sub_form}>
        <div><label>Email</label><input style={{padding:"10px"}} type='email' placeholder='Your Email' onChange={(e) => { setEmail(e.target.value) }}></input></div>
         <div><label>Name</label><input style={{padding:"10px"}} type='text' placeholder='Your Name' onChange={(e) => { setName(e.target.value) }}></input></div>
         <div> <label>Phone</label><input style={{padding:"10px"}} type='number' placeholder='Your Phone' onChange={(e) => { setPhone(e.target.value) }}></input></div>
          <div> <label>Your Question</label><textarea style={{padding:"15px"}} type='text' placeholder='Your Question' onChange={(e) => { setQuestion(e.target.value) }}></textarea></div>
          <div></div> <button onClick={()=>sendResponse()}>Send</button></div>
      </div>
  );
};

export default ContactUs;
