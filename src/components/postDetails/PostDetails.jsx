import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    const {title,body} = post;
    return (
        <div className='border w-1/2'>
            <h1 className='font-bold'>title: {title}</h1>
            <p>description : {body}</p>
        </div>
    );
};

export default PostDetails;