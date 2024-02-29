import "./glowText.css";
import { Link } from "react-router-dom";
const glowText = () => {
  return (
    <div>
      <Link to="/avishkar-landing">
        <button className="glowbtn">
          <span className="glowtext">Avishkar</span>
        </button>
      </Link>
    </div>
  );
};

export default glowText;
