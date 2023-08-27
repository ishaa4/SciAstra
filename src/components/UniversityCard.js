import React from 'react';
import PropTypes from 'prop-types';
import '../css/UniversityCard.css';

export const UniversityCard = ({ universityName }) => {
    return (
            <div className="card-body p-3 text-center university-card">
                <h5 className="card-title" style={{ fontSize: '1.25rem'}}>{universityName}</h5>
            </div>
    );
};

UniversityCard.propTypes = {
    universityName: PropTypes.string.isRequired,
};

export default UniversityCard;
