import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee'
const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>
                <p className='fw-semibold' style={{ marginTop: -8, marginBottom: 20 }}>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='container d-flex mb-4 shadow p-2 text-black'>
                <Button className='me-2' variant="danger fw-semibold">Latest</Button>
                <Marquee className='fw-semibold fs-5' pauseOnHover={true} speed={70}>
                    I can be a React component, multiple React components, or just some text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vitae suscipit minus esse. Possimus quaerat cumque et expedita! Explicabo, perferendis architecto. Unde delectus consequuntur officiis sunt! Vero molestias dolorem quaerat, non iure qui laudantium, suscipit dignissimos aspernatur architecto debitis veritatis temporibus expedita consequuntur? Itaque delectus dolorum ab corrupti dolore rem?
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='fw-semibold' href="#features">Home</Nav.Link>
                            <Nav.Link className='fw-semibold' href="#features">About</Nav.Link>
                            <Nav.Link className='fw-semibold' href="#features">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button className='me-2' variant="danger fw-semibold">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;