import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Home.css"
import{Link as Scroll} from "react-scroll";

export default Topnav;








function Topnav({explore}) {
  return (   
    <Navbar expand="lg" style={{backgroundColor:'#3b5d50' ,height:'80px'}} className='fixed-top' >
      <Container className='ml-5'>
        <Navbar.Brand as={Link} to="/"className='ml-5'>
        <h1 className='name' style={{color:"white"}}>Furni.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className="toggle p-2" style={{color:'white',textAlign:"center",height:"75px",width:"75px"}}/>  
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
          <Nav className="text-center" style={{backgroundColor:"#3b5d50"}}>
            <Nav.Link  as={Link} to="/" style={{color:'white',fontSize:'larger',fontWeight:'bold'}}>Home</Nav.Link>
            <Nav.Link as={Scroll}   to="explore" smooth={true} duration={100}style={{color:'white',fontSize:'larger'}}>{explore}</Nav.Link>
            <Nav.Link as={Link}  to="/shop" style={{color:'white',fontSize:'larger'}}>Shop</Nav.Link>
            <Nav.Link  as={Link} to="/aboutus" style={{color:'white',fontSize:'larger'}}>About us</Nav.Link>
            <Nav.Link  as={Link} to="/blog" style={{color:'white',fontSize:'larger'}}>Blog</Nav.Link>
            <Nav.Link  as={Link} to="/contactus" style={{color:'white',fontSize:'larger'}}>Contact us</Nav.Link>
            <Nav.Link  as={Link} to="/login" style={{color:'white',fontSize:'larger'}}><i class="fa-sharp fa-regular fa-user"></i></Nav.Link>
            <Nav.Link  as={Link} to="/cart" style={{color:'white',fontSize:'larger'}}> <i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
  );
}