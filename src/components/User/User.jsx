import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,phone} = user;

    const userStyle ={
        border:"2px solid red",
        borderRadius: "20px",
        padding: "10px",
        margin: "10px"
    }

    return (
        <div className='space-y-2' style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link className='btn btn-sm btn-soft btn-primary' to={`/users/${id}`}>
            show detials
            </Link>
        </div>
    );
};

export default User;