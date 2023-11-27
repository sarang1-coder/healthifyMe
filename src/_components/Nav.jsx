import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '_state';
import { useUserActions } from '_actions';
import "../assets/styles/navbar.css";

function Nav() {
    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();

    // only show nav when logged in
    if (!auth) return null;
    
    return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink exact to="/" className="nav-item nav-link">
          Home
        </NavLink>
        <NavLink to="/exe" className="nav-item nav-link">
          Exercise
        </NavLink>
        <NavLink to="/diethelp" className="nav-item nav-link">
          Diet Help
        </NavLink>
        <div className="logout-btn">
        <a onClick={userActions.logout} className="nav-item nav-link">
          Logout
        </a>
        </div>
      </div>
    </nav>
    );
}

export { Nav };