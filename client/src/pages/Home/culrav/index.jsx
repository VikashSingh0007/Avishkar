import { useState, useRef, useEffect } from "react";
import NewTelephone from "./Components/newTelephone";
import ringTone from "./Components/phoneRingtone.mp3";
import PopupModal from "./Components/popupmodal";
import Card from "../../../Animations/culravCard";
import drama from "./assets/drama.png";
import back_img from "../Avishkar/avishkar_background.png";
import { useNavigate } from "react-router-dom";

const Culrav = () => {
  const divStyle = {
    backgroundImage: `url(${back_img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [start, setStart] = useState(0);
  // const [playing, setPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(true); // Set modal to open initially
  const [pauseAudioOnReturn, setPauseAudioOnReturn] = useState(false);
  const audioRef = useRef(null);

  const navigate = useNavigate();

  const pauseAudio = () => {
    audioRef.current.pause();
    // setPlaying(false);
  };

  const playAudio = () => {
    // console.log("playing");
    audioRef.current.play();
  };

  const handleEnded = () => {
    audioRef.current.play();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = (event) => {
    navigate(`culrav-landing/${event[0].id}`);
  };

  const e1 = [{ id: 2, title: "Rangmanch", BgImg: drama }];
  const e2 = [{ id: 5, title: "Rangsaazi", BgImg: drama }];
  const e3 = [{ id: 4, title: "Litmuse", BgImg: drama }];
  const e4 = [{ id: 9, title: "Anunaad", BgImg: drama }];
  const e5 = [{ id: 9, title: "Anunaad", BgImg: drama }];
  const e6 = [{ id: 9, title: "Anunaad", BgImg: drama }];
  const e7 = [{ id: 9, title: "Anunaad", BgImg: drama }];

  useEffect(() => {
    const isAudioPlaying = !audioRef.current.paused;

    const handleResize = () => {
      if (window.innerWidth <= 767) {
        pauseAudio();
      } else if (isAudioPlaying) {
        playAudio();
      } else {
        playAudio();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    pauseAudio();
  }, []);

  return (
    <div>
      <div
        className="flex flex-col overflow-hidden md:hidden  "
        style={divStyle}
      >
        <div className="flex flex-wrap h-[80%]  justify-center items-center   overflow-hidden mt-5 pt-[7]">
          {" "}
          <div className="card-container">
            <div style={{ margin: "140px" }} onClick={() => handleClick(e1)}>
              <Card events={e1} />
            </div>
            <div style={{ margin: "140px" }} onClick={() => handleClick(e2)}>
              <Card events={e2} />
            </div>
            <div style={{ margin: "140px" }} onClick={() => handleClick(e3)}>
              <Card events={e3} />
            </div>
            <div style={{ margin: "140px" }} onClick={() => handleClick(e4)}>
              <Card events={e4} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex-col top-0 left-0 w-full h-full hidden md:flex "
        style={divStyle}
      >
        <div
          className="flex justify-center"
          style={{
            backgroundColor: "antiquewhite",
            transform: start === 0 ? "scale(1)" : "scale(1.8)",
            transition: "transform 0.9s, width 0.4s, height 0.4s",
          }}
        >
          {modalOpen && (
            <PopupModal closeModal={closeModal} playAudio={playAudio} />
          )}

          <audio ref={audioRef} onEnded={handleEnded} autoPlay>
            <source src={ringTone} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          <NewTelephone
            setStart={setStart}
            start={start}
            pauseAudio={pauseAudio}
          />
        </div>
      </div>
    </div>
  );
};

export default Culrav;
