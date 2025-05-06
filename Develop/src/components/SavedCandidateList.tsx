import React from 'react';
import type { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface SavedCandidatesProps {
  savedCandidates: Candidate[];
}

const SavedCandidateList: React.FC<SavedCandidatesProps> = ({ savedCandidates }) => {
  if (savedCandidates.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '2rem', color: '#ccc' }}>No saved candidates yet.</p>;
  }

  return (
    <div className="saved-candidate-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem auto', maxWidth: '800px' }}>
      {savedCandidates.map((candidate) => (
        <CandidateCard key={candidate.login} candidate={candidate} />

      ))}
    </div>
  );
};

export default SavedCandidateList;
