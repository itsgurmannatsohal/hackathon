import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./styles/OrgLogin.css";
import {BrowserRouter as Router, Link} from "react-router-dom";





export default function OrgLogin() {

const [PUBLICKEY,SETPUBLICKEY]=useState('');
const [DOCPATH,SETDOCPATH]=useState();
//console.log(PUBLICKEY);
const handlePK =  (event) => {
  SETPUBLICKEY(event.target.value);
  //console.log(`PK changed to ${PUBLICKEY}`);
};
const handleDOCPATH = event => {
  SETDOCPATH(event.target.value);
  //console.log(DOCPATH);
  //console.log("DOCPATH changed to "+DOCPATH);
};

  return (
    <div className="body">
      <div className="card">
      <div className="right-side">
    <h1>Hello Again!</h1>
    <p>psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
  </div>
  <div className="left-side">
  <label>Enter your Private Key</label>
        <TextField
          label={"Your Private Key"}
          required
          id="filled-basic"
          variant="filled"
        />
        <br></br>
        <label>Enter your Public Key</label>
        <TextField
          label={"Public key of the user"}
          required
          name="PKORG"
          id="filled-basic"
          variant="filled"
          onChange={handlePK}
          //onChange={console.log(`PK changed to ${PUBLICKEY}`)}
        />
        <br></br>
        <label id="file-label" onChange ={handleDOCPATH}>Upload your file(s)
    <input type="file" multiple id="file"></input>

    </label>
        {/* <TextField
          label={"Information-Key"}
          required
          id="filled-basic"
          variant="filled"
        />
        <TextField
          label={"Information-Value"}
          required
          name="DOCPATH"
          id="filled-basic"
          variant="filled"
          onChange={handleDOCPATH}
        /> */}
        <Link to="/view"><Button
          variant="contained" 
          endIcon={<NavigateNextIcon />} id="btn"
        >
          Next
        </Button></Link>
        
      </div>
    </div>

  </div>
  
  );
}
