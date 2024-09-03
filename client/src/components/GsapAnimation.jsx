import {Route,Routes, useLocation} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import BuyerDashboard from "../pages/BuyerDashboard"
import gsap from "gsap";
import { useEffect, useRef } from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GsapAnimation = () => {
    const nodeRef = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        if (nodeRef.current){
            gsap.fromTo(nodeRef.current,{opacity: 0},{opacity: 1,duration:1})
          

        }
    },[location]);

  return (
    <div ref={nodeRef}>
        <ToastContainer />
      <Routes location={location}> 
      <Route path="/" element={<Home/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Buyer/profile" element={<BuyerDashboard/>}/>
    </Routes>
    </div>
  )
}

export default GsapAnimation
