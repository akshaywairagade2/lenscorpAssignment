'use client'
import styles from './requests.module.css';
import {useState} from 'react'
const Requests = (props) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [company,setCompany]=useState("");
  const [purpose,setPurpose]=useState("");

  const sendResponse=()=>{
    let desc=`Hello Sir/Ma'am,\nMy name is ${name}.\nMy email is ${email}.\n My company name is ${company}.\nHere is my purpose ${purpose}\n\nRegards ${name}`
    const recipientEmail = 'info@neurodactyl.com';
    const encodedDesc = encodeURIComponent(desc);
    window.location.href = `mailto:${recipientEmail}?subject=Contact%20Us%20Query&body=${encodedDesc}`;
    setEmail("");
    setName("");
    setPhone("");
    setQuestion("");
    // alert("Please click on Send button of the email to get the query")
  }
  return (
    <div className={styles.contact_main} style={{display:'flex', flexDirection:'column'}}>
      <text style={{fontFamily:"'TildaSans', Arial, sans-serif",fontSize:"40px", fontWeight:700, color:"white", marginBottom:"20px"}}>
        {props.title}
      </text>
      <text style={{fontFamily:"'TildaSans', Arial, sans-serif",fontSize:"20px",textAlign:"center", justifyContent:"center", fontWeight:400, color:"white"}}>If you want to get evaluation license, please fill the form below or send us an email to:<br></br> 
      <a href="info@neurodactyl.com">info@neurodactyl.com</a>
      </text>
      <div className={styles.sub_form}>
        <div><label>Your Name</label><input style={{padding:"10px"}} type='text' placeholder='Your Name' onChange={(e) => { setName(e.target.value) }}></input></div>
         <div><label>Company Name</label><input style={{padding:"10px"}} type='text' placeholder='Name of the company' onChange={(e) => { setCompany(e.target.value) }}></input></div>
         <div> <label>Email</label><input style={{padding:"10px"}} type='email' placeholder='Your Email' onChange={(e) => { setEmail(e.target.value) }}></input></div>
          <div> <label>Purpose</label><textarea style={{padding:"15px"}} type='text' placeholder='Please describe in few words your potential project or application, required size of the enrollment database for the test license' onChange={(e) => { setPurpose(e.target.value) }}></textarea></div>
          <div></div> <button onClick={()=>sendResponse()}>{props.send}</button></div>
      </div>
  );
};

export default Requests;
