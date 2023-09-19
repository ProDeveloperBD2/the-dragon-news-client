import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1200/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3>All Category</h3>
            <div className='mt-3 w-75 shadow' style={{ width: '100%', padding: '3px' }}>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-black fw-semibold text-decoration-none bg-light px-2 py-1 rounded" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', textAlign: 'center', width: '99%' }}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;