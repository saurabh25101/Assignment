 export default function CustomButton({
  children,
  variant = "red",
  className = "",
  ...props
}) {
  const variants = {
    red: "bg-[#A11D28] text-white hover:bg-[#86151d]",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    white: "bg-white text-black hover:bg-[#86151d]",
     whiteRed: "bg-white text-red-600 hover:bg-[#86151d] hover:text-white",
  };

  return (
    <button
      className={`login-btn ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}