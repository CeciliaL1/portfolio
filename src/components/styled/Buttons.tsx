import styled from "styled-components";

interface ISwitchProps {
  buttonbgcolor: string;
  accentcolor: string;
  isDarkMode: boolean;
}
export const Switch = styled.button<ISwitchProps>`
  height: 25px;
  width: 45px;
  border: 1px solid ${(props) => props.buttonbgcolor};
  border-radius: 30px;
  background-color: ${(props) => props.buttonbgcolor};
  cursor: pointer;
  display: flex;

  align-items: center;
  justify-content: ${(props) => (props.isDarkMode ? "flex-end" : "flex-start")};

  &:hover {
    background-color: transparent;
    border: 1px solid ${(props) => props.accentcolor};
  }
`;
