import "./Nav.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Accomodation = () => {
  return (
    <div
      className="h-screen overflow-y-scroll mb-10 containerAcco"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <Navbar page="Accomodation" />
      <section className="text-gray-600 body-font mt-0 ">
        <div className="container px-0 md:px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            {/* <h1 className="sm:text-6xl text-8xl font-medium title-font text-gray-900 text-center mb-4 rumoura-font"> */}
            <h1 className="w-full text-4xl font-bold mb-10 mt-5 pt-2 text-center text-gray-900 font-serif rumoura-font">
              Welcome to Our College Fest Accommodation Experience!
            </h1>
            <h6 className="text-2xl leading-relaxed w-full lg:w-3/4 mx-auto text-gray-500s text-black croissant-one-regular">
              Are you ready to immerse yourself in the vibrant atmosphere of our
              college fest? Get ready for an unforgettable experience filled
              with innovation, creativity, and cultural richness. We offer three
              exciting accommodation plans tailored to suit your preferences and
              interests.
            </h6>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3 croissant-one-regular">
                  Plan A - Technical Fest Experience
                </h2>
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3 croissant-one-regular">
                  (3 Days)
                </h2>
                <h6 className="leading-relaxed text-black text-lg croissant-one-regular">
                  Date : March 16th to March 18th
                </h6>
                <h6 className="leading-relaxed text-black text-lg croissant-one-regular">
                  Fee : 1500/-
                </h6>
                <h6 className="leading-relaxed text-black text-lg text-justify croissant-one-regular">
                  Indulge in the world of technology and innovation as you
                  witness groundbreaking inventions and projects. Dive deep into
                  the realm of science, engineering, and technology, and
                  experience the thrill of the future unfolding before your
                  eyes.
                </h6>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h6 className="text-gray-900 text-xl title-font font-medium mb-3 croissant-one-regular">
                  Plan2 - Cultural Fest Experience
                </h6>
                <h6 className="text-gray-900 text-xl title-font font-medium mb-3 croissant-one-regular">
                  (4 Days)
                </h6>
                <h6 className="leading-relaxed text-black text-lg croissant-one-regular">
                  Date : March 19th to March 22th
                </h6>
                <h6 className="leading-relaxed text-black text-lg croissant-one-regular">
                  Fee : 1600/-
                </h6>
                <h6 className="leading-relaxed text-black text-lg text-justify croissant-one-regular">
                  Experience the essence of culture and tradition with our
                  four-day cultural fest. Immerse yourself in mesmerizing
                  performances and colorful exhibitions, that showcase the rich
                  diversity of our heritage. Get ready to dance, sing, and
                  celebrate with us!
                </h6>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3 croissant-one-regular">
                  Plan3 - Combined Fest Experience
                </h2>
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3 croissant-one-regular">
                  (7 Days)
                </h2>
                <h6 className="leading-relaxed text-black text-lg croissant-one-regular">
                  Date : March 16th to March 22nd
                </h6>
                <h6 className="leading-relaxed text-black text-lg croissant-one-regular">
                  Fee :1800/-
                </h6>
                <h6 className="leading-relaxed text-black text-lg text-justify croissant-one-regular">
                  Enjoy the best of both worlds with our combined fest
                  experience. Spend seven unforgettable days exploring the
                  wonders of technology and culture. From cutting-edge
                  innovations to traditional performances, this package offers a
                  comprehensive journey through the heart of our fest.
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h6 className="mb-2 rumoura-font text-black">
              Registration Process:
            </h6>
            <ul className="list-disc ml-6  text-black  croissant-one-regular">
              <li>
                Go to Registration Page: Visit our registration page on our
                website.
              </li>
              <li>
                Select College - Other: Choose the option "Other" and specify
                your college name.
              </li>
              <li>
                Pay Your Fee: Select your preferred accommodation plan and
                proceed to payment.
              </li>
              <li>
                Update Your Transaction ID: After completing the payment, update
                your transaction ID on the registration page.
              </li>
              <li>
                Confirmation: Sit back and relax! Within an hour, you will
                receive a confirmation email with all the details of your
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
