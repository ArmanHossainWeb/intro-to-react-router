import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className='border'>
            <h1>title: {title}</h1>
            <Link to={`/posts/${id}`}>
            <button className='btn btn-info'>see more</button>
            </Link>
        </div>
    );
};

export default Post;