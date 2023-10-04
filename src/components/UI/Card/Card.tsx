import classes from './Card.module.css';

type CardPropsType = {
  className: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: CardPropsType) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
