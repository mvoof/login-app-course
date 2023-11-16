import classes from './Input.module.css';

type InputPropsType = {
  type: 'email' | 'password';
  label: 'E-Mail' | 'Password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  isValid: boolean;
};

const Input = ({
  type,
  value,
  onChange,
  onBlur,
  isValid,
  label,
}: InputPropsType) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={type}>{label}</label>

      <input
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
