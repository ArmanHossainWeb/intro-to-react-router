import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    
    return (
        <div>
            <h1 className='font-bold text-2xl'>post : </h1>
            <div className='space-y-2'>
            {
              posts.map(post => <Post key={post.id} post ={post}></Post>)  
            }
            </div>
        </div>
    );
};

export default Posts;