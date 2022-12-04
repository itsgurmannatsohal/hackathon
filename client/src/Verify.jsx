import { Button, TextField, Card } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./styles/Verify.css";
import {useState} from "react";
import Swal from 'sweetalert2';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import {checkVerification} from "./components/landing"

export default function Verify() {
    const [status,setStatus] = useState("false");
    return (
        <div className="body">
      <div className="card">
        <div className="right-side">
          <h1>Hello Again!</h1>
          <p>
          Choose the organisation through which you want to complete verification.
          </p>
        </div>
        <div className="left-side">
        <FormGroup>
  <FormControlLabel id="check-btn" control={<Checkbox/>} label="ORG 1" />
  <FormControlLabel id="check-btn" control={<Checkbox/>} label="ORG 2" />
  <FormControlLabel id="check-btn" control={<Checkbox/>} label="ORG 3" />

  {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
</FormGroup>
          
  <button id="submit-btn" onClick={() => {Swal.fire({
    title: 'Success!',
    text: 'Verification Successful!',
    icon: 'success'
  })}}>CONTINUE</button>

        </div>
      </div>
    </div>
    );
}