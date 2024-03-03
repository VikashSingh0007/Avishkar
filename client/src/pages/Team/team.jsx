import React, { useEffect } from "react";
import "./team.css"; // Replace with the actual CSS file path

const Team = () => {
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

  const team = [
    {
      department: "Director",
      data: [
        {
          image:
            "https://img.freepik.com/free-photo/christian-religion-elements-about-faith-god_23-2150641341.jpg?w=996&t=st=1708364202~exp=1708364802~hmac=5f072ba86f81b72351ebe0f052c7de369434b115555f327619c3d5008ca736c1",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "singhvikash7077",
        },
        // Add more data for Festival Secretary...
      ],
    },
    {
      department: "Sac President",
      data: [
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        // Add more data for SAC President...
      ],
    },
    {
      department: "Festival Secretary",
      data: [
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        // Add more data for Festival Secretary...
      ],
    },
    {
      department: "Web Team",
      data: [
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        // Add more data for Web Team...
      ],
    },
    {
      department: "PR Team",
      data: [
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        {
          image:
            "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=826&t=st=1708281792~exp=1708282392~hmac=26efaff03bbeb31aae8c88f8804b19a17299e5b2f1e98d9b60c224a8824a9ebf",
          name: "Abcc",
          Phone: "1234567890",
          instagramId: "@abcc_insta",
        },
        // Add more data for Web Team...
      ],
    },
  ];

  return (
    <>
      <main
        style={{
          background:
            "linear-gradient(to bottom, #d95f3b, #f0984a, #fcd6a5, #7aa9a3, #338f9a, #1c4c70)",
        }}
        // style={{
        //   backgroundImage: "url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg')",
        //   backgroundSize: "cover",
        //   // Add any other styles you need
        // }}
      >
        <div
          // style={{ fontFamily: "ram" }}
          className="flex text-white justify-center text-[5vw] protest-revolution-regular7"
        >
          TEAM
        </div>

        {team.map((department, index) => (
          <div key={index}>
            <div
              // style={{ fontFamily: "ram" }}
              className="flex text-white justify-center text-[3vw]  protest-revolution-regular6"
            >
              {department.department}
            </div>
            <div id="gallery">
              {department.data.map((sponsor, sponsorIndex) => (
                <div className="figure_1 active" key={sponsorIndex}>
                  {" "}
                  {/* Add the active class here */}
                  <img
                    src={sponsor.image}
                    alt="Pink and blue clouds at sunset"
                    title="Photo by Jeremy Doddridge for Un"
                  />
                  <span className="text-xl font-bold">{sponsor.name}</span>
                  <br />
                  <span className="text-lg font-semibold">{sponsor.Phone}</span>
                  <a
                    href={`https://www.instagram.com/${sponsor.instagramId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Team;