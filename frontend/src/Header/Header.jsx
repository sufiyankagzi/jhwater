import '../Header/Header.css';
import { Container, Col, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { VscMail } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import NavbarMain from "../Components/NabarMain";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Container fluid className='m-0 p-0 px-4 head-container'>
        <Row className='m-0 py-0 px-4'>
          <Col 
  xs={12} md={6} 
  className="head-text d-flex flex-column flex-md-row gap-2 align-items-center justify-content-center justify-content-md-start m-0 p-0"
>
  <div className="d-flex align-items-center gap-2">
    <FiPhoneCall className="fs-5" />
    <span>989 803 1834</span>
  </div>
  <div className="d-flex align-items-center gap-2">
    <VscMail className="fs-5" />
    <span>care@jhwatertechnologies.com</span>
  </div>
</Col>
          <Col 
  xs={12} md={6} 
  className="d-flex justify-content-center justify-content-md-end align-items-center gap-2 m-0 p-0 mt-2 mt-md-0"
>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook" aria-label="Facebook"><FaFacebookF className="fs-5" /></a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn-insta instagram" aria-label="Instagram"><FaInstagram className="fs-5" /></a>
  <a href="https://wa.me/919898031884?text=To,%0a*J%20H%20Water%20Technology*%0a%0aHi%2C%20I%20want%20to%20know%20more%20about%20your%20products%0aPlease%20share%20your%20catalogue" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp" aria-label="WhatsApp"><FaWhatsapp className="fs-5" /></a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn youtube" aria-label="YouTube"><FaYoutube className="fs-5" /></a>
</Col>
        </Row>
      </Container>
      
      {/* <NavbarMain /> */}
    </>
  )
}
export default Header;