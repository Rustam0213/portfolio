import React from "react";
import Card from "./card";

const projects = [
  {
    title: "Luxury Car Slider",
    description: "This project is a visually stunning slider showcasing luxurious cars. It features high-quality images and smooth transitions that provide an immersive experience. The design is elegant, with attention to detail that highlights each car's unique features. This slider is perfect for any website looking to impress visitors with a touch of luxury and sophistication.",
    image: "filestore/car-slider.png",
    link: "https://rustam0213.github.io/bestcars/"
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A classic Tic-Tac-Toe game brought to life with sleek design and interactive features. This project demonstrates my ability to create engaging and entertaining web applications. The game is fully functional, offering a fun and intuitive experience for players of all ages. It also showcases my skills in JavaScript and game logic implementation.",
    image: "filestore/tic-tac.png",
    link: "https://rustam0213.github.io/tic-tac-toe/"
  },
  {
    title: "Single Page Application",
    description: "This single-page application (SPA) is designed for seamless user experience. It features dynamic content loading, smooth scrolling, and a clean, modern layout. The SPA is optimized for speed and performance, ensuring a quick and responsive interface. This project highlights my expertise in building efficient and user-centric web applications.",
    image: "filestore/spa.png",
    link: "https://rustam0213.github.io/Course_Website/"
  }
];

function MyWorks() {
  return (
    <div className="my-works">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}

export default MyWorks;
