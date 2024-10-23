import React, { useEffect, useState } from 'react';
import '../Styles/About.css';

const users = [
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
  const [achievements, setAchievements] = useState([]);

  // Using useEffect to populate static data when the component mounts
  useEffect(() => {
    const data = [
      { title: 'Years of Experience', value: 10 },
      { title: 'Global Offices', value: 5 },
      { title: 'Happy Clients', value: 200 },
    ];

    // Setting the hardcoded data into the state
    setAchievements(data);
  }, []); // Empty dependency array ensures this runs once, on mount

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are committed to delivering the best services to our clients worldwide.</p>

      <h2>Our Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <strong>{achievement.title}: </strong> {achievement.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
