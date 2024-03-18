import React, { useEffect } from "react";
import "./Sponsors.css"; // Replace with the actual CSS file path
import Navbar from "../../Navbar";
import BOB from "../../assets/BOB1.png";
import Vguard from "../../assets/Vguard.png";
import SBI from "../../assets/SBI.png";
import KDM from "../../assets/KDM.png";
import DKMS from "../../assets/DKMS.png";
import VLCC from "../../assets/VLCC.png";
import Duke from "../../assets/Duke.png";
import meja from "../../assets/meja.jpeg";
import Coding from "../../assets/Coding.jpeg";
import MNNIT from "../../assets/prayag.jpeg";
import Red from "../../assets/red.png";
import travel from "../../assets/travel.png";
import Safe from "../../assets/Safe.png";
import prayagraj from "../../assets/PPGCL.jpeg";
import Denver from "../../assets/denver.jpeg";
import cafe from "../../assets/cafe.png";
import Inventkart from "../../assets/Inventkart.jpeg";
const Sponsors = () => {
  const sponsors = [
    {
      category: "Associate Sponsor",
      data: [
        {
          image: BOB,
          name: "Bank of Baroda",
        },
      ],
    },
    {
      category: "Executive Sponsor",
      data: [
        {
          image: Vguard,
          name: "V-guard",
        },
        {
          image: SBI,
          name: "SBI",
        },
      ],
    },
    {
      category: "Social Initiative Partner",
      data: [
        {
          image: DKMS,
          name: "DKMS-BMST",
        },
      ],
    },
    {
      category: "Energy Partners",
      data: [
        {
          image: meja,
          name: "Meja Urja Nigam Pvt Ltd",
        },
        {
          image: prayagraj,
          name: "PPGCL",
        },
      ],
    },
    {
      category: "Gifting Partners",
      data: [
        {
          image: KDM,
          name: "KDM",
        },
      ],
    },
    {
      category: "Beauty Partners",
      data: [
        {
          image: VLCC,
          name: "VLCC",
        },
      ],
    },
    {
      category: "Innovation Partner",
      data: [
        {
          image: MNNIT,
          name: "IIH MNNIT Foundation",
        },
      ],
    },
    {
      category: "Tech Partner",
      data: [
        {
          image: Coding,
          name: "Coding Ninjas",
        },
      ],
    },
    {
      category: "Apparel Partner",
      data: [
        {
          image: Duke,
          name: "Duke",
        },
      ],
    },
    {
      category: "Supply Chain Partner",
      data: [
        {
          image: Safe,
          name: "Safe Express",
        },
      ],
    },
    {
      category: "Radio  Partner",
      data: [
        {
          image: Red,
          name: "93.5 Red FM",
        },
      ],
    },
    {
      category: "Travel Partner",
      data: [
        {
          image: travel,
          name: "Travelzilla",
        },
      ],
    },
    {
      category: "Fragrance Partner ",
      data: [
        {
          image: Denver,
          name: "Denver",
        },
      ],
    },
    {
      category: "refreshment partner",
      data: [
        {
          image: cafe,
          name: "Café 96",
        },
      ],
    },
    {
      category: "Event Sponsors",
      data: [
        {
          image: Inventkart,
          name: "Inventkart (Robomania)",
        },
      ],
    },
  ];

  return (
    <>
      <main className="containerTeam">
        <Navbar page="Team" />

        <div
          className="flex text-[2.5rem] sm:text-[3.5rem] tracking-wider text-white justify-center pt-24 text-4xl font-bold rumoura-font"
          style={{
            fontWeight: "bolder",
            textAlign: "center",
            textShadow: "0 0 10px black", // Add white shadow with 10px blur
          }}
        >
          Sponsors
        </div>

        {sponsors.map((category, index) => (
          <div key={index}>
            <div
              className="flex text-[2rem] sm:text-[3rem] tracking-wider text-white justify-center mt-5  rumoura-font"
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                textShadow: "0 0 10px black", // Add white shadow with 10px blur
              }}
            >
              {category.category}
            </div>

            <div
              id="gallery"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {category.data.map((sponsor, sponsorIndex) => (
                <div key={sponsorIndex} className="photo-container text-center">
                  {/* <img
                    src={sponsor.image}
                    alt="Image Loading....."
                    style={{ width: "300px", height: "270px" }}
                  /> */}
                  <img
                    src={sponsor.image}
                    alt="Image Loading....."
                    style={{
                      // category: "Associate Sponsor",
                      width:
                        category.category === "Associate Sponsor"
                          ? "400px"
                          : "300px",
                      height:
                        category.category === "Associate Sponsor"
                          ? "160px"
                          : "270px",
                    }}
                  />

                  <span
                    className="text-white"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Sponsors;
