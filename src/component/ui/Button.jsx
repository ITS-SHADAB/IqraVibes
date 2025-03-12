const Button = ({ children, onClick, className, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 rounded-md transition-all duration-300 font-medium";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
    ghost: "text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
