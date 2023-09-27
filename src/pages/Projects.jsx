import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Import the ProjectCard component
import weatherpic from '../assets/weatherapp.png'
import fakebookrpic from '../assets/fakebook.png'
import bytebookpic from '../assets/bytebook.png'
import notepadpic from '../assets/notepad.png'
import employeepic from '../assets/employeemanagement.png'


function Projects() {
  // Define an array of project data
  const projects = [
    {
      title: 'Weather App',
      screenshotSrc: weatherpic,
      githubLink: 'https://github.com/keith-mikel/weather-app',
      techUsed: ['JavaScript', 'Node.js', 'Local Storage'],
      appLink: 'Local Only'
    },
    {
      title: 'FakeBook',
      screenshotSrc: fakebookrpic,
      githubLink: 'https://github.com/keith-mikel/fakebook',
      techUsed: ['JavaScript', 'Sentiment Analysis', 'MySQL'],
      appLink: 'https://lit-lake-04791-83df15b980e5.herokuapp.com/'
    },
    {
      title: 'ByteBook',
      screenshotSrc: bytebookpic,
      githubLink: 'https://github.com/keith-mikel/ByteBook',
      techUsed: ['JavaScript', 'MongoDB', 'ExpressJS'],
      appLink: 'API Only'
    },
    {
      title: 'Tech Blog',
      screenshotSrc: bytebookpic,
      githubLink: 'https://github.com/keith-mikel/tech-blog',
      techUsed: ['JavaScript', 'MySql', 'ExpressJS'],
      appLink: 'API Only'
    },
    {
      title: 'Note Pad',
      screenshotSrc: notepadpic,
      githubLink: 'https://github.com/keith-mikel/notepad',
      techUsed: ['JavaScript', 'API', 'ExpressJS'],
      appLink: 'https://fierce-savannah-65410-f993d5138daf.herokuapp.com/'
    },
    {
      title: 'Employee Management',
      screenshotSrc: employeepic,
      githubLink: 'https://github.com/keith-mikel/employee-management',
      techUsed: ['JavaScript', 'CLI', 'ExpressJS'],
      appLink: 'CLI Only'
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectCard
              title={project.title}
              screenshotSrc={project.screenshotSrc}
              githubLink={project.githubLink}
              techUsed={project.techUsed}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

