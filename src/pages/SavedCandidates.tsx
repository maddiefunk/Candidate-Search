import { useState, useEffect } from 'react';
import SavedCandidateList from '../components/SavedCandidateList';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Fetching saved candidates from localStorage
  useEffect(() => {
    const parsedSavedCandidates = localStorage.getItem('savedCandidate');
    if (parsedSavedCandidates) {
      try {
        const candidates = JSON.parse(parsedSavedCandidates);
        if (Array.isArray(candidates)) {
          setSavedCandidates(candidates);
        } else {
          console.warn('Invalid saved candidates data');
        }
      } catch (error) {
        console.error('Failed to parse saved candidates', error);
      }
    }
  }, []);

  // Update saved candidates to localStorage when it changes
  useEffect(() => {
    if (savedCandidates.length > 0) {
      localStorage.setItem('savedCandidate', JSON.stringify(savedCandidates));
    }
  }, [savedCandidates]);

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <h2>No candidates saved yet. Add some candidates!</h2>
      ) : (
        <SavedCandidateList savedCandidates={savedCandidates} />
      )}
    </>
  );
};

export default SavedCandidates;
