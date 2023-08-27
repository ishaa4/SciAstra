import React from 'react';
import MentorCard from '../components/MentorCard';
import MentorAndAdvisorCard from '../components/MentorAndAdvisorCard';
import UniversityCard from '../components/UniversityCard';
import '../css/TeamPage.css';

const universities = [
  'Cambridge University',
  'Harvard University',
  'Stanford University',
  'MIT',
  'Oxford University',
  'ETH Zurich',
  'Caltech',
  'Princeton University',
  'Yale University',
  'University of Chicago',
];

const mentors = [
  {
    name: 'John Doe',
    university: 'Cambridge University',
  },
  {
    name: 'Jane Smith',
    university: 'Harvard University',
  },
  {
    name: 'Michael Johnson',
    university: 'Stanford University',
  },
  {
    name: 'Emily Lee',
    university: 'MIT',
  },
  // Add more mentors
];


export const TeamPage = () => {
    return (
      <div className='team-page-container'>
        <h1>Team Page</h1>
        <p>Learn from Scientists, research scholars from the top institutes in the world.</p>
        <div className='card-grid'>
          {universities.map((university, index) => (
            <div className='card university-card' key={index}>
              <UniversityCard universityName={university} />
            </div>
          ))}
        </div>
        <h1>Meet your mentors</h1>
        <div className='card-grid mentor-grid'>
          {mentors.map((mentor, index) => (
            <div className='card mentor-card' key={index}>
              <MentorCard mentorName={mentor.name} mentorUniversity={mentor.university} />
            </div>
          ))}
        </div>
        <h3>Mentor and Advisor</h3>
        <div className='card-grid mentor-grid'>
          {mentors.map((mentor, index) => (
            <div className='card mentor-card' key={index}>
              <MentorAndAdvisorCard mentorName={mentor.name} mentorUniversity={mentor.university} />
            </div>
          ))}
        </div>

      </div>
    );
  };