import React from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "../AuroraBackground";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import ProfilePicture from "../ProfilePicture";
import SocialButton from "../SocialButton";
import AboutMeCard from "../AboutMeCard";

const Hero = () => {
  return (
    <AuroraBackground>
      <section
        id="hero"
        className="flex flex-col items-center gap-8 justify-center min-h-screen xl:min-h-[60vh] p-4 lg:p-64 lg:pb-28 pt-28 lg:pt-40 2xl:pt-24"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center p-4">
            <ProfilePicture src="/me.jpeg" alt="Darius Pop" />
            <div className="md:ml-8 text-center md:text-left">
              <h1 className="text-6xl font-bold mb-4 dark:text-white text-neutral-600 select-text">
                Darius Pop
              </h1>
              <p className="text-2xl mb-2 dark:text-white text-neutral-600 select-text">
                Computer Science Student
              </p>
              <p className="text-2xl mb-4 dark:text-white text-neutral-600 select-text">
                Future Software Engineer{" "}
              </p>
              <p className="text-l mb-6 dark:text-neutral-300 text-neutral-500 select-text">
                🇷🇴 Cluj-Napoca, Romania{" "}
              </p>
            </div>
          </div>

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
        <AboutMeCard
          paragraphs={[
            "Second-year CS student at UBB Cluj-Napoca with early experience in web development and software engineering. I have developed and deployed web and desktop applications, covering design, implementation, and deployment.",
            "Currently exploring software architecture principles and modern technologies, with a growing focus on AI/ML. Seeking an internship where I can contribute production-quality code and build data-driven features while learning from strong engineering practices.",
            "Outside of tech, I stay active through music and martial arts. As Music Director in my local church band, I play piano and coordinate live performances, which has strengthened my discipline, teamwork, and focus under pressure. I have also practiced Muay Thai and Karate, experiences that taught me resilience, self-discipline, and perseverance, qualities I carry into both personal and professional challenges.",
          ]}
        />
      </section>
    </AuroraBackground>
  );
};

export default Hero;
