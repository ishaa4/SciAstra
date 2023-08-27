import React from 'react';
import profileIcon from '../images/profile-icon.png';
import PropTypes from 'prop-types';
import '../css/MentorProfile.css';

export const MentorAndAdvisorCard = ({ mentorName, mentorUniversity }) => {
    return (
        <div className="mentor-profile-container mentor-card">
            <div className="profile-icon">
                <img src={profileIcon} alt="Profile Icon" />
            </div>
            <h2 className="mentor-name">{mentorName}</h2>
            <p className="mentor-university">{mentorUniversity}</p>
            <button className="message-button">Message Him Now
            <span class="message-icon">✉</span>
            </button>
        </div>
    );
};

MentorAndAdvisorCard.propTypes = {
    mentorName: PropTypes.string.isRequired,
    mentorUniversity: PropTypes.string.isRequired,
};

export default MentorAndAdvisorCard;