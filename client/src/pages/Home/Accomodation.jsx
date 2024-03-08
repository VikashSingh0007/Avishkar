import "./Nav.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Accomodation.css";

const data = [
  {
    plan: "Plan A - Technical Fest Experience",
    days: "(3 Days)",
    date: "Date : March 16th to March 18th",
    fee: "Fee : 1500/-",
    description:
      "Indulge in the world of technology and innovation as you witness groundbreaking inventions and projects. Dive deep into the realm of science, engineering, and technology, and experience the thrill of the future unfolding before your eyes.",
  },
  {
    plan: "Plan2 - Cultural Fest Experience",
    days: "(4 Days)",
    date: "Date : March 19th to March 22th",
    fee: "Fee : 1600/-",
    description:
      "Experience the essence of culture and tradition with our four-day cultural fest. Immerse yourself in mesmerizing performances and colorful exhibitions, that showcase the rich diversity of our heritage. Get ready to dance, sing, and celebrate with us!",
  },
  {
    plan: "Plan3 - Combined Fest Experience",
    days: "(7 Days)",
    date: "Date : March 16th to March 22nd",
    fee: "Fee :1800/-",
    description:
      "Enjoy the best of both worlds with our combined fest experience. Spend seven unforgettable days exploring the wonders of technology and culture. From cutting-edge innovations to traditional performances, this package offers a comprehensive journey through the heart of our fest.",
  },
];

const Accommodation = () => {
  return (
    <div className="h-screen overflow-y-scroll mb-10 containerAccomodation">
      <Navbar page="Accomodation" />
      <Navbar page="Accommodation" />
      <section className="text-gray-600 body-font mt-0 ">
        <div className="px-0 md:px-5 py-24 w-full p-5 mx-auto ">
          <div className="text-center mb-20 p-5">
            {/* <h1 className="sm:text-6xl text-8xl font-medium title-font text-gray-900 text-center mb-4 rumoura-font"> */}
            <h1
              className="flex justify-center tracking-widest text-white text-justify text-[2rem] sm:text-[3rem] py-4 text-4xl font-semibold rumoura-font "
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                textShadow: "0 0 15px black", // Add white shadow with 10px blur
              }}
            >
              Welcome to Our College Fest Accommodation Experience!
            </h1>
            <h6
              className="text-2xl leading-relaxed w-full lg:w-3/4 mx-auto text-white croissant-one-regular mt-2 text-[1rem] sm:text-[1.5rem] croissant-one-regular"
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                textShadow: "0 0 10px black", // Add white shadow with 10px blur
              }}
            >
              Are you ready to immerse yourself in the vibrant atmosphere of our
              college fest? Get ready for an unforgettable experience filled
              with innovation, creativity, and cultural richness. We offer three
              exciting accommodation plans tailored to suit your preferences and
              interests.
            </h6>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg- inline-flex" />
            </div>
          </div>

          <div
            className="flex flex-wrap gap-5 justify-center items-center p-5 w-[80%] mx-auto"
            style={{ boxShadow: "0px 5px 10px black" }}
          >
            {data.map((data, index) => (
              <div
                key={index}
                className="p-4 md:w-1/2 lg:w-1/3 text-white flex flex-col text-center items-center bg-[#63462DE6] "
                style={{ boxShadow: "0px 10px 10px black", height: "500px" }} // Set a fixed height
              >
                <div
                  key={index}
                  className="flex-grow overflow-y-scroll" // Use overflow-hidden
                  style={{ textShadow: "0px 0px 15px black" }}
                >
                  <h6
                    className="text-[2rem] sm:text-[1.5rem] title-font font-medium mb-3 croissant-one-regular"
                    style={{ textShadow: "0px 10px 15px black" }}
                  >
                    {data.plan}
                  </h6>
                  <h6 className="text-xl title-font font-medium mb-3 croissant-one-regular">
                    {data.days}
                  </h6>
                  <h6 className="leading-relaxed text-lg croissant-one-regular">
                    {data.date}
                  </h6>
                  <h6 className="leading-relaxed text-lg croissant-one-regular">
                    {data.date}
                  </h6>
                  <h6 className="leading-relaxed text-lg text-justify croissant-one-regular">
                    {data.description}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 ml-2">
            <h6
              className="text-[2rem] sm:text-[3rem] tracking-wider text-white font-bold flex mt-[10%] rumoura-font"
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                textShadow: "0 0 10px black", // Add white shadow with 10px blur
              }}
            >
              Registration Process:
            </h6>
            <ul
              className="list-disc text-[1rem] sm:text-[1.2rem] text-white croissant-one-regular"
              style={{
                fontWeight: "bolder",
                textShadow: "0 0 10px black", // Add white shadow with 10px blu
                lineHeight: "1.5", // Increase line height for better spacing
              }}
            >
              <li className="mb-3">
                &#8226; Go to Registration Page: Visit our registration page on
                our website.
              </li>
              <li className="mb-3">
                &#8226; Select College - Other: Choose the option "Other" and
                specify your college name.
              </li>
              <li className="mb-3">
                &#8226; Pay Your Fee: Select your preferred accommodation plan
                and proceed to payment.
              </li>
              <li className="mb-3">
                &#8226; Update Your Transaction ID: After completing the
                payment, update your transaction ID on the registration page.
              </li>
              <li className="mb-3">
                &#8226; Confirmation: Sit back and relax! Within an hour, you
                will receive a confirmation email with all the details of your
                accommodation.
              </li>
            </ul>
          </div>

          <button
            className="flex mx-auto mt-8 bg-[#63462DE6] hover:bg-[#3c2b1de6] text-white text-[1rem] sm:text-[1.4rem] font-bold py-2 px-6 rounded-full"
            style={{
              boxShadow: "0 0 20px black", // Add white shadow with 10px blur
            }}
          >
            <Link to="/signup" className="text-white">
              Book
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Accommodation;
