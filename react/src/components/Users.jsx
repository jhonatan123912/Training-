import React from 'react'
import Bebas from './Bebas';

const Users = () => {
    const users = ["a", "b", "c"]
  return (
    <div>
        <h1>Users</h1>
        <div style={{display: "flex", flexDirection:"column"}}>
            {users.map((user) => 
            (
                <Bebas name={user}/>
            ))}
        
        </div>
    </div>
  );
};

export default Users