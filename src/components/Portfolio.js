// Example: Portfolio.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the projects!', error);
            });
    }, []);

    return (
        <div>
            <h1>My Portfolio</h1>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;
