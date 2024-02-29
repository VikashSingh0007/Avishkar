import { useState } from "react";
import Carousel from "./Carousel";
const dummyData = [
    {
        title: "BotRush",
        criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rules: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        teamSize: "Up to 4 members",
        description: "Welcome to TechExpo 2024, where innovation meets collaboration! Join us for a thrilling showcase of cutting-edge technologies, inspiring presentations, and a platform to connect with like-minded tech enthusiasts. Whether you're a seasoned professional, a budding developer, or simply curious about the latest trends, TechExpo is the place to be.",
        tagline: "Explore the Future of Technology",
        imageLink: "/robo1.jpg",
        sponsors: ["Company A", "Company B", "Company C"],
        registerLink: "https://example.com/register-techexpo",
        slideColor : '#F57D1F',
        minTeamSize : '1',
        maxTeamSize : '3',
    }
    ,
    {
        title: "DroidRush",
        criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rules: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        teamSize: "Up to 4 members",
        description: "Welcome to TechExpo 2024, where innovation meets collaboration! Join us for a thrilling showcase of cutting-edge technologies, inspiring presentations, and a platform to connect with like-minded tech enthusiasts. Whether you're a seasoned professional, a budding developer, or simply curious about the latest trends, TechExpo is the place to be.",
        tagline: "Explore the Future of Technology",
        imageLink: "/robo3.jpg",
        sponsors: ["Company A", "Company B", "Company C"],
        registerLink: "https://example.com/register-techexpo",
        slideColor : '#EBF400',
        minTeamSize : '1',
        maxTeamSize : '3',
    }
    ,
    {
        title: "Majo Aaai",
        criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rules: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        teamSize: "Up to 4 members",
        description: "Welcome to TechExpo 2024, where innovation meets collaboration! Join us for a thrilling showcase of cutting-edge technologies, inspiring presentations, and a platform to connect with like-minded tech enthusiasts. Whether you're a seasoned professional, a budding developer, or simply curious about the latest trends, TechExpo is the place to be.",
        tagline: "Explore the Future of Technology",
        imageLink: "robo2.avif",
        sponsors: ["Company A", "Company B", "Company C"],
        registerLink: "https://example.com/register-techexpo",
        slideColor: '#F72798',
        minTeamSize : '1',
        maxTeamSize : '3',
    },
    {
        title: "Maje Lo",
        criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rules: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        teamSize: "Up to 4 members",
        description: "Welcome to TechExpo 2024, where innovation meets collaboration! Join us for a thrilling showcase of cutting-edge technologies, inspiring presentations, and a platform to connect with like-minded tech enthusiasts. Whether you're a seasoned professional, a budding developer, or simply curious about the latest trends, TechExpo is the place to be.",
        tagline: "Explore the Future of Technology",
        imageLink: "/robo1.jpg",
        sponsors: ["Company A", "Company B", "Company C"],
        registerLink: "https://example.com/register-techexpo",
        slideColor : '#7F27FF',
        minTeamSize : '1',
        maxTeamSize : '3',
    }
    ,
    {
        title: "Shivansh",
        criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rules: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        teamSize: "Up to 4 members",
        description: "Welcome to TechExpo 2024, where innovation meets collaboration! Join us for a thrilling showcase of cutting-edge technologies, inspiring presentations, and a platform to connect with like-minded tech enthusiasts. Whether you're a seasoned professional, a budding developer, or simply curious about the latest trends, TechExpo is the place to be.",
        tagline: "Explore the Future of Technology",
        imageLink: "/robo1.jpg",
        sponsors: ["Company A", "Company B", "Company C"],
        registerLink: "https://example.com/register-techexpo",
        slideColor : '#7F27FF',
        minTeamSize : '1',
        maxTeamSize : '3',
    }
    
]

export default function AvishkarPageTemplate(){
    const [current,setCurrent] = useState(0);
    return(
        <div>
            <Carousel current={current} setCurrent={setCurrent} data={dummyData}/>
        </div> 
    )
}