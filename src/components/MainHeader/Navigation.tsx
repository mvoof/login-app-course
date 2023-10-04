import classes from './Navigation.module.css';

type NavigationPropsType = {
  isLoggedIn: boolean;
  onLogout: () => void;
};
const Navigation = ({ isLoggedIn, onLogout }: NavigationPropsType) => {
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
};

export default Navigation;
