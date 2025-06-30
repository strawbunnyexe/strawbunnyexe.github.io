import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="pixel-frame">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you&#39;re looking for has vanished into thin air!</p>
        <Link to="/" className="notfound-home-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;

