import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from "../../../providers/AuthProvider"

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out Success')
            })
            .catch(error => {
                console.log(error)
            })
    }
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
                                {
                                    user
                                        ?
                                        <>
                                            <Image className='cirkle' style={{ width: '35px', height: '35px' }} src={user.photoURL} roundedCircle />
                                            <button onClick={handleLogOut} style={{ background: 'none', border: 'none' }}>
                                                <Link to="/category/0" className='btn btn-danger text-decoration-none me-2 py-1' variant=" fw-semibold">Sign Out</Link>
                                            </button>
                                        </>
                                        :
                                        <>
                                            <FaUserCircle style={{ fontSize: '34px' }}></FaUserCircle>
                                            <button style={{ background: 'none', border: 'none' }}>
                                                <Link to="/login" className='btn btn-danger text-decoration-none me-2 py-1' variant=" fw-semibold">Login</Link>
                                            </button>
                                        </>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;