import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Projects.css';

const Projects = () => {
  const [projects] = useState([
    { id: 1, title: 'Idin Code Cuy 1', category: 'category1', image: 'https://landingpage-idincode-larareacts-projects.vercel.app/img/projek1-idin.jpg' },
        { id: 2, title: 'Idin Code Cuy 2', category: 'category1', image: 'https://landingpage-idincode-larareacts-projects.vercel.app/img/projek2-idin.jpg' },
    { id: 3, title: 'Idin Code Cuy 3', category: 'category1', image: 'https://landingpage-idincode-larareacts-projects.vercel.app/img/projek3-idin.jpg' },
    
    { id: 4, title: 'Idin Code Cuy 4', category: 'category2', image: 'https://landingpage-idincode-larareacts-projects.vercel.app/img/projek4-idin.jpg' },
    
    { id: 5, title: 'Idin Code Cuy 5', category: 'category2', image: 'https://landingpage-idincode-larareacts-projects.vercel.app/img/projek5-idin.jpg' },
    { id: 6, title: 'Idin Code Cuy 6', category: 'category2', image: 'https://landingpage-idincode-larareacts-projects.vercel.app/img/projek6-idin.jpg' },
    // Add more projects with different categories and images as needed
  ]);

  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Container>
        <div className="projek" id="projects">
        <h1 className="text-primary fw-bold">Projek Kami</h1>
        <Row>
          <Col>
            <div className="categories">
              <button onClick={() => handleCategoryChange('all')}>All Categories</button>
              <button onClick={() => handleCategoryChange('category1')}>Projects 1</button>
              <button onClick={() => handleCategoryChange('category2')}>Projects 2</button>
              {/* Add more buttons for additional categories */}
            </div>
          </Col>
        </Row>
        <Row>
          {projects.map((project) => {
            if (activeCategory === 'all' || project.category === activeCategory) {
              return (
                <Col key={project.id} xs={12} md={4}>
                  <div className="project-item">
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                  </div>
                </Col>
              );
            }
            return null;
          })}
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
