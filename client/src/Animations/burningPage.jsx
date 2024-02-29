import "./burningPage.css"

const BurningPage = () => {
  return (
    <div className=".burnPageContent w-[80%] h-[80%] lg:w-[50%] ">
      <div className="background-highlight"></div>
      <div className="burn_page rounded-[5%]">
        <div className="highlight"></div>
        <div className="text">
          <h1 className="font-bold flex items-center justify-center sm:text-[4vw] lg:text-[2.5vw]">Welcome to Our College Fest</h1>
          <p className="font-semibold sm:text-[3vw] lg:text-[2vw]">
            <p>Get ready for an exciting blend of culture and technology!</p>
            <p>
              🎉 Join us for a celebration of creativity, innovation, and fun!
              🚀
            </p>
            <p>
              Explore thrilling cultural performances, engaging tech talks, and
              mind-blowing projects.
            </p>
            <p>
              Stay tuned as we ignite the flame of knowledge and entertainment!
            </p>
          </p>
        </div>
        <div className="burn">
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
        </div>
      </div>
    </div>
  );
};

export default BurningPage;
