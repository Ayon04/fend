"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface User {
  id: number;
  email: string;
}

const CSRPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://dummyjson.com/users');
      console.log(response);
      setUsers(response.data.users);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Client-Side Rendered Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default CSRPage;
