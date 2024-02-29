import "./pendulum_clock.css";

const Pendulum_Clock = () => {
  return (
    <div>
      <div id="main-clock" className="opacity-0.5">
        <div id="dial-wrap" className="w-1/2 h-1/2">
          <div id="dial">
            <span className="dial-num-12">12</span>
            <span className="dial-num-1">1</span>
            <span className="dial-num-2">2</span>
            <span className="dial-num-3">3</span>
            <span className="dial-num-4">4</span>
            <span className="dial-num-5">5</span>
            <span className="dial-num-6">6</span>
            <span className="dial-num-7">7</span>
            <span className="dial-num-8">8</span>
            <span className="dial-num-9">9</span>
            <span className="dial-num-10">10</span>
            <span className="dial-num-11">11</span>
          </div>
          <div id="hour-hand"></div>
          <div id="minute-hand"></div>
          <div id="second-hand"></div>
        </div>
        <div id="pendulum"></div>
      </div>
    </div>
  );
};

export default Pendulum_Clock;
