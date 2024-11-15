import { useEffect, useState } from 'react';

interface Candidate {
  name: string;
  username: string;
  location: string;
  email: string;
  company: string;
  bio: string;
  image_url: string;
}

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('candidates') || '[]');
    setCandidates(saved);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
    </>
  );
};

export default SavedCandidates;
