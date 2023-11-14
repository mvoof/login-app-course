import Navigation from './Navigation';
import classes from './MainHeader.module.css';

type MainHeaderPropsType = {
  onLogout: () => void;
};

const MainHeader = ({ onLogout }: MainHeaderPropsType) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>

      <Navigation onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
