import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
  addToSavedCandidateList?: () => void; // optional if not always passed
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, addToSavedCandidateList }) => {
  if (!candidate || !candidate.login) {
    return <p>No candidate selected. Search for a GitHub user.</p>;
  }

  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} width="100" />
      <h2>{candidate.name || 'No Name Provided'}</h2>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location || 'Not Available'}</p>
      <p><strong>Email:</strong> {candidate.email || 'Not Available'}</p>
      <p>
        <strong>GitHub Profile:</strong>{' '}
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          {candidate.html_url}
        </a>
      </p>
      {addToSavedCandidateList && (
        <button onClick={addToSavedCandidateList}>Save Candidate</button>
      )}
    </div>
  );
};

export default CandidateCard;
