import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Form } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const { createUser, updateUserProfile, userEmailVarification } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    const handleRegisterSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
Name: ${name}
Photo URL: ${photoUrl}
Email: ${email}
Password: ${password}
`)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                userProfileUpdate(result.user, name, photoUrl)
                userEmailVarification(result.user)
                    .then(() => {
                        alert('Please Check Your Mail Box and Varification Your account')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const userProfileUpdate = (user, name, photoUrl) => {
        updateUserProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                console.log('updated profile')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleTerms = event => {
        setAccepted(event.target.checked)
        console.log(event.target.checked)
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
                    <Form.Check onClick={handleTerms} type="checkbox" name="checkbox" id="checkbox" label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                    <br />
                    <button disabled={!accepted} className={`${accepted ? 'bg-black fw-semibold text-white' : 'bg-secondary fw-semibold text-white'}`} style={{ fontSize: '20px', width: '100%', border: 'none', padding: '6px' }}>Register</button>
                    <p className='text-center mt-3'>Already Have An Account ? <Link className='text-danger fw-semibold mx-auto' to="/login">Login</Link></p>
                </form>
            </div>
        </div >
    );
};

export default Register;