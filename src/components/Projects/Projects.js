import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";
import sayin from "../../Assets/Projects/Sayin-Chat-App.png";
import MusicPlayer from "../../Assets/Projects/Music-Player.png";
import WeatherReport from "../../Assets/Projects/Weather-Report-App.png";
import Jarvis from "../../Assets/Projects/project-jarvis.png";
import Snake from "../../Assets/Projects/Project-Snake.png";
import Portfolios from "../../Assets/Projects/portfolio-influencer.png";
import E_commerce from "../../Assets/Projects/e-commerce.png";
import News from "../../Assets/Projects/news_application.jpg";
import Weather from "../../Assets/Projects/weather_app.jpg";
import Koalatale from "../../Assets/Projects/koalatale.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my <strong className="purple"> Projects </strong> I'have{" "}
          <span className="purple"> worked.</span>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Koalatale}
              isBloag={false}
              title="Koalatale"
              description=" I designed and developed a web application using the Nextjs and Flutter for frontend, Node and Express for backend and MongoDB as database. The kaoalatale is story collaboration application in which writers can write and contribute on the other's story more like git and github."
              ghLink="https://github.com/raunak-dows17/koalatale_web"
              demoLink="https://koalatale.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={sayin}
              isBloag={false}
              title="Sayin Chat"
              description=" I designed and developed a web application using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and integrated the Socket.IO library to provide a real-time, interactive chat experience. The application includes features for one-on-one personalized chat, group chat, as well as user authentication with login and signup functionality."
              ghLink="https://github.com/raunak-dows17/Realtime-Chat-Application"
              demoLink="https://sayin.up.railway.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={MusicPlayer}
              isBloag={false}
              title="Music Player"
              description="I designed and developed a music player web application using HTML, CSS, and JavaScript. This application is specifically dedicated to the popular Indian playback singer, Arijit Singh, and features a collection of over 60 songs by the artist. this project demonstrates my proficiency in HTML, CSS, and JavaScript, showcasing my ability to create a visually appealing and functional music player web application."
              ghLink="https://github.com/raunak-dows17/Arijit_Singh_Playlist.github.io"
              demoLink="https://arijit-singh-music-player.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={E_commerce}
              isBloag={false}
              title="E-Commerce"
              description='I conceptualized and developed an e-commerce website called "Wednesday Market" using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Wednesday Market is a comprehensive online platform that specializes in fashion products for all genders and seasons. The website offers a seamless shopping experience, complete with user authentication, signup/login functionality, and UPI payment gateways.'
              ghLink="https://github.com/raunak-dows17/wm_e-commerce"
              // demoLink="https://wm-e-commerce.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={News}
              isBloag={false}
              title="News Application"
              description="I have designed and created a versatile news application using React Native, integrated with the News API. This dynamic application provides users with a comprehensive selection of news categories, including All, Health, Technology, Business, and Sports. The intuitive user interface provides a smooth and immersive experience, making it easy for users to navigate through the various news categories and stay updated with the latest happenings."
              ghLink="https://github.com/raunak-dows17/News-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Weather}
              isBloag={false}
              title="Weather Application"
              description="I have designed and developed a comprehensive weather application using React Native, integrated with the OpenWeather API. This application provides users with real-time weather information and forecasts for various locations worldwide. The user-friendly interface and intuitive design make it easy for users to quickly obtain weather updates and plan their activities accordingly. The app displays essential weather details such as temperature, humidity, wind speed, and atmospheric conditions."
              ghLink="https://github.com/raunak-dows17/weather"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={WeatherReport}
              isBloag={false}
              title="Weather Report"
              description="I have successfully developed a dynamic weather application using ReactJS, integrated with the OpenWeather API. This project provides users with up-to-date weather information for any location worldwide, offering a seamless and intuitive user experience. Using the ReactJS framework allowed me to create a responsive and interactive user interface, ensuring that the weather application is accessible and visually appealing across various devices and screen sizes. The application fetches real-time weather data from the OpenWeather API, enabling users to obtain accurate weather forecasts for their desired location."
              ghLink="https://github.com/raunak-dows17/Weather-Report"
              demoLink="https://weather-report-chi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Portfolios}
              isBloag={false}
              title="Portfolios"
              description="As part of a group project focused on creating portfolios for users from different fields, I made significant contributions to the development of four distinct portfolios using HTML, CSS, and JavaScript. Each portfolio catered to a specific profession, including a Social Media Influencer, Doctor, Web Developer, and an NGO. I designed and implemented a visually appealing and interactive website that effectively showcased the influencer's personal brand and content."
              ghLink="https://github.com/raunak-dows17/Influencer_porfolio.github.io"
              demoLink="https://raunak-dows17.github.io/Influencer_porfolio.github.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Jarvis}
              isBloag={false}
              title="Jarvis Personal Assistant"
              description="This is the intelligent Personal Assistant which provides voice recoginstion and response according to your command. Its get query from your voice it match the givrn queris with your voice and response acci=ording to that. I used python to make this amazing application. You can access code from github link"
              ghLink="https://github.com/raunak-dows17/Jarvis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Snake}
              isBloag={false}
              title="Dr. Snake Game"
              description="This is the simple old keypads phone like snake Game you can controls snake movements by your arrows keys in the keyboard. I used Python to make this application. This is the very basic Project I make when I started learning Python. You can access code from Github link."
              ghLink="https://github.com/raunak-dows17/Dr.Snake"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
