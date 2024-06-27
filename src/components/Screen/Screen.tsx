const Screen = ({ rows, showProgress }) => {
  return (
    <div className="vending-machine-screen">
      <h2>{rows[0]}</h2>
      <h3>
      {rows[1]} <br /> 
      {rows[2]}
      </h3>
      {showProgress && (
        <div className="progress-bar-container">
          <div
            className={`progress-bar ${showProgress ? "fill" : ""}`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Screen;
