import React, { useEffect, useContext, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faFilm, faUserCircle, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Utilities/Auth/Auth';
import './Client.css';

function Client() {
    const { auth, clearAuthData } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const sidebar = document.querySelector('.sidebar');
        const coverSidebar = document.querySelector('.cover-sidebar');
        const buttons = document.querySelectorAll('#toggleButton, .Movies-user');

        header.classList.add('header-visible');
        footer.classList.add('footer-visible');

        const toggleSidebar = () => {
            const isVisible = sidebar.style.transform === "translateX(0%)";
            sidebar.style.transform = isVisible ? "translateX(100%)" : "translateX(0%)";
            coverSidebar.style.visibility = isVisible ? "hidden" : "visible";
        };

        buttons.forEach(button => button.addEventListener('click', toggleSidebar));

        return () => {
            buttons.forEach(button => button.removeEventListener('click', toggleSidebar));
        };
    }, []);

    const handleLogout = useCallback(() => {
        clearAuthData();
        navigate('/');
    }, [navigate, clearAuthData]);

    return (
        <main className="box">
            <header>
                <h1 className="title-text" onClick={() => navigate('/home')}>MovieWebDB</h1>
                <button className="button" id="toggleButton">
                    <div className="button-container">
                        <div className="divnav"></div>
                        <div className="divnav"></div>
                        <div className="divnav"></div>
                    </div>
                </button>
            </header>

            <article className="main-content">
                <Outlet />
            </article>

            <footer>
                <div className="text-rights">
                    <p className='size-font'>
                        &copy; 2024 MovieWebDB - All rights reserved.
                        Data provided by <a className='link-color' href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">(TMDb)</a>
                    </p>
                    <p className='size-font'>
                        Developed By Ignacio, Symon B. from BSIT - 3A
                    </p>
                </div>
                <div className="icons"></div>
            </footer>

            <div className='cover-sidebar'></div>
            <div className='sidebar'>
                <button className='close-sidebar' id="toggleButton">
                    <FontAwesomeIcon icon={faCaretRight} />
                </button>
                <div className='container-user-info'>
                    <div className='User-Info'>
                        <FontAwesomeIcon icon={faUserCircle} className='photo-user-img' />
                        <span className="user-info-data">
                            <h1 className="name-user">{auth.user.firstName}</h1>
                            <p className="role-user">Role as: <strong>{auth.user.role}</strong></p>
                        </span>
                    </div>
                </div>
                <hr className='space-from-name-nav' />
                <ul className='nav-user'>
                    <div className="Movies-user" onClick={() => navigate('/home')} id="toggleButton">
                        <div style={{ fontSize: '24px', color: 'white' }}>
                            <center>
                                <FontAwesomeIcon icon={faFilm} style={{ fontSize: '24px', color: 'white' }} />
                                <strong className='spacing-text'>Movies</strong>
                            </center>
                        </div>
                    </div>
                    <div className="logout-user">
                        <div onClick={handleLogout} style={{ fontSize: '24px', color: 'white' }}>
                            <center>
                                <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '24px', color: 'white' }} />
                                <strong className='spacing-text'>Logout</strong>
                            </center>
                        </div>
                    </div>
                </ul>
            </div>
        </main>
    );
}

export default Client;
