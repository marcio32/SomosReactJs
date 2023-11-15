import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useHistory, Link, NavLink } from 'react-router-dom';
import { types } from '../../types/types';

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login');

    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="navbar navbar-expand.ms navbar-dark bn-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            to="/marvel"
          >
            Marvel
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{name}</span>

          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Cerrar Sesion
          </button>
        </ul>
      </div>
    </nav>
  );
};
