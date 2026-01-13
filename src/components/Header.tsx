import { useContext } from "react";

import {
  Divider,
  HeaderContainer,
  HeaderText,
  HeaderTextContainer,
  HeaderTitle,
  SubHeaderTitle,
} from "./styled/Header";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <HeaderContainer backgroundColor={theme.buttonBackground}>
        <HeaderTitle color={theme.color}>Cecilia Lepik</HeaderTitle>
        <SubHeaderTitle color={theme.color}>Front-End Developer</SubHeaderTitle>
        <Divider
          as={motion.div}
          color={theme.accentColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        ></Divider>

        <HeaderTextContainer>
          <HeaderText color={theme.color}>React</HeaderText>
          <HeaderText color={theme.color}>TypeScript</HeaderText>
          <HeaderText color={theme.color}>Vue</HeaderText>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};
