import React, { useEffect } from "react";
import "./Sponsors.css"; // Replace with the actual CSS file path
import Navbar from "../../Navbar";
const Sponsors = () => {
  useEffect(() => {
    const gallery = document.querySelector("#gallery");
    const time = 10000;

    function animStart() {
      if (!gallery.classList.contains("active")) {
        gallery.classList.add("active");
        setTimeout(() => {
          animEnd();
        }, time);
      }
    }

    function animEnd() {
      gallery.classList.remove("active");
      gallery.offsetWidth;
    }

    document.addEventListener("scroll", function () {
      animStart();
    });

    window.addEventListener("resize", animStart);
    animStart();
  }, []);

  const sponsors_cat1 = [
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
  ];

  const sponsors_cat2 = [
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
  ];
  const sponsors_cat3 = [
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
  ];
  const sponsors_cat4 = [
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Silver Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
    {
      image:
        "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
      name: "Sponsor 1",
      role: "Gold Sponsor",
    },
  ];

  return (
    <>
      <main
        style={{
          background:
            "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        }}
      >
        <Navbar />
        <div
          // style={{ fontFamily: "ram" }}
          className="flex text-white justify-center text-[5vw] protest-revolution-regular6"
        >
          SPONSORS
        </div>
        <div
          // style={{ fontFamily: "ram" }}
          className="flex text-white justify-center text-[3em] protest-revolution-regular6"
        >
          CATEGORY 1
        </div>
        <div id="gallery">
          <div id="gallery">
            {sponsors_cat1.map((sponsor, index) => {
              return (
                <>
                  <div className="figure_1 ">
                    <img
                      src={sponsor.image}
                      alt="Pink and blue clouds at sunset."
                      title="Photo by Jeremy Doddridge for Unsplash"
                      className="w-32 h-auto"
                    />
                    <span className="text-xl font-bold"> {sponsor.name}</span>
                    <br />
                    <span className="text-lg font-semibold">
                      {" "}
                      {sponsor.role}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <div
            // style={{ fontFamily: "ram" }}
            className="flex text-white justify-center text-[3em] protest-revolution-regular6 "
          >
            CATEGORY 2
          </div>
          <div id="gallery">
            {sponsors_cat2.map((sponsor, index) => {
              return (
                <>
                  <div className="figure_1 ">
                    <img
                      src={sponsor.image}
                      alt="Pink and blue clouds at sunset. "
                      title="Photo by Jeremy Doddridge for Unsplash"
                    />
                    <span className="text-xl font-bold"> {sponsor.name}</span>
                    <br />
                    <span className="text-lg font-semibold">
                      {" "}
                      {sponsor.role}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <div
            // style={{ fontFamily: "ram" }}
            className="flex text-white justify-center text-[3em] protest-revolution-regular6"
          >
            CATEGORY 3
          </div>
          <div id="gallery">
            {sponsors_cat3.map((sponsor, index) => {
              return (
                <>
                  <div className="figure_1 ">
                    <img
                      src={sponsor.image}
                      alt="Pink and blue clouds at sunset. "
                      title="Photo by Jeremy Doddridge for Unsplash"
                    />
                    <span className="text-xl font-bold"> {sponsor.name}</span>
                    <br />
                    <span className="text-lg font-semibold">
                      {" "}
                      {sponsor.role}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <div
            // style={{ fontFamily: "ram" }}
            className="flex text-white justify-center text-[3em] protest-revolution-regular6"
          >
            CATEGORY 4
          </div>
          <div id="gallery">
            {sponsors_cat4.map((sponsor, index) => {
              return (
                <>
                  <div className="figure_1 ">
                    <img
                      src={sponsor.image}
                      alt="Pink and blue clouds at sunset. "
                      title="Photo by Jeremy Doddridge for Unsplash"
                    />
                    <span className="text-xl font-bold"> {sponsor.name}</span>
                    <br />
                    <span className="text-lg font-semibold">
                      {" "}
                      {sponsor.role}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Sponsors;
