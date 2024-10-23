import React, { useEffect, useState } from 'react';
import '../Styles/About.css';

const initialUsers = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, isActive: true },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 34, isActive: false },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", age: 22, isActive: true },
    { id: 4, name: "Diana Prince", email: "diana.prince@example.com", age: 30, isActive: true },
    { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com", age: 45, isActive: false },
    { id: 6, name: "Fiona Apple", email: "fiona.apple@example.com", age: 27, isActive: true },
    { id: 7, name: "George Clooney", email: "george.clooney@example.com", age: 59, isActive: true },
    { id: 8, name: "Hannah Montana", email: "hannah.montana@example.com", age: 24, isActive: false },
    { id: 9, name: "Ian Fleming", email: "ian.fleming@example.com", age: 38, isActive: true },
    { id: 10, name: "Jessica Jones", email: "jessica.jones@example.com", age: 32, isActive: true }
];

const About = () => {
    const [filter, setFilter] = useState('all');
    const [filteredUsers, setFilteredUsers] = useState(initialUsers);

    // Effect to update filtered users based on filter state
    useEffect(() => {
        let newFilteredUsers;

        if (filter === 'active') {
            newFilteredUsers = initialUsers.filter(user => user.isActive);
        } else if (filter === 'inactive') {
            newFilteredUsers = initialUsers.filter(user => !user.isActive);
        } else {
            newFilteredUsers = initialUsers; // 'all'
        }

        setFilteredUsers(newFilteredUsers);
        console.log(`Filtered Users:`, newFilteredUsers); // Log the filtered users
    }, [filter]); // Runs when filter changes

    return (
        <div className="user-list-container">
            <h1>User List</h1>
            <div className="filter-buttons">
                <button onClick={() => setFilter('all')}>Show All</button>
                <button onClick={() => setFilter('active')}>Show Active</button>
                <button onClick={() => setFilter('inactive')}>Show Inactive</button>
            </div>
            <div className="user-list">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-card">
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Age: {user.age}</p>
                        <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
