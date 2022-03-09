import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import './Header.css'

const Header = (props) =>{

    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt="logo-fibraInn"
                    src="https://www.fibrainn.mx/assets/images/logo-inversionistas.png"
                    width="100"
                    className="d-inline-block align-top"
                    />{' '}
                
                </Navbar.Brand>
                <span className="navbar-text ms-auto header-title" >
                    Dashboard
                </span>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Logout</Nav.Link>
                </Nav>
                <img src="https://zitus.mx/wp-content/uploads/2020/09/logo-rectangular-transparente-para-fondos-claros.png" alt="logo zitus" className="logo_zitus"></img>

            </Container>
        </Navbar>          
    );
}

export default Header;