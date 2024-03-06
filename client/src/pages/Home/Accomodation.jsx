import "./Nav.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Accomodation = () => {
  return (
    <div
      className="h-screen overflow-y-scroll mb-10 "
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <section className="text-gray-600 body-font mt-0 ">
        <div className="container px-0 md:px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            {/* <h1 className="sm:text-6xl text-8xl font-medium title-font text-gray-900 text-center mb-4 rumoura-font"> */}
            <h1 className="w-full text-4xl font-bold mb-10 mt-5 pt-2 text-center text-gray-900 font-serif rumoura-font">
              Welcome to Our College Fest Accommodation Experience!
            </h1>
            <h6 className="text-2xl leading-relaxed w-full lg:w-3/4 mx-auto text-gray-500s text-black rumoura-font">
              Are you ready to immerse yourself in The vibrant atmosphere of our
              college fest? Get ready for an unforgettable experience filled
              with innovation, creativity, And cultural richness. We offer three
              exciting accommodation plans tailored to suit your preferences And
              interests.
            </h6>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3 rumoura-font">
                  Plan A - Technical Fest Experience (3 Days)
                </h2>
                <h6 className="leading-relaxed text-black text-lg rumoura-font">
                  Date : March 16th to March 18th
                </h6>
                <h6 className="leading-relaxed text-black text-lg rumoura-font">
                  Fee : To be announce
                </h6>
                <h6 className="leading-relaxed text-black text-lg rumoura-font">
                  Indulge in The world of technology And innovation as you
                  witness groundbreaking inventions And projects. Dive deep into
                  The realm of science, engineering, And technology, And
                  experience The thrill of The future unfolding before your
                  eyes.
                </h6>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h6 className="text-gray-900 text-xl title-font font-medium mb-3 rumoura-font">
                  Plan2 - Cultural Fest Experience (4 Days)
                </h6>
                <h6 className="leading-relaxed text-black text-lg rumoura-font">
                  Date : March 19th to March 22th
                </h6>
                <h6 className="leading-relaxed text-black text-lg rumoura-font">
                  Fee : To be announce
                </h6>
                <h6 className="leading-relaxed text-black text-lg rumoura-font">
                  Experience The essence of culture And tradition with our
                  four-day cultural fest. Immerse yourself in mesmerizing
                  performances, colorful exhibitions, And engaging workshops
                  that showcase The rich diversity of our heritage. Get ready to
                  dance, sing, And celebrate with us!
                </h6>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3 rumoura-font">
                  Plan3 - Combined Fest Experience (7 Days)
                </h2>
                <h6 className="leading-relaxed text-black text-l rumoura-font">
                  Date : March 16th to March 22nd
                </h6>
                <h6 className="leading-relaxed text-black text-l rumoura-font">
                  Fee : To be announce
                </h6>
                <h6 className="leading-relaxed text-black text-l rumoura-font">
                  Why choose when you can have it all? Enjoy The best of both
                  worlds with our combined fest experience. Spend seven
                  unforgettable days exploring The wonders of technology And
                  culture. From cutting-edge innovations to traditional
                  performances, this package offers a comprehensive journey
                  through The heart of our fest.
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h6 className="mb-2 rumoura-font text-black">
              Registration Process:
            </h6>
            <ul className="list-disc ml-6 rumoura-font text-black">
              <li>
                Go to Registration Page: Visit our registration page on our
                website.
              </li>
              <li>
                Select College - OTher: Choose The option "OTher" And specify
                your college name.
              </li>
              <li>
                Pay Your Fee: Select your preferred accommodation plan And
                proceed to payment.
              </li>
              <li>
                Update Your Transaction ID: After completing The payment, update
                your transaction ID on The registration page.
              </li>
              <li>
                Confirmation: Sit back And relax! Within an hour, you will
                receive a confirmation email with all The details of your
                accommodation.
              </li>
            </ul>
          </div>

          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link to="/signup" className="text-white">
              Book
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Accomodation;
