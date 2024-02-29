import "./new.css";
import Dialer from "./dialer";

const NewTelephone = ({ setStart, start, pauseAudio }) => {
  const handleclick = () => {
    // console.log("start", start);
    start == 0 ? setStart(1) : setStart(0);
    pauseAudio();
  };

  return (
    <div className="bg-slate-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex m-[50vh] justify-center" style={{ width: "60%" }}>
        <div className="telephone_container z-0  w-[20vw]">
          <div className="bgcircle"></div>
          <div className="">
            <div className="tele_bottom"></div>
            <div className="tele_sbottom">
              <div className="reflection"></div>
            </div>
            <div className="tele_main pr-10">
              <div className="tele_dial">
                <div className="absolute flex justify-center items-center z-10 bg-transparent h-[12em] w-[12em] md:h-[12em] md:w-[12em]   rounded-full bg-white">
                  <Dialer setStart={setStart} start={start} />
                </div>

                <div className="bholder"></div>
                <div className="holder">
                  <div className="hreflection"></div>
                </div>
                <div className="aholder"></div>
                <div className="noname"></div>
                <div className="tiny"></div>
                <div className="mholder">
                  <div className="mhreflection"></div>
                </div>
                <div className="sball1"></div>
                <div className="ball1">
                  <div className="breflection"></div>
                </div>
                <div className="sball2"></div>
                <div className="ball2">
                  <div className="breflection"></div>
                </div>
                <div className="smallline"></div>
                <div className="sball3"></div>
                <div className="smball1">
                  <div className="sbreflection"></div>
                </div>
                <div className="smallline2"></div>
                <div className="sball4"></div>
                <div className="smball2">
                  <div className="sbreflection2"></div>
                </div>
                <div
                  className="flex mtelephone vibrating-div justify-center"
                  onClick={() => handleclick()}
                  style={{ cursor: "pointer" }}
                >
                  pick me
                </div>
                <div className="mtiny"></div>
                <div className="mtiny1"></div>
                <div className="mmedium">
                  <div className="mereflection"></div>
                </div>
                <div className="mmedium1">
                  <div className="mereflection1"></div>
                </div>
                <div className="red1">
                  <div className="redreflection"></div>
                  <div className="redline"></div>
                </div>
                <div className="red2">
                  <div className="redreflection1"></div>
                </div>
                <div className="receiver">
                  <div className="rmmedium1"></div>
                  <div className="rline">
                    <div className="rmereflection1"></div>
                  </div>
                  <div className="connector"></div>
                  <div className="circleborder">
                    <div className="backcircle"></div>
                    <div className="maincircle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTelephone;
