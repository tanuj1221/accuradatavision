import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  image?: string;
  year?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from API
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">Our Work</span>
          <h2 className="projects-title">
            Projects We've <span>Successfully Completed</span>
          </h2>
          <p className="projects-subtitle">
            From metro stations to highway corridors, we've delivered accurate traffic data solutions across diverse projects worldwide.
          </p>
        </div>

        {loading ? (
          <div className="projects-loading">
            <p>Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="projects-empty">
            <p>Project portfolio coming soon. Check back later to see our completed work.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-badge">
                  <span className="project-type">{project.type}</span>
                  {project.year && <span className="project-year">{project.year}</span>}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="project-location">📍 {project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="projects-cta">
          <p className="projects-cta-text">
            Have a project in mind? Let's discuss how we can help you achieve accurate traffic data insights.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

