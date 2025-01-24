interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {

  return (
    <button
      className={"px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-purple-500 text-white hover:bg-purple-600 disabled:bg-purple-300 cursor-pointer disabled:cursor-not-allowed"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;