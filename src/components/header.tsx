import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '@hooks';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, logout } = useAuth();
  const isLoginPage = location.pathname === '/';

  const logoutCb = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <header>
      <div>ContactList</div>
      {!isLoginPage && (
        <div>
          <p>{auth.username}</p>
          <img src={auth.avatar} alt={auth.username} loading="lazy" />
          <button type="button" onClick={logoutCb}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
