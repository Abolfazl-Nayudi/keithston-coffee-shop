const Button = ({ text, className }: { text: string; className?: string }) => {
  return <button className={`btn ${className}`}>{text}</button>;
};

export default Button;
