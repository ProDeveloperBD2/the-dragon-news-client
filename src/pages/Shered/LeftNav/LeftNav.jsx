import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './LeftNav.css'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://the-dragon-news-server-9drwyfv5w-prodeveloperbd2.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3>All Category</h3>
            <div className='mt-3 shadow' style={{ width: '95%', padding: '3px' }}>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='leftNavBar' >{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;