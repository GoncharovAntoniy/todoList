import s from "./Button.module.css";

const Button = (props) => {
  const { onClick, title, children, disabled = false } = props;
  return (
    <button
      {...props}
      className={s.button}
      onClick={onClick}
      title={title}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
