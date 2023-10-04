import Card from '../UI/Card/Card';
import classes from './Home.module.css';

type HomePropsType = {
  onLogout: () => void;
};

const Home = ({ onLogout }: HomePropsType) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
