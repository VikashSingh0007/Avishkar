import React, { useEffect } from "react";
import "./team.css"; // Replace with the actual CSS file path
import Navbar from "../Home/Navbar";

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
          image:"",
          name: "Prof. Rama Shanker Verma",
          Phone: "1234567890",
          instagramId: "Abc@gmail.com",
        },
        
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
      department: "Faculty Incharge",
      data: [
        {
          email: "",
          name: "Asim Mukherjee",
          registration:20204233 ,
          mobile: 7282827749,
          branch: "",
          position: "",
          department: "",
          photo: "",
          linkedin:
            "",
          instagram_url:
            "",
          instagram_username: "4",
        },
        {
          email: "Sameer Srivastava",
          name :"Sameer Srivastava",
          registration:20204233 ,
          mobile: 7282827749,
          branch: "",
          position: "",
          department: "",
          photo: "",
          linkedin:
            "",
          instagram_url:
            "",
          instagram_username: "4",
        }
        // Add more data for Dc's...
      ],
    },
    {
      department: "Festival Secretary",
      data: [
        {
          email: "nandini.20208082@mnnit.ac.in",
          name: "Nandini Karad",
          registration: 20208082,
          mobile: 7424927731,
          branch: "Information Technology",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/file/d/1ZgGWovzSXtkY15yEC6DEZcjN3fAvOVgi/view",
          linkedin:
            "https://www.linkedin.com/in/nandini-karad-2186861b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/coldcoff_e_e?igsh=MTM1Y2lsMGt0MW41eg==",
          instagram_username: "coldcoff_e_e",
        },
        {
          email: "ananya.20209006@mnnit.ac.in",
          name: "Ananya Madaan",
          registration: 20209006,
          mobile: 7455911890,
          branch: "Electronics and Communication Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1tboOOfFe37IMWQXoPpwj-MkFVLl1Xav-",
          linkedin:
            "https://www.linkedin.com/in/ananya-madaan-47b809201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/oye_._ananya?igsh=MTY0NjB2NGg5dWZyZQ==",
          instagram_username: "oye_._ananya",
        },
        {
          email: "anupamyadav506@gmail.com",
          name: "ANUPAM YADAV",
          registration: 20205038,
          mobile: 9506250974,
          branch: "Electronics and Communication Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=10eb8_FW1j_WqbPQk4PR-qjEopk0-JLon",
          linkedin: "https://www.linkedin.com/in/anupam-yadav-010572228/",
          instagram_url: "https://www.instagram.com/anupamyadav2003/",
          instagram_username: "anupamyadav2003",
        },
        {
          email: "abhishek.20201006@mnnit.ac.in",
          name: "Abhishek Singh Sankhla",
          registration: 20201006,
          mobile: 7976589015,
          branch: "Civil Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1IwkxNU5aOTgqvH92nvNNWlAVZzDHNZl4",
          linkedin: "www.linkedin.com/in/abhisheksankhla",
          instagram_url:
            "https://www.instagram.com/abhi.__.here?igsh=MTF3MTRzNmZoNGYxYg%3D%3D&utm_source=qr",
          instagram_username: "abhi.__.here",
        },
        {
          email: "ayushh3696@gmail.com",
          name: "Ayush Gupta",
          registration: 20200014,
          mobile: 9305867392,
          branch: "Chemical Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1SIhLWxVEywvUbCipiHNlOYfq3xbmrwS9",
          linkedin: "https://in.linkedin.com/in/ayush-gupta24",
          instagram_url: "https://www.instagram.com/ayushh._.18/",
          instagram_username: "ayushh._.18",
        },
        {
          email: "shivangi6632@gmail.com",
          name: "Shivangi Singh",
          registration: 20205154,
          mobile: 8824396390,
          branch: "Electronics and Communication Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1M6jL_UeBDPEREgSSDwqUDHF8WNYO5h4d",
          linkedin: "https://www.linkedin.com/in/shivangi-singh-82b71a1b9",
          instagram_url: "https://www.instagram.com/_shivangi.___/",
          instagram_username: "_shivangi.___",
        },
        {
          email: "chauhananushka0908@gmail.com",
          name: "Anushka Chauhan",
          registration: 20203029,
          mobile: 9174257941,
          branch: "Mechanical Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1ixF_V02m1LwcRqMRVqA3pilKfpoiFywp",
          linkedin:
            "https://www.linkedin.com/in/anushka0908?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/l_o_s_t_0908?utm_source=qr&igsh=bnNyMnU3cmZjcXdq",
          instagram_username: "l_o_s_t_0908",
        },
        {
          email: "aditi.20208009@mnnit.ac.in",
          name: "Aditi Verma",
          registration: 20208009,
          mobile: 9415012002,
          branch: "Information Technology",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1_hVfK4MsuRhJ5T0OEVmDIT6iEyKuliYa",
          linkedin:
            "https://www.linkedin.com/in/aditi-igloo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/aditi._.verma._.002?igsh=aWVnZzNhZzRhbWd4",
          instagram_username: "aditi._.verma._.002",
        },
        {
          email: "adityabaranwal013@gmail.com",
          name: "Aditya Baranwal",
          registration: 20201010,
          mobile: 7903326808,
          branch: "Civil Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1WZM0QKwMPosGOOMWKuWOdOBPfYgwyVMC",
          linkedin: "https://www.linkedin.com/in/aditya-baranwal-013/",
          instagram_url: "https://www.instagram.com/_adityabaranwal/",
          instagram_username: "_adityabaranwal",
        },
        {
          email: "anushkamuskan.a1@gmail.com",
          name: "Anushka",
          registration: 20206009,
          mobile: 8290368209,
          branch: "Mechanical Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1EfltaHZDxQ08pi_Hj6eqTiSVzS6WUxRz",
          linkedin: "https://www.linkedin.com/in/anushka-f",
          instagram_url:
            "https://www.instagram.com/anushka_anotherhuman?igsh=NnVnbm1hbThtY2Q3",
          instagram_username: "anushka_anotherhuman",
        },
        {
          email: "shikha.20206047@mnnit.ac.in",
          name: "SHIKHA TIWARI",
          registration: 20206047,
          mobile: 9580340131,
          branch: "Mechanical Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=1w9JyYIC1S3_ZMGD59XASqG1VcRmz2NeC",
          linkedin: "https://www.linkedin.com/in/shikha-tiwari-45b6781bb/",
          instagram_url:
            "https://www.instagram.com/beyond_scope_002?igsh=MTZmajBzN2F5NzV3ZQ==",
          instagram_username: "beyond_scope_002",
        },
        {
          email: "khaliqrocks786@gmail.com",
          name: "Khaliq Hussain",
          registration: 20204096,
          mobile: 7839978981,
          branch: "Computer Science and Engineering",
          position: "Festival Secretary",
          department: "NA",
          photo: "https://drive.google.com/open?id=17K5xjakyThwKmaV48CGWWBPDhx68Bcr5",
          linkedin: "https://www.linkedin.com/in/khaliqhussain/",
          instagram_url: "https://www.instagram.com/khaliq_hussain786/",
          instagram_username: "khaliq_hussain786",
        },
        // Add more data for Festival Secretary...
      ],
    },
    {
      department: "PR Team",
      data: [
        {
          email: "mayank.20201060@mnnit.ac.in",
          name: "Mayank",
          registration: 20201060,
          mobile: 8004970613,
          branch: "Civil Engineering",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1vXyyKgl3W6zpg2jmgsd53dY_iyBTs1UA",
          linkedin: "https://www.linkedin.com/in/mayank-kumar-924051241",
          instagram_url:
            "https://www.instagram.com/mayank_.2?igsh=MWQ5OTByY2Jib2dwOQ==",
          instagram_username: "mayank_.2",
        }, 
        {
          email: "shantanukr2201@gmail.com",
          name: "Shantanu Kumar Singh",
          registration: 20209050,
          mobile: 8235856700,
          branch: "Chemical Engineering",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1RooVGIcCru_Bmw-Ps0XthwAQOkYSy2-h",
          linkedin:
            "https://www.linkedin.com/in/shantanu-kumar-singh22-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url: "https://www.instagram.com/_shantanu22/",
          instagram_username: "_shantanu22",
        },
        {
          email: "aditya.20201011@mnnit.ac.in",
          name: "Aditya bhardwaj",
          registration: 20201011,
          mobile: 6201042985,
          branch: "Civil Engineering",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1JWc7lYr59f6RR6dfscSTTP8IevQHuSPU",
          linkedin:
            "https://www.linkedin.com/in/aditya-bhardwaj009?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/adityabhardwaj_vlogs?igsh=MXN5aGFzOWZqeWk0MA==",
          instagram_username: "adityabhardwaj_vlogs",
        },
        {
          email: "anubhav1110@gmail.com",
          name: "Anubhav Shrivastava",
          registration: 20209011,
          mobile: 9098981959,
          branch: "Information Technology",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1CQDO8kkXiMdvvxSlu7yGaAeI27x1F_io",
          linkedin:
            "https://www.linkedin.com/in/ashrivastava1110?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          instagram_url:
            "https://www.instagram.com/a.shrivastava.1110?igsh=cWozZDAydHRrbG9z",
          instagram_username: "a.shrivastava.1110",
        },
        {
          email: "sunil.20208124@mnnit.ac.in",
          name: "Sunil Kumar Sharma",
          registration: 20208124,
          mobile: 9415925231,
          branch: "Information Technology",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1RjB2LhRA7Ak8Rv06s7hHyQJPGQKz9WBu",
          linkedin: "https://www.linkedin.com/in/sunilkumarsharma129/",
          instagram_url: "https://www.instagram.com/sunny129_t20/",
          instagram_username: "sunny129_t20",
        },
        {
          email: "riya.20200044@mnnit.ac.in",
          name: "Riya Singh",
          registration: 20200044,
          mobile: 7999159840,
          branch: "Mechanical Engineering",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1wzrFbzAh6GQjONifAiRZkf7CRS9J-cBR",
          linkedin:
            "https://www.linkedin.com/in/riya-singh-3b3427210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/_rimyaa?igsh=MXU5OHB5Z3M5OXlxaw==",
          instagram_username: "_rimyaa",
        },
        {
          email: "krishgupta1210@gmail.com",
          name: "Krishna Gupta",
          registration: 20209033,
          mobile: 9672422332,
          branch: "Chemical Engineering",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=19WfG5-iKDiY9Vq5w5b4QdASRHUtFu-LL",
          linkedin: "linkedin.com/in/krish1210",
          instagram_url: "instagram.com/krishgupta1210",
          instagram_username: "krishgupta1210",
        },
        {
          email: "ritesh.chandra210@gmail.com",
          name: "RITESH CHANDRA",
          registration: 20208107,
          mobile: 9369923172,
          branch: "Information Technology",
          position: "Public Relation Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1rvlBBYuZbrenbWc0sRCT3vihnEkh_eWb",
          linkedin: "https://www.linkedin.com/in/ritesh-chandra-552083241/",
          instagram_url: "https://www.instagram.com/riteshchandra90/",
          instagram_username: "riteshchandra90",
        },
        // Add more data for Web Team...
      ],
    },
    ,
    {
      department: "Web Team",
      data: [
        {
          email: "kumarvivek7282827749@gmail.com",
          name: "Vivek Kumar",
          registration:20204233 ,
          mobile: 7282827749,
          branch: "Computer Science and Engineering",
          position: "Web Lead",
          department: "NA",
          photo: "",
          linkedin:
            "",
          instagram_url:
            "",
          instagram_username: "",
        },
        {
          email: "dharmendra.20208039@mnnit.ac.in",
          name: "Dharmendra Solanki",
          registration: 20208039,
          mobile: 7489455687,
          branch: "Information Technology",
          position: "Departmental Coordinator",
          department: "Cyberquest (DC+ Web Lead)",
          photo: "https://drive.google.com/open?id=1RbXWQCHcKrlSTVotNPR1PfI0oovsOkyR",
          linkedin: "https://www.linkedin.com/in/dharmendra-solanki-mnnit/",
          instagram_url: "https://www.instagram.com/dharmendra_hack/",
          instagram_username: "dharmendra_hack",
        }
        // Add more data for Web Team...
      ],
    },
    
    {
      department: "Media Team",
      data: [
        {
          email: "",
          name: "Asim Mukherjee",
          registration:20204233 ,
          mobile: 7282827749,
          branch: "",
          position: "",
          department: "",
          photo: "",
          linkedin:
            "",
          instagram_url:
            "",
          instagram_username: "4",
        },
        {
          email: "Sameer Srivastava",
          name :"Sameer Srivastava",
          registration:20204233 ,
          mobile: 7282827749,
          branch: "",
          position: "",
          department: "",
          photo: "",
          linkedin:
            "",
          instagram_url:
            "",
          instagram_username: "4",
        }
        // Add more data for Dc's...
      ],
    },
    {
      department: "Arts Lead",
      data: [
        {
          email: "divyanshu.20208043@mnnit.ac.in",
          name: "Divyanshu Kushwaha",
          registration: 20208043,
          mobile: 6206528668,
          branch: "Information Technology",
          position: "Arts Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=12OqLy3TglhxZM50HLoOlHwG0ubCR5D9N",
          linkedin: "https://www.linkedin.com/in/dkdivyanshu118/",
          instagram_url: "https://www.instagram.com/archived_spark/",
          instagram_username: "archived_spark",
        }
        // Add more data for Dc's...
      ],
    },
    {
      department: "Gnosiomania",
      data: [
        {
          email: "shambhavi.20202084@mnnit.ac.in",
          name: "Shambhavi Shukla",
          registration: 20202084,
          mobile: 7007159003,
          branch: "Electrical Engineering",
          position: "Gnosiomania Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1o61mwmiIw3x0K5GEW_UZBcJSBF30sn5S",
          linkedin: "https://www.linkedin.com/in/shambhavi-shukla-899174210",
          instagram_url: "https://www.instagram.com/shambhavishukla28",
          instagram_username: "shambhavishukla28",
        },
        {
          email: "shashank.20205148@mnnit.ac.in",
          name: "Shashank Saxena",
          registration: 20205148,
          mobile: 7007712375,
          branch: "Electronics and Communication Engineering",
          position: "Gnosiomania Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1Eq_E4jF3gSlijROFWnO6OMoHlWqnNpDc",
          linkedin:
            "https://www.linkedin.com/in/shashank81?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/shawshank.104?igsh=ZXFiY3BvOXo1N3g=",
          instagram_username: "Shawshank.104",
        },
        {
          email: "arghyadeep.20209016@mnnit.ac.in",
          name: "Arghyadeep Chakrabarti",
          registration: 20209016,
          mobile: 9167388137,
          branch: "Chemical Engineering",
          position: "Gnosiomania Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=17gp6TDBgQ8PXjEJEAMRw6gtCfcuWnXv0",
          linkedin: "https://www.linkedin.com/in/arghyachak/",
          instagram_url:
            "https://www.instagram.com/arghya.chak?igsh=ZGFmdW1zOGc3ZmNw",
          instagram_username: "arghya.chak",
        },
        {
          email: "ishita.20208056@mnnit.ac.in",
          name: "Ishita Agrawal",
          registration: 20208056,
          mobile: 6307476517,
          branch: "Information Technology",
          position: "Gnosiomania Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1-pVOc90qHN_Kru2IsxO9TsQME7L2GbF_",
          linkedin: "https://www.linkedin.com/in/ishita1505/",
          instagram_url: "https://www.instagram.com/__.ishh.15.__/",
          instagram_username: "__.ishh.15.__",
        },
        {
          email: "piyush.20205111@mnnit.ac.in",
          name: "Piyush Patel",
          registration: 20205111,
          mobile: 7543095920,
          branch: "Electronics and Communication Engineering",
          position: "Gnosiomania Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1bHDyEfF3e36vVz-CuFoHjddBEKnYz2d0",
          linkedin: "https://www.linkedin.com/in/piyush1810",
          instagram_url:
            "https://www.instagram.com/piyushp_18?igsh=MWg0ejFla213ZDd1ag==",
          instagram_username: "piyushp_18",
        },
        {
          email: "amisha.20205029@mnnit.ac.in",
          name: "Amisha Sinha",
          registration: 20205029,
          mobile: 7045487173,
          branch: "Computer Science and Engineering",
          position: "Gnosiomania Lead",
          department: "NA",
          photo: "https://drive.google.com/open?id=1aTnqGD27egHYD_H7vhs5Uspv3bNJBtpF",
          linkedin: "www.linkedin.com/in/amisha-sinha-202730240",
          instagram_url: "https://www.instagram.com/amisha_misfit/",
          instagram_username: "amisha_misfit",
        },
        // Add more data for Dc's...
      ],
    },
    {
      department: "Departmental Cordinator",
      data: [
        {
          email: "krshivam291002@gmail.com",
          name: "Shivam Ojha",
          registration: 20203138,
          mobile: 9305423706,
          branch: "Mechanical Engineering",
          position: "Departmental Coordinator",
          department: "Mechrocosm",
          photo: "https://drive.google.com/open?id=1wU4PdLslr6gDAnRWW0S75IEIw31Fh-Bc",
          linkedin: "https://www.linkedin.com/in/shivam-ojha-3b3980209",
          instagram_url:
            "https://www.instagram.com/ojha_shivam_29?igsh=Y2Q1YWk4OWVyeWUw",
          instagram_username: "ojha_shivam_29",
        },
        {
          email: "shaurya.20201103@mnnit.ac.in",
          name: "SHAURYA RAJ SRIVASTAVA",
          registration: 20201103,
          mobile: 8299760453,
          branch: "Civil Engineering",
          position: "Departmental Coordinator",
          department: "Robo,Aero,Astro, Kreedomania",
          photo: "https://drive.google.com/open?id=1aGzODHurQ-0nCw-gevdq_wK0p4e_-8Q9",
          linkedin:
            "https://www.linkedin.com/in/shaurya-raj-srivastava?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/shaury_a_nonymous?igsh=bnl4cWN1M296MjBy",
          instagram_username: "shaury_a_nonymous",
        },
        {
          email: "arinasiddiqui4@gmail.com",
          name: "Arina Siddiqui",
          registration: 20203031,
          mobile: 7754096711,
          branch: "Mechanical Engineering",
          position: "Departmental Coordinator",
          department: "Triathlon mechanical",
          photo: "https://drive.google.com/open?id=1-fewnMsZOFwyRP2VDkv8UiGjLnDhsAGA",
          linkedin: "https://www.linkedin.com/in/arina-siddiqui-a22803232/",
          instagram_url: "https://www.instagram.com/arinasiddiquireal/?next=%2F",
          instagram_username: "arinasiddiquireal",
        },
        {
          email: "shubham.20204197@mnnit.ac.in",
          name: "Shubham Kashyap",
          registration: 20204197,
          mobile: 9504579478,
          branch: "Computer Science and Engineering",
          position: "Departmental Coordinator",
          department: "Cyberquest",
          photo: "https://drive.google.com/open?id=1xURATj9Z9VjOBI1XkDdeB5KMhj2iOy8I",
          linkedin: "https://www.linkedin.com/in/admirerr/",
          instagram_url: "https://www.instagram.com/kashyapshubham0608/",
          instagram_username: "kashyapshubham0608",
        },
        {
          email: "himanshu.20201053@mnnit.ac.in",
          name: "Himanshu Shankar Lodha",
          registration: 20201053,
          mobile: 8955356993,
          branch: "Civil Engineering",
          position: "Departmental Coordinator",
          department: "Nirmaan",
          photo: "https://drive.google.com/open?id=1RbR3p-UbaPcQrSnV8Gj61IVJLcSMMz_b",
          linkedin: "https://www.linkedin.com/in/himanshu-lodha-aa3992206",
          instagram_url: "https://www.instagram.com/himanshu.lodha.1447/",
          instagram_username: "himanshu.lodha.1477",
        },
        {
          email: "dharmendra.20208039@mnnit.ac.in",
          name: "Dharmendra Solanki",
          registration: 20208039,
          mobile: 7489455687,
          branch: "Information Technology",
          position: "Departmental Coordinator",
          department: "Cyberquest (DC+ Web Lead)",
          photo: "https://drive.google.com/open?id=1RbXWQCHcKrlSTVotNPR1PfI0oovsOkyR",
          linkedin: "https://www.linkedin.com/in/dharmendra-solanki-mnnit/",
          instagram_url: "https://www.instagram.com/dharmendra_hack/",
          instagram_username: "dharmendra_hack",
        },
        {
          email: "shubhranshupandey03@gmail.com",
          name: "Shubhranshu Pandey",
          registration: 20201111,
          mobile: 9519378409,
          branch: "Civil Engineering",
          position: "Departmental Coordinator",
          department: "Nirmaan",
          photo: "https://drive.google.com/open?id=1iFqh2C3ut2AkEtLC_2_9NxRKTTQ58pTd",
          linkedin: "https://www.linkedin.com/in/shubhranshu-pandey-42983020b/",
          instagram_url: "https://www.instagram.com/_shubhranshu_as_it_is/",
          instagram_username: "_shubhranshu_as_it_is",
        },
        {
          email: "rishabh.20202066@mnnit.ac.in",
          name: "Rishabh Chaurasia",
          registration: 20202066,
          mobile: 8840767787,
          branch: "Electrical Engineering",
          position: "Departmental Coordinator",
          department: "PowerSurge EE",
          photo: "https://drive.google.com/open?id=1rsRfv7D3vRwdcW5TCr-CB-43PjPBIIUl",
          linkedin: "https://www.linkedin.com/in/rishabh21122002/",
          instagram_url: "https://www.instagram.com/rish__a_b_h/",
          instagram_username: "rish__a_b_h",
        },
        {
          email: "divyansh.20202034@mnnit.ac.in",
          name: "Divyansh gangwar",
          registration: 20202034,
          mobile: 7017646069,
          branch: "Electronics and Communication Engineering",
          position: "Departmental Coordinator",
          department: "Kreedomania",
          photo: "https://drive.google.com/open?id=1gSfLtpBWeu1tNzv2OQEHbvQCHtaPVjxe",
          linkedin: "https://www.linkedin.com/in/divyansh-gangwar/",
          instagram_url: "https://www.instagram.com/divyansh_gangwar22/",
          instagram_username: "divyansh_gangwar22",
        },
        {
          email: "roboticsclub@mnnit.ac.in",
          name: "Shashank Singh",
          registration: 20202085,
          mobile: 9351648062,
          branch: "Electrical Engineering",
          position: "Departmental Coordinator",
          department: "Robomania, Aerodynamix, Cosmo-Con(Astrowing)",
          photo: "https://drive.google.com/open?id=1Czs93cDpg8jGWNx0QaLBlGLBmTOZqLOP",
          linkedin:
            "https://www.linkedin.com/in/shashanksh25?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/_singh.shashank_?igsh=Z3B0OXh6OWRzNndx",
          instagram_username: "_singh.shashank_",
        },
        {
          email: "bipul.20201037@mnnit.ac.in",
          name: "Bipul Karna",
          registration: 20201037,
          mobile: 6394027044,
          branch: "Civil Engineering",
          position: "Departmental Coordinator",
          department: "Robomania(Robotics Club). CosmoCon(Astronomy Club)",
          photo: "https://drive.google.com/open?id=1JrCSt_LcciZC6r7ypmGyJ3MBKGnphDcP",
          linkedin:
            "https://www.linkedin.com/in/bipulkarna97?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/bipulkarna_97?igsh=MTNqYmwxNTZxY3MxZw==",
          instagram_username: "bipulkarna_97",
        },
        {
          email: "nikhil.20206028@mnnit.ac.in",
          name: "Nikhil Chaurasia",
          registration: 20206028,
          mobile: 7388465480,
          branch: "Production and Industrial Engineering",
          position: "Departmental Coordinator",
          department: "Kreedomania",
          photo: "https://drive.google.com/open?id=12K30GZ60oGJXHcloJoP_BvZ1FfKaoKBz",
          linkedin: "https://www.linkedin.com/in/nikhil1607",
          instagram_url:
            "https://www.instagram.com/nikkk_16_?igsh=MXQ1a3N2dml4ejNscQ==",
          instagram_username: "nikkk_16_",
        },
        {
          email: "siddharth.20208121@mnnit.ac.in",
          name: "Siddharth Yadav",
          registration: 20208121,
          mobile: 9984958145,
          branch: "Information Technology",
          position: "Departmental Coordinator",
          department: "Cyberquest",
          photo: "https://drive.google.com/open?id=1GGXfayPRyXsvBDxS1clqwsr--i3l1RGn",
          linkedin: "https://www.linkedin.com/in/siddharth-yadav-472a62201",
          instagram_url: "https://www.instagram.com/sid_yadav7899/",
          instagram_username: "sid_yadav7899",
        },
        {
          email: "gautam.20203059@mnnit.ac.in",
          name: "Gautam Kumar",
          registration: 20203059,
          mobile: 8987381926,
          branch: "Mechanical Engineering",
          position: "Departmental Coordinator",
          department: "Robotics + Aero modelling+ Astrowing",
          photo: "https://drive.google.com/open?id=15K0KMpHIGULLsWKAhQfjbKyBhaf2PTUY",
          linkedin: "https://www.linkedin.com/in/gautam-kumar-aa7a82223",
          instagram_url: "https://www.instagram.com/gautam_64?igsh=NG01NHlpOTNnbGp1",
          instagram_username: "gautam_64",
        },
        {
          email: "ashish.20203036@mnnit.ac.in",
          name: "Ashish Ranjan",
          registration: 20203036,
          mobile: 6205118853,
          branch: "Mechanical Engineering",
          position: "Departmental Coordinator",
          department: "Mechrocosm",
          photo: "https://drive.google.com/open?id=1Tf4cHip7xN1v0uVciWqyc-SrwIWtIo8q",
          linkedin:
            "https://www.linkedin.com/in/ashish-ranjan-75a131208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url: "https://www.instagram.com/_ashish.2001/",
          instagram_username: "_ashish.2001",
        },
        {
          email: "ananya.20205031@mnnit.ac.in",
          name: "Ananya Patil",
          registration: 20205031,
          mobile: 7380582002,
          branch: "Electronics and Communication Engineering",
          position: "Departmental Coordinator",
          department: "Electromania",
          photo: "https://drive.google.com/open?id=1fTgSqC58WH-ISc-mLmfMOIxCGonatT2E",
          linkedin: "https://www.linkedin.com/in/ananya-patil-466072237",
          instagram_url:
            "https://www.instagram.com/ananyapatil809?igsh=cTNqMGlheGN4dGZh",
          instagram_username: "ananyapatil809",
        },
        {
          email: "aditya.20205010@mnnit.ac.in",
          name: "Aditya Pandey",
          registration: 20205010,
          mobile: 9555113270,
          branch: "Electronics and Communication Engineering",
          position: "Departmental Coordinator",
          department: "Electromania",
          photo: "https://drive.google.com/open?id=17YWKotVp4923e0knnCqAcOJBQH0W03Mh",
          linkedin: "NA",
          instagram_url: "NA",
          instagram_username: "NA",
        },
        {
          email: "mohd.20201066@mnnit.ac.in",
          name: "Mohd Taha",
          registration: 20201066,
          mobile: 8601203463,
          branch: "Civil Engineering",
          position: "Departmental Coordinator",
          department: "Nirmaan",
          photo: "https://drive.google.com/open?id=1J6POANfKe5E9q39HwKsUCy_Bdp9KzTRK",
          linkedin: "https://www.linkedin.com/in/mohd-taha-mnnit",
          instagram_url:
            "https://www.instagram.com/taha_2_8_?igsh=MWI5YW5uam5qZzVmNg==",
          instagram_username: "taha_2_8_",
        },
        {
          email: "sneha.2022mb31@mnnit.ac.in",
          name: "Sneha Varshney",
          registration: "2022MB31",
          mobile: 8755910041,
          branch: "MBA",
          position: "Departmental Coordinator",
          department: "Oligopoly",
          photo: "https://drive.google.com/open?id=1hsHv7coiDDMCxK2jsDwUXRqaTAxoNKko",
          linkedin: "https://www.linkedin.com/in/sneha-varshney-bb139320a",
          instagram_url:
            "https://www.instagram.com/varshney.sneha_09?igsh=bWU5eGxjY2JrNGw0",
          instagram_username: "Varshney.sneha_09",
        },
        {
          email: "sukhwant.2022mb33@mnnit.ac.in",
          name: "Sukhwant Kumar",
          registration: "2022MB33",
          mobile: 7488203069,
          branch: "MBA",
          position: "Departmental Coordinator",
          department: "Oligopoly",
          photo: "https://drive.google.com/open?id=1I005Fq6KSPwEH9aR2nrmsCo7scnVtgqP",
          linkedin:
            "https://www.linkedin.com/in/sukhwant-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url:
            "https://www.instagram.com/pyrrhic_scribbler?igsh=OGQ5ZDc2ODk2ZA==",
          instagram_username: "pyrrhic_scribbler",
        },
        {
          email: "niharika.2022mb23@mnnit.ac.in",
          name: "Niharika jain",
          registration: "2022MB23",
          mobile: 7049851826,
          branch: "MBA",
          position: "Departmental Coordinator",
          department: "Monopoly",
          photo: "https://drive.google.com/open?id=1wipziO_RRW2iO_XPc7OuVUwnW3hZaNHC",
          linkedin:
            "https://www.linkedin.com/in/niharika-jain-8219a4257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url: "NA",
          instagram_username: "thetalkativeone__",
        },
        {
          email: "ayush.20201033@mnnit.ac.in",
          name: "Ayush Gupta",
          registration: 20201033,
          mobile: 9649600843,
          branch: "Civil Engineering",
          position: "Departmental Coordinator",
          department: "Nirmaan",
          photo: "https://drive.google.com/open?id=1T_0ytLfZvhOvbVm5zZRXlnb3BHWpsLW5",
          linkedin: "https://www.linkedin.com/in/ayushgupta1502",
          instagram_url:
            "https://www.instagram.com/ayush.gupta.15?igsh=MTVwbGN4dzRlczdxag==",
          instagram_username: "ayush.gupta.15",
        },
        {
          email: "kartikey.20208064@mnnit.ac.in",
          name: "Kartikey Gupta",
          registration: 20208064,
          mobile: 9120548870,
          branch: "Information Technology",
          position: "Departmental Coordinator",
          department: "Cyberquest",
          photo: "https://drive.google.com/open?id=1O8-vxclBLDBkIhVMdQmeo0sosXs4DE0V",
          linkedin: "https://www.linkedin.com/in/kartikey2991",
          instagram_url:
            "https://www.instagram.com/kartikeygg?igsh=MWp0OXBkYTBueWpkZg==",
          instagram_username: "kartikeygg",
        },
        {
          email: "shashwat.20206045@mnnit.ac.in",
          name: "Shashwat Gupta",
          registration: 20206045,
          mobile: 8953971576,
          branch: "Production and Industrial Engineering",
          position: "Departmental Coordinator",
          department: "Mechrocosm",
          photo: "https://drive.google.com/open?id=1xhOEyYlXLunXTtvI8_kF_EB___B2dIGi",
          linkedin: "https://www.linkedin.com/in/shashwat13g?trk=blended-typeahead",
          instagram_url: "https://www.instagram.com/g_shashwat0901/",
          instagram_username: "g_shashwat0901",
        },
        {
          email: "racha.20206033@mnnit.ac.in",
          name: "Yashwanth Racha",
          registration: 20206033,
          mobile: 6300022674,
          branch: "Production and Industrial Engineering",
          position: "Departmental Coordinator",
          department: "Mechrocosm",
          photo: "https://drive.google.com/open?id=1Vyezwv8CFz-r_joB3loOtbRqQI4DD-a3",
          linkedin: "www.linkedin.com/in/yashwanth-racha-kmm",
          instagram_url:
            "https://www.instagram.com/yashwanth_racha?igsh=YW5zaHdmOXJ5OTdlyashwanth_racha",
          instagram_username: "yashwanth_racha",
        },
        {
          email: "ishaan.20201054@mnnit.ac.in",
          name: "Ishaan Pachauri",
          registration: 20201054,
          mobile: 9897921686,
          branch: "Civil Engineering",
          position: "Departmental Coordinator",
          department: "Nirmaan",
          photo: "https://drive.google.com/open?id=1qalPQmSE266ND5ROoLQK9V6QBIW3HN0E",
          linkedin: "https://www.linkedin.com/in/ishaanpachauri",
          instagram_url:
            "https://www.instagram.com/ishaanpachauri?igsh=MW1qN2Nyamg2dHE3ZA==",
          instagram_username: "ishaanpachauri",
        },
        {
          email: "psinghrawat7640@gmail.com",
          name: "PRADEEP SINGH",
          registration: 20206032,
          mobile: 6378989163,
          branch: "Production and Industrial Engineering",
          position: "Departmental Coordinator",
          department: "Mechrocosm",
          photo: "https://drive.google.com/open?id=1nMLLmjBwLJL-9B8k6fvYBl9TDhhDMS2h",
          linkedin: "https://www.linkedin.com/in/pradeep-singh-146083241",
          instagram_url:
            "https://www.instagram.com/invites/contact/?i=via37o1zq830&utm_content=m4i8hrg",
          instagram_username: "pradeep_at80",
        },
        {
          email: "aniket.20209007@mnnit.ac.in",
          name: "Aniket Yadav",
          registration: 20209007,
          mobile: 6386216334,
          branch: "Chemical Engineering",
          position: "Departmental Coordinator",
          department: "Rasayans",
          photo: "https://drive.google.com/open?id=11POQW9yJI6Gp95NF2JgW4KhUXEUCrJHf",
          linkedin: "https://www.linkedin.com/in/aniketyadav03",
          instagram_url:
            "https://www.instagram.com/aniket_rajvan03?igsh=MnNpZXh5dnk3Yw==",
          instagram_username: "aniket_rajvan03",
        },
        {
          email: "praveenawasthi954@gmail.com",
          name: "Praveen Awasthi",
          registration: 20209041,
          mobile: 7007989435,
          branch: "Chemical Engineering",
          position: "Departmental Coordinator",
          department: "Rasayan",
          photo: "https://drive.google.com/open?id=1BmSJXrmFs4qRJOAhRBz0LFTeH2IZQZTu",
          linkedin: "https://www.linkedin.com/in/praveen-awasthi-a79177238",
          instagram_url: "https://www.instagram.com/praveenawasthi214/",
          instagram_username: "Praveenawasthi214",
        },
        {
          email: "rg356403@gmail.com",
          name: "Rahul Garg",
          registration: 20208101,
          mobile: 9041339018,
          branch: "Information Technology",
          position: "Departmental Coordinator",
          department: "Cyberquest",
          photo: "https://drive.google.com/open?id=1GeK1m5WkU3vxTu5GMXzcxN40hVGo7LTs",
          linkedin: "https://linkedin.com/in/rahulgarg-3809",
          instagram_url: "https://www.instagram.com/rahulgarg3809/",
          instagram_username: "rahulgarg3809",
        },
        {
          email: "aman.20209004@mnnit.ac.in",
          name: "Aman Kumar",
          registration: 20209004,
          mobile: 9369991647,
          branch: "Chemical Engineering",
          position: "Departmental Coordinator",
          department: "RASAYAN",
          photo: "https://drive.google.com/open?id=1yUKDJVfMccXWeeN15puoLZpml_OHVaTB",
          linkedin:
            "https://www.linkedin.com/in/aman-kumar-607109241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          instagram_url: "https://www.instagram.com/i.m.a_man?igsh=OGQ5ZDc2ODk2ZA==",
          instagram_username: "i.m.a_man",
        },

        // Add more data for Dc's...
      ],
    },
    {
      department: "Upcoming",
      data: [
        
        // Add more data for Dc's...
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
        <Navbar />

        <div
          // style={{ fontFamily: "ram" }}
          className="flex text-white justify-center pt-20 text-[5vw] protest-revolution-regular7"
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
                  {/* console.log({sponsorIndex.photo}) */}
                  <span className="text-xl font-bold">{sponsor.name}</span>
                  <br />
                  <span className="text-lg font-semibold">{sponsor.mobile}</span>
                  <a
                    href={`https://www.instagram.com/${sponsor.instagram_username}`}
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
