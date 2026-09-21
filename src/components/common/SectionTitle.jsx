const SectionTitle = ({
  label,
  title,
  description,
  center = false,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <span className="sira-label">
          {label}
        </span>
      )}

      <h2 className="sira-title">
        {title}
      </h2>

      {description && (
        <p
          className={`sira-description ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;