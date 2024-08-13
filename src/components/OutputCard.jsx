import PropTypes from "prop-types";
// import "../styles/OutputCard.css";

const OutputCard = ({ title, data }) => {
  const isDataArray = Array.isArray(data);

  return (
    <div className="output-card">
      <h2 className="card-title">{title}</h2>
      {isDataArray ? (
        data.length > 0 ? (
          data.map((entry, index) => (
            <div key={index} className="card-content">
              {Object.entries(entry).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )
      ) : (
        <div className="card-content">
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      )}
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
