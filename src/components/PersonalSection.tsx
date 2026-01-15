import { useContext } from "react";
import {
  ImageContainerStyle,
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
          initial={{ boxShadow: "0px 7px 18px 0px  rgba(191, 148, 182, 0.2)" }}
          animate={{ boxShadow: "0px 14px 58px 0px  rgba(191, 148, 182, 0.5)" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <PersonalSectionStyle color={theme.color}>
          <p>
            Hi! I'm Cecilia, a passionate Front-End Developer with a knack for
            creating engaging web experiences. I specialize in React,
            TypeScript, and Vue, and I'm always eager to learn new technologies
            and improve my skills. Welcome to my portfolio!
          </p>
        </PersonalSectionStyle>
      </section>
    </>
  );
};
