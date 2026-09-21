import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  to,
  variant = "primary",
  icon = true,
  className = "",
}) => {
  const variants = {
    primary: "sira-btn-primary",
    gold: "sira-btn-gold",
    outline: "sira-btn-outline",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${variants[variant]} ${className}`}
      >
        {children}

        {icon && <ArrowRight size={17} />}
      </Link>
    );
  }

  return (
    <button
      className={`${variants[variant]} ${className}`}
    >
      {children}

      {icon && <ArrowRight size={17} />}
    </button>
  );
};

export default Button;