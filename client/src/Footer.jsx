import "./styles/Footer.css";
import {motion} from "framer-motion"
export default function Footer()
{
    return (
        <motion.div transition={{delay:1, duration: 1}} initial={{y: 400}} animate={{y:0}} className="footer">
            <p>Made with maaza and sting.</p>
            {/* <h6>Copyright blah blah</h6> */}
        </motion.div>
    );
}