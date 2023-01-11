import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

import './Navbar.css'

function Navigation() {

    return (

        <>

            <Navbar bg="dark" expand="lg">

                <Container>

                    <Navbar.Brand style={{ color: 'yellow' }}>MyApp</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-auto">

                            <Nav.Link href="/favourite" className="nav-links" >Favourite</Nav.Link>

                            <Nav.Link href="/link" className="nav-links">Link</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </>

    );

}



export default Navigation;