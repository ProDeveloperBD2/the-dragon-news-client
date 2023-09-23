import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <h2 className='d-flex justify-content-center align-items-center'>   <Spinner animation="border" variant="danger" /></h2>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;