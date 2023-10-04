import Navigation from './Navigation';
import classes from './MainHeader.module.css';

type MainHeaderPropsType = {
  isAuthenticated: boolean;
  onLogout: () => void;
};

const MainHeader = ({ isAuthenticated, onLogout }: MainHeaderPropsType) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
