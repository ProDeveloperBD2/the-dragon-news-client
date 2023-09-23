import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css';

const NewsCard = (props) => {
    const { title, _id, details, image_url, author, rating, total_view } = props.news;
    return (
        <div className='mb-4'>
            <Card>
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '50px', width: '50px' }} src={author?.img} roundedCircle />
                    <div className='ps-2 mt-3 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(author?.published_date).format('MM-DD-Y')}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url}></Card.Img>
                    <Card.Text>{details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex'>
                            <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number || 0)} readOnly></Rating>
                            <span className='ms-1'> {rating?.number}</span>
                        </div>
                        <div>
                            <FaEye></FaEye> {total_view}
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;