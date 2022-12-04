import './styles/Home.css';

import {motion} from "framer-motion";
// import {BrowserRouter as Router, Link} from "react-router-dom";
export default function Home()
{   
    return (
        <>
        <div className="body-home">
        <div className="text">
        <motion.h2 transition={{delay:1, duration: 1}} initial={{opacity:0,y:'100vh'}} 
       animate={{opacity: 1,y: 0}} className='title-text'>VeriFication simpliFied.</motion.h2>
            <motion.p transition={{delay:1, duration: 1}} initial={{opacity:0,y:'100vh'}} 
       animate={{opacity: 1,y: 0}} className='para-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia adipisci quia cupiditate vero consequuntur pariatur, dignissimos omnis excepturi officia soluta minima, voluptate  blanditiis veritatis earum nemo. Nihil, repudiandae incidunt.</motion.p>
        </div>
        <div className="options">
        <motion.button transition={{delay:1, duration: 1}} initial={{x: "100vw"}} animate={{x:0}} className='btn-ani'><a href="/org">For Organization</a></motion.button>
        <motion.button transition={{delay:1, duration: 1}} initial={{x: "100vw"}} animate={{x:0}} className='btn-ani'><a href='/verify'>For Verification</a></motion.button>

        </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E7D7C1" fill-opacity="1" d="M0,256L34.3,224C68.6,192,137,128,206,138.7C274.3,149,343,235,411,234.7C480,235,549,149,617,149.3C685.7,149,754,235,823,250.7C891.4,267,960,213,1029,197.3C1097.1,181,1166,203,1234,218.7C1302.9,235,1371,245,1406,250.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}

        </>
        
    );
}