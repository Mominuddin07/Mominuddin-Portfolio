import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
// import Tilt from 'react-tilt';
import Tilt from 'react-parallax-tilt'; 

import { styles } from "../styles";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";


import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full steel-gray-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-200 text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I’m Mohammed Mominuddin, A Software Engineering graduate student at San Jose State University, focusing on Cloud and Mobile systems. I enjoy building things that feel simple for users but are powered by scalable, real-time tech. <br /><br />

Over the last couple of years, I’ve worked on projects ranging from a crypto dashboard that tracks 100+ currencies live, to a sign language translation app with 3D animations for accessibility. I’ve also worked on a Java based library management system and contributed to an IoT agriculture startup website. Each project taught me how to combine clean design with solid engineering. On the technical side, I work with React, Node.js, Java, Python, Firebase, and Docker, and I’ve been diving deeper into cloud technologies like AWS, IBM Cloud ETC... <br /><br />

Feel free to reach out if you’d like to chat, collaborate, or just connect.an opportunity to grow and contribute within a forward-thinking technology company.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
