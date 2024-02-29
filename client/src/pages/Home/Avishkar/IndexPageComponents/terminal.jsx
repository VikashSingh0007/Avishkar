// terminalCardComponent.js
import "./terminal.css";

const Terminal = () => {
  var comment = "Welcome to Avishkar";
  var head =
    '"Avishkar, a 3-day-long annual Techno-Management Fest of MNNIT Allahabad is an array of mind boggling events, the festival aims to nurture the budding talents of the nation. It provides a platform to the young engineers and managers to hone their techno-managerial skills on a much-branded-canvas."';
  return (
    <div id="terminalCard" className="terminalCard top-0 relative">
      <div className="content">
        <div className="card-body">
          <div className="code-container h-full float-animation">
            <span className="terminalLine">
              <span className="code-comment">{comment}</span>
            </span>
            <span className="terminalLine">
              <span className="code-keyword">function</span>{" "}
              <span className="code-function">AvishkarEvents</span>()
            </span>
            <span className="terminalLine">{"{"}</span>
            <span className="terminalLine indent">
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">Avishkar</span> ={" "}
              <span className="code-string">{head}</span>;
            </span>

            <span className="terminalLine indent">
              <span className="code-built-in">console</span>.
              <span className="code-method">log</span>(
              <span className="code-variable">See you there!! 😃</span>);
            </span>
            <span className="terminalLine indent">
              <span className="code-built-in">console</span>.
              <span className="code-method">log</span>(
              <span className="code-variable">
                Press start button 🔴 of computer for Events.
              </span>
              );
            </span>
            <span className="terminalLine">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
