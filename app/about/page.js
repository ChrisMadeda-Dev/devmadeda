import React from "react";
import AboutHero from "./_components/AboutHero";
import MyStory from "./_components/MyStory";
import Skills from "./_components/Skills";
import MyApproach from "./_components/MyApproach";
import CallToAction from "../components/CallToAction";

const About = () => {
  return (
    <>
      <AboutHero />
      <MyApproach />
      <Skills />
      <MyStory />
      <CallToAction/>
    </>
  );
};

export default About;
