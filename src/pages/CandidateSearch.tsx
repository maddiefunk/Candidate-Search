import { FormEvent, useState } from 'react';
import { searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    login: '',
    location: '',
    email: null,
    avatar_url: '',
    html_url: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');

  const addToSavedCandidates = () => {
    let parsedSavedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('savedCandidates');

    if (storedCandidates) {
      parsedSavedCandidates = JSON.parse(storedCandidates);
    }

    parsedSavedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedSavedCandidates));
  };

  const searchForCandidates = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data: Candidate = await searchGithubUser(searchInput);
      setCurrentCandidate(data);
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  };

  return (
    <>
      <h1>Candidate Search</h1>
      <section>
        <form onSubmit={searchForCandidates}>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" id="searchBtn" disabled={!searchInput}>
            Search
          </button>
        </form>
      </section>
      <CandidateCard
        candidate={currentCandidate}
        addToSavedCandidateList={addToSavedCandidates}
      />
    </>
  );
};

export default CandidateSearch;