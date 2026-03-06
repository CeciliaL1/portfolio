import { useContext } from "react";
import {
  ImageContainerStyle,
  PersonalSectionh3Style,
  PersonalSectionPStyle,
  PersonalSectionSpanStyle,
  PersonalSectionStyle,
} from "./styled/PersonalSection";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const PersonalSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="personal-section">
        <ImageContainerStyle
          as={motion.img}
          initial={{ boxShadow: `0px 0px 0px 0px ${theme.accentColor}` }}
          animate={{
            boxShadow: `0px 0px 24px  ${theme.accentColor} `,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <PersonalSectionStyle color={theme.color} width={"400px"}>
          <PersonalSectionh3Style accentColor={theme.accentColor}>
            Hi, I’m Cecilia
          </PersonalSectionh3Style>
          <PersonalSectionPStyle color={theme.color}>
            a Front-end developer who loves turning ideas into structured,
            user-friendly web experiences.
          </PersonalSectionPStyle>
          <PersonalSectionPStyle color={theme.color}>
            I’m naturally curious, a fast learner, and motivated by truly
            understanding how things work — both on the frontend and behind the
            scenes.
          </PersonalSectionPStyle>
        </PersonalSectionStyle>
      </section>
      <section className="personal-section">
        <PersonalSectionStyle color={theme.color} width={"900px"}>
          <PersonalSectionPStyle color={theme.color} font={"georgia"}>
            I studied Frontend Development remotely at Medieinstitutet, where I
            built a strong foundation in modern web development and agile
            workflows. During my education, I worked with technologies such as{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              JavaScript
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              TypeScript
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              React
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              Vue
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              Node.js
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              APIs
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              SQL
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              MongoDB
            </PersonalSectionSpanStyle>
            ,
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              Sass
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              CSS
            </PersonalSectionSpanStyle>
            ,{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              HTML
            </PersonalSectionSpanStyle>
            , as well as testing tools like{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              Cypress
            </PersonalSectionSpanStyle>{" "}
            and{" "}
            <PersonalSectionSpanStyle accentColor={theme.accentColor}>
              Jest
            </PersonalSectionSpanStyle>
            .
            <PersonalSectionPStyle color={theme.color} font={"georgia"}>
              I also gained experience collaborating through GitHub and working
              in agile teams. During my first internship (LIA) at Hjältebyrån
              AB, I worked with WordPress, PHP, and JavaScript, which gave me
              insight into maintaining and developing real-world client
              projects. My second internship at Posh Industries focused more on
              modern frontend development using TypeScript, React, and Vue —
              strengthening my skills in building structured, scalable
              applications.
            </PersonalSectionPStyle>{" "}
            <PersonalSectionPStyle color={theme.color} font={"georgia"}>
              My current goal is to deepen my frontend expertise while expanding
              my backend knowledge to better understand the full lifecycle of an
              application. Before transitioning into tech, I worked as an
              assistant nurse and skin therapist. Those roles strengthened my
              communication skills, attention to detail, and ability to work
              closely with people — qualities I now bring into my work as a
              developer.
            </PersonalSectionPStyle>
          </PersonalSectionPStyle>
        </PersonalSectionStyle>
      </section>
    </>
  );
};
