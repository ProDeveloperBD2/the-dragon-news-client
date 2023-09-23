import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegisterSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
Name: ${name}
Photo URL: ${photoURL}
Email: ${email}
Password: ${password}
`)
    }
    return (
        <div>
            <div className='mx-auto shadow mt-5 py-5 px-5 mb-5' style={{ width: '40%' }}>
                <h2 className='text-center mb-4'>Register your account</h2>
                <form onSubmit={handleRegisterSubmit}>
                    <label>
                        Name
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light mb-3 rounded' style={{ fontSize: '20px', border: 'none' }} type="text" name="name" id="name" placeholder='Enter Your Name' required /><br />
                    <label>
                        Photo URL
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light mb-3 rounded' style={{ fontSize: '20px', border: 'none' }} type="text" name="photo" id="photo" placeholder='Photo URL' required /><br />
                    <label>
                        Email
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light mb-3 rounded' style={{ fontSize: '20px', border: 'none' }} type="email" name="email" id="email" placeholder='Enter Your Email' required /><br />
                    <label>
                        Password
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light mb-5 rounded' style={{ fontSize: '20px', border: 'none' }} type="password" name="password" id="password" placeholder='Enter Your Password' required />
                    <br />
                    <button className='bg-black fw-semibold text-white' style={{ fontSize: '20px', width: '100%', border: 'none', padding: '6px' }}>Register</button>
                    <p className='text-center mt-3'>Already Have An Account ? <Link className='text-danger fw-semibold mx-auto' to="/login">Login</Link></p>
                </form>
            </div>
        </div >
    );
};

export default Register;