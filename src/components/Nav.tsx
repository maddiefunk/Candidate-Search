import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const linkStyle = (path: string) => ({
    color: location.pathname === path ? '#fff' : '#ccc',
    textDecoration: 'none',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
  });

  return (
    <nav style={{
      background: 'linear-gradient(to right, #000428, #004e92)',
      padding: '1rem 2rem',
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    }}>
      <Link to="/" style={linkStyle('/')}>Home</Link>
      <Link to="/SavedCandidates" style={linkStyle('/SavedCandidates')}>Saved Candidates</Link>
    </nav>
  );
};

export default Nav;
