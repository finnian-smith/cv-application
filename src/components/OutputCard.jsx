import PropTypes from "prop-types";
import "../styles/OutputCard.css";

const OutputCard = ({ title, data }) => {
  const renderPersonalDetails = () => (
    <div className="personal-details-section">
      <h1>{data.fullName || "Your Name"}</h1>
      <div className="personal-details-content">
        <p>{data.email || "email@example.com"}</p>
        <p>{data.phoneNumber || "(216)-245-2368"}</p>
        <p>{data.address || "P. Sherman, 42 Wallaby Way, Sydney"}</p>
      </div>
    </div>
  );

  const renderExperience = (entry) => (
    <>
      <div className="headline-content">
        <div className="institution-information">
          <p className="bold-font">{entry.company || "Acme Corporation"}</p>
          <p>{entry.title || "Software Engineer"}</p>
        </div>
        <div className="date-information">
          <p className="bold-font">
            {entry.startDate || "Jan 2022"} - {entry.endDate || "Present"}
          </p>
          <p>{entry.location || "California, United States"}</p>
        </div>
      </div>
      <div className="item-description">
        <ul>
          {(entry.description || "Job description goes here.")
            .split("\n")
            .map((line, index) => (
              <li key={index}>{line}</li>
            ))}
        </ul>
      </div>
    </>
  );

  const renderEducation = (entry) => (
    <>
      <div className="headline-content">
        <div className="institution-information">
          <p className="bold-font">{entry.university || "Faber College"}</p>
          <p>{entry.degree || "BSc Computer Science"}</p>
        </div>
        <div className="date-information">
          <p className="bold-font">
            {entry.startDate || "Sep 2017"} - {entry.endDate || "Jul 2021"}
          </p>
        </div>
      </div>
    </>
  );

  const renderDefault = () => (
    <div className="card-content">
      {Object.entries(data).map(([key, value]) => (
        <p key={key}>{value}</p>
      ))}
    </div>
  );

  return (
    <div
      className={`output-card ${
        title === "Personal Details" ? "personal-details-card" : "default-card"
      }`}
    >
      {title === "Personal Details" && renderPersonalDetails()}

      {title === "Experience" && (
        <>
          <h2 className="title-section">Experience</h2>
          {data && data.length > 0 ? (
            data.map((entry, index) => (
              <div key={index} className="grid-item">
                {renderExperience(entry)}
              </div>
            ))
          ) : (
            <div className="grid-item">{renderExperience({})}</div>
          )}
        </>
      )}

      {title === "Education" && (
        <>
          <h2 className="title-section">Education</h2>
          {data && data.length > 0 ? (
            data.map((entry, index) => (
              <div key={index} className="grid-item">
                {renderEducation(entry)}
              </div>
            ))
          ) : (
            <div className="grid-item">{renderEducation({})}</div>
          )}
        </>
      )}

      {title !== "Personal Details" &&
        title !== "Experience" &&
        title !== "Education" &&
        renderDefault()}
    </div>
  );
};

OutputCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default OutputCard;
