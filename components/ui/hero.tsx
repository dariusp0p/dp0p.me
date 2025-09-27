import React from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "./aurora-background";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import SocialButton from "./social-button";

const Hero = () => {
  return (
    <AuroraBackground>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-4 pt-24 md:pt-4">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <div className="border border-neutral-600/[0.2] bg-white dark:bg-transparent rounded-full p-1">
            <img
              src="/me.jpeg"
              alt="Me"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="md:ml-8 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-4 dark:text-white text-neutral-600 select-text">
            Darius Pop
          </h1>
          <p className="text-2xl mb-2 dark:text-white text-neutral-600 select-text">
            Computer Science Student
          </p>
          <p className="text-2xl mb-6 dark:text-white text-neutral-600 select-text">
            Future Software Engineer{" "}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <SocialButton
              icon={<FaEnvelope />}
              href="mailto:dariuspop2005@gmail.com"
              name="Email"
            />
            <SocialButton
              icon={<FaLinkedin />}
              href="https://www.linkedin.com/in/darius-pop-2a0192353"
              target="_blank"
              rel="noopener noreferrer"
              name="LinkedIn"
            />
            <SocialButton
              icon={<FaGithub />}
              href="https://github.com/dariusp0p"
              target="_blank"
              rel="noopener noreferrer"
              name="GitHub"
            />
            <SocialButton
              icon={<FaDownload />}
              href="/resume.pdf"
              download
              name="Resume"
            />
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;
