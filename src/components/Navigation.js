import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

function Navigation(){
    return(
    <Navbar sticky="top" bg="white" >
        <Container>
            <NavLink to= "/">
                <Navbar.Brand >
                    <img
                    alt=""
                    src="images/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    class = "logo"
                    />{' '}
                </Navbar.Brand>
            </NavLink>
            
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item class = "navItem"> <Nav.Link href="/#work-grid">Work</Nav.Link></Nav.Item>
          </Nav>    

        </Container>
    </Navbar>
    );

}

export default Navigation;