import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg1 from '../../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 style={{ marginLeft: '4px', marginBottom: '20px' }}>Login With</h4>
                <div style={{ width: '95%', margin: '0px auto' }}>
                    <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', textAlign: 'center', width: '90%' }} variant="outline-primary"><FaGoogle className='me-2' />  Login With Google</Button>
                    <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', textAlign: 'center', width: '90%' }} variant="outline-secondary"><FaGithub className='me-2' />    Login With Github</Button>
                </div>
            </div>
            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='text-primary'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-primary'> <FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-danger'> <FaInstagramSquare /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <QZone></QZone>
            </div>
            <div style={{ width: '100%' }} className='mt-4'>
                <img className='w-100' src={bg1} alt="" />
                <div style={{ position: 'relative', bottom: '340px', width: '90%', textAlign: 'center', marginLeft: '10px', color: 'white' }}>
                    <h2>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div >
    );
};

export default RightNav;