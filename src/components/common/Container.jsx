const Container = ({ children, className = "" }) => {
  return (
    <div className={`sira-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;