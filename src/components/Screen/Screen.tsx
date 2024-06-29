interface ScreenProps {
  rows: string[];
  showProgress: boolean;
}

const Screen: React.FC<ScreenProps> = ({ rows, showProgress }) => (
  <div className="screen">
    <p>{rows[0]}</p>
    <p>{rows[1]}</p>
    {showProgress ? (
      <div className="progress-bar-container">
        <div className={`progress-bar ${showProgress ? "fill" : ""}`}></div>
      </div>
    ) : (
      <p>{rows[2]}</p>
    )}
  </div>
);

export default Screen;
