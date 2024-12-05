import { useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../../Utilities/Auth/Auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faFilm, faUserCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

function Main() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { clearAuthData } = useContext(AuthContext);

  const handleLogout = useCallback(() => {
    clearAuthData();
    navigate('/');
  }, [navigate, clearAuthData]);

  useEffect(() => {
    if (!auth.accessToken) {
      handleLogout();
    }
  }, [auth.accessToken, handleLogout]);

  return (
    <div className="Main">
      <div className="custom-container">
        <div className="navigation text-light">
          <div className="admin-info">
            <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '50px', color: 'white' }} />
            <span className="user-info">
              <p className="role">{auth.user.role}</p>
              <h1 className="name">{auth.user.firstName}</h1>
            </span>
          </div>
          <ul className="nav">
            <li>
              <a href="/main/movies" className="nav-link" title="Movies">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faFilm} style={{ fontSize: '24px', color: 'white' }} />
                </div>
                <span>Movies</span>
              </a>
            </li>
            <li>
              <a href="/main/dashboard" className="nav-link" title="Dashboard">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faChartLine} style={{ fontSize: '24px', color: 'white' }} />
                </div>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="logout" title="Logout">
              <button onClick={handleLogout} className="nav-link">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '24px', color: 'white' }} />
                </div>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="outlet bg-custom text-light">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;