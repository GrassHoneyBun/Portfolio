import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);
  const cardsContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - cardsContainerRef.current.offsetLeft;
    scrollLeft.current = cardsContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - cardsContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // The *2 can be adjusted for scroll speed
    cardsContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="columns-container">
          <div className="column">
            <div className="projects">
              <h2>Hello, my name is Austin Fletcher:</h2>
              <p>Some asshole</p>
              <ul>
                {projects.map(project => (
                  <li key={project._id}>
                    <strong>{project.title}</strong>: {project.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="project-image-container">
              <img
                src={`${process.env.PUBLIC_URL}/pamda.jpeg`} // Replace with your image URL
                alt="Placeholder"
                className="project-image"
              />
            </div>
          </div>
        </div>
        <div
          className="cards-container"
          ref={cardsContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Example card 1 */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 1"
              className="card-image"
            />
            <div className="card-content">
              <h3>My portfolio</h3>
              <p>You are here</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>

          {/* Example card 2 */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 2"
              className="card-image"
            />
            <div className="card-content">
              <h3>Task Managment</h3>
              <p>To do list</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>

          {/* Example card 3 - Add more cards as needed */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 3"
              className="card-image"
            />
            <div className="card-content">
              <h3>Weather page</h3>
              <p>My weather app</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
          {/* Example card 4 - Add more cards as needed */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 4"
              className="card-image"
            />
            <div className="card-content">
              <h3>Magic Card Database</h3>
              <p>Database</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
          {/* Example card 5 - Add more cards as needed */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 5"
              className="card-image"
            />
            <div className="card-content">
              <h3>Chat App</h3>
              <p>Discord text clone</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
          {/* Example card 6 - Add more cards as needed */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 6"
              className="card-image"
            />
            <div className="card-content">
              <h3>Card 6 Title</h3>
              <p>Description for Card 6</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
          {/* Example card 7 - Add more cards as needed */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 7"
              className="card-image"
            />
            <div className="card-content">
              <h3>Card 7 Title</h3>
              <p>Description for Card 7</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
            {/* Example card 8 - Add more cards as needed */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 8"
              className="card-image"
            />
            <div className="card-content">
              <h3>Card 8 Title</h3>
              <p>Description for Card 8</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
          {/* Example card 9 - Add more cards as needed */}
          <div className="card">
            <img
              src="https://via.placeholder.com/200x150.png"
              alt="Card 9"
              className="card-image"
            />
            <div className="card-content">
              <h3>Card 9 Title</h3>
              <p>Description for Card 9</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
          {/* Additional cards can be added similarly */}
        </div>
      </header>
    </div>
  );
}

export default App;
