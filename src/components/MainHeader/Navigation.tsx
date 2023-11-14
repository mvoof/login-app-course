import AuthContext from '../store/auth-context';
import classes from './Navigation.module.css';

type NavigationPropsType = {
  onLogout: () => void;
};

const Navigation = ({ onLogout }: NavigationPropsType) => {
  return (
    <AuthContext.Consumer>
      {({ isLoggedIn }) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}

              {isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}

              {isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
