import React, { use } from 'react';


const Users2 = ({usersFetch}) => {
    const user = use(usersFetch)
    console.log(user);
    
    return (
        <div>
            <h1>this is users 2</h1>
            
        </div>
    );
};

export default Users2;