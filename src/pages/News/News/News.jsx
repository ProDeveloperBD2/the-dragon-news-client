import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/category/${category_id}`} className='btn btn-danger d-flex align-items-center justify-content-center' style={{ width: '35%', gap: '5px' }}><FaArrowLeft></FaArrowLeft> All news in this category</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;