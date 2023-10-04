import classes from './Button.module.css';

type ButtonPropsType = {
  type: 'submit';
  className: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

const Button = ({
  type,
  className,
  onClick,
  disabled,
  children,
}: ButtonPropsType) => {
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
