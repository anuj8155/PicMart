import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GsapAnimation from './components/GsapAnimation'


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <GsapAnimation/>  
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}