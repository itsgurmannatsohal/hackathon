import "./styles/Header.css";
import { motion } from "framer-motion";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import {Button} from "@mui/material";
export default function Header() {
  return (
    <>
      <motion.div
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="center-header">
          <div className="left">
            <ul>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>

          <p className="title">veriFi</p>
          <div className="right">
            <ul>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}