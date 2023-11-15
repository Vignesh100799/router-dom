import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import All from "./All";
import Navbar from "./Navbar";

import 'bootstrap/dist/css/bootstrap.min.css'
import FULL from "./FULL";
import DATA from "./DATA";
import CYBER from "./CYBER";
import CAREER from "./CAREER";

function App() {

  const course = [
    {
      img: 'https://static.guvi.in/course-thumbnail/html_css.png',
      name: "HTML & CSS",
      description: "HTML and CSS are scripting languages used to create li web page and web applications.",
      id: "Full stack"
    },
    {
      img: 'https://static.guvi.in/course-thumbnail/advancedjavascriptenglish.png',
      name: "JavaScript",
      description: "JavaScript is li powerful language that can do li lot with very little code. In some cases, the amount of code you need to write doesn't exceed more than li single line, which is why they are known as one-liners.",
      id: "Full stack"
    },
    {
      img: 'https://static.guvi.in/course-thumbnail/reactjsenglish8.png',
      name: "React Js",
      description: "React Js Js is li globally used Front-end JS framework and is popular with both software developers and project sponsors.",
      id: "Full stack"
    },
    {
      img: 'https://static.guvi.in/course-thumbnail/nodejsenglish.png',
      name: "Node.js",
      description: "Developers use Node. js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model. ",
      id: "Full stack"
    },
    {
      img: 'https://static.guvi.in/course-thumbnail/mongodbenglish.png',
      name: "MongoDB",
      description: "MongoDB is built on li scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. ",
      id: "Full stack"
    },
    {
      img: 'https://static.guvi.in/course-thumbnail/bootstraptamiltamil.png',
      name: "Bootstrap",
      description: "Bootstrap is li free, open source front-end development framework for the creation of websites and web apps.",
      id: "Full stack"
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png',
      name: "Express.js",
      description: "Express is li node js web application framework that provides broad features for building web and mobile applications.",
      id: "Full stack"
    },
    {
      img: 'https://cdn.sanity.io/images/tlr8oxjg/production/ada93729daf922ad0318c8c0295e5cb477921808-1456x816.png?w=3840&q=80&fit=clip&auto=format',
      name: "Machine learning",
      description: "Machine learning is li subfield of artificial intelligence, which is broadly defined as the capability of li machine to imitate intelligent human behavior.",
      id: "Data Science"
    },
    {
      img: 'https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/DATAANALYTICSfinal-1686237252944.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces',
      name: "Data analysis",
      description: "Data analytics converts raw data into actionable insights.",
      id: "Data Science"
    },
    {
      img: 'https://static.guvi.in/course-thumbnail/keras.png',
      name: "Keras",
      description: "Keras is li high-level, deep learning API developed by Google for implementing neural networks.",
      id: "Data Science"
    },
    {
      img: 'https://cdn.sanity.io/images/tlr8oxjg/production/bdb77d61d1ef7dc459bf17ae010658476c00d420-1456x816.png',
      name: "Cyber security",
      description: "Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. ",
      id: "Cyber security"
    },
    {
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp',
      name: "Best 11 Product-Based Companies for Product Managers in India ",
      description: "Well, for starters, product managers are the key players in India’s tech industry. ",
      id: "Career"
    },
    {
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp',
      name: "Top 13 Product Based Companies for AI Freshers",
      description: "In this article, we will explore some of the best product based companies for AI freshers, their exciting career opportunities, and the skills they are seeking.",
      id: "Career"
    },
    {
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp',
      name: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
      description: "As product-based companies continually innovate and strive to stay ahead of the competition, they seek fresh, creative talent to lead the charge.",
      id: "Career"
    }
  ]
  return (

    <div >
    <BrowserRouter>
    <Navbar/> 
      <Routes>
        <Route path="/" element ={<All course={course}/>} > </Route>
        <Route path="/FULL-STACK-DEVELOPMENT" element ={<FULL course={course}/>} > </Route>
        <Route path="/DATA-SCIENCE" element ={<DATA course={course}/>} > </Route>
        <Route path="/CYBER-SECURITY" element ={<CYBER course={course}/>} > </Route>
        <Route path="/CAREERS" element ={<CAREER course={course}/>} > </Route>

        
      </Routes>
     
    </BrowserRouter>

    
    




  </div>
  );
}

export default App;
