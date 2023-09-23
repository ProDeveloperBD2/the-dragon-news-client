import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container className='bg-light rounded'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav className='fw-semibold'><Link className='text-black text-decoration-none me-3' to="/category/0">Home</Link></Nav>
                            <Nav className='fw-semibold' ><Link className='text-black text-decoration-none me-3'>About</Link></Nav>
                            <Nav className='fw-semibold' ><Link className='text-black text-decoration-none me-3'>Career</Link></Nav>
                        </Nav>
                        <Nav>
                            <div className='d-flex align-items-center gap-2'>
                                <FaUserCircle style={{ fontSize: '34px' }}></FaUserCircle>
                                <Link to="/login" className='btn btn-danger text-decoration-none me-2 py-1' variant=" fw-semibold">Login</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;