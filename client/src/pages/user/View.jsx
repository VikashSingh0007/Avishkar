import React from "react";
const data = {
  name: "NAME",
  username: "USERNAME",
  email: "EMAIL@NCNNC.COM",
  resumeLink: "HTTP://XNSBCNBCNX.COM",
  mobileNo: "735764765",
  gender: "MALE",
  collegeName: "MNNIT",
};
const View = () => {
  return (
    <>
      <div
        className="h-screen overflow-y-scroll mb-10 "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
          backgroundAttachment: "fixed",
        }}
      >
        <section
          className="text-gray-400 h-[100vh]  body-font"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex justify-center -m-4">
              <div className="p-4 border rounded-2xl w-[70vw] border-black border-2 p-4 bg-gray-100 text-gray-800 ">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-[10em] h-[15em] object-cover object-center sm:mb-0 mb-4"
                    src="https://dummyimage.com/200x200"
                  />
                  <div className="flex-grow  sm:pl-8">
                    <h2 className="title-font font-medium p-4 text-2xl ">
                      Name : {data.name}
                    </h2>
                    <h3 className="text-gray-500 p-4 text-2xl mb-3">
                      Username : {data.username}
                    </h3>

                    <h2 className="title-font p-4 font-medium text-2xl ">
                      Email : {data.email}
                    </h2>
                    <h2 className="title-font p-4 font-medium text-2xl ">
                      M. NO. : {data.mobileNo}
                    </h2>
                    <h2 className="title-font p-4 font-medium text-2xl ">
                      Gender : {data.gender}
                    </h2>
                    <h2 className="title-font p-4 font-medium text-2xl ">
                      College : {data.collegeName}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default View;
