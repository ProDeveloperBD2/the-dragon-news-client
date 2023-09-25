import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
const Login = () => {
    useTitle('Login')
    const { signInUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0';
    const handleLoginSumbit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorMessage('')
        console.log(`
        Email: ${email}
        Password: ${password}
        `)
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message)
                setErrorMessage(error.message)
            })
    }

    return (
        <div>
            <div className='mx-auto shadow mt-5 py-5 px-5 mb-5' style={{ width: '40%' }}>
                <h2 className='text-center mb-5'>Login your account</h2>
                <form onSubmit={handleLoginSumbit}>
                    <label>
                        Email
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light mb-4 rounded' style={{ fontSize: '20px', border: 'none' }} type="email" name="email" id="email" placeholder='Enter Your Email' required /><br />
                    <label>
                        Password
                    </label><br />
                    <input className='w-100 px-2 py-1 fw-semibold bg-light rounded' style={{ fontSize: '20px', border: 'none' }} type="password" name="password" id="password" placeholder='Enter Your Password' required />
                    <br />
                    <p className='text-danger'>{errorMessage}</p>
                    <button className='bg-black fw-semibold text-white mt-4' style={{ fontSize: '20px', width: '100%', border: 'none', padding: '6px' }}>Login</button>
                    <p className='text-center mt-3'>Dont’t Have An Account ? <Link className='text-danger fw-semibold mx-auto' to="/register">Register</Link></p>
                </form>
            </div>
        </div >
    );
};

export default Login;