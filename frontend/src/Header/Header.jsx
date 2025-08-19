import { Container, Col, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";
import {Link} from 'react-router-dom'
import NavbarMain from "../Components/NabarMain";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import '../Header/Header.css';  
const Header = () => {
  return (
    <>
      <Container fluid className="m-0 p-0" style={{ background:"#192b52ff"  }}>  
        <Row className="m-0 p-0">
          <Col md={3} className="d-flex gap-3 justify-content-center justify-content-md-start align-items-center" style={{ padding:"10px", fontFamily: "Roboto", fontSize: "13px", fontWeight: "300" }}>
                <IoLocationOutline className="fs-5 help-text" style={{color:"white",cursor:"pointer"}} /><span className="help-text text-white" style={{cursor:"pointer"}} >Location</span>
                <VscMail className="fs-5 help-text" style={{color:"white",cursor:"pointer"}} /><span className="help-text text-white" style={{cursor:"pointer"}}>info@jhwatertech.com</span>
          </Col>
          <Col md={6}  className="d-flex gap-3 align-items-center justify-content-center" style={{ padding:"10px",fontFamily: "Roboto", fontSize: "13px", fontWeight: "400",backgroundColor:"#49BBD6" }}>
                <Link className="text-decoration-none text-dark help-text"  >NEED HELP ?</Link><span>|</span>
                <Link className="text-decoration-none text-dark help-text"  >REQUEST A DEMO</Link><span>|</span>
                <Link className="text-decoration-none text-dark help-text"  >RAISE A COMPLAINT</Link>
                
          </Col>
          <Col md={3} className="text-end d-flex justify-content-end  justify-content-center justify-content-md-end gap-3" style={{ padding:"10px",fontFamily: "Roboto", fontSize: "11px", fontWeight: "300" }}>
              <a href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer"><FaFacebookF className='head-social-icon-facebook text-white fs-4'/></a>
              <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer"><FaInstagram className='head-social-icon-instagram text-white fs-4' /></a>
              <a href="https://www.youtube.com/" target="_blank"  rel="noopener noreferrer"><FaYoutube className='head-social-icon-youtube text-white' /></a>
              <a href="https://wa.me/918168356573?text=To,%0a*Nimraj%20Industries*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><FaWhatsapp className='head-social-icon-whatsapp text-white' /></a> 
          </Col>
        </Row>
      </Container>
      <NavbarMain />
    </>
  )
}
export default Header;