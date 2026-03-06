import styled from "styled-components";

interface IPersonalStyleProps {
  color?: string;
  width?: string;
  accentColor?: string;
  font?: string;
}

export const ImageContainerStyle = styled.div`
  background-image: url("/cecilia.jpg");
  background-position: center;
  background-size: cover;
  height: 250px;
  width: 250px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const PersonalSectionStyle = styled.section<IPersonalStyleProps>`
  color: ${(props) => props.color || "#000000"};
  width: ${(props) => props.width || "600px"};
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    p {
      margin: 30px;
    }
  }
`;

export const PersonalSectionh3Style = styled.h3<IPersonalStyleProps>`
  color: ${(props) => props.accentColor || "#000000"};
`;

export const PersonalSectionPStyle = styled.p<IPersonalStyleProps>`
  color: ${(props) => props.color || "#000000"};
  margin-top: 20px;
  line-height: 1.5;
  font-size: 1.1rem;
`;

export const PersonalSectionSpanStyle = styled.span<IPersonalStyleProps>`
  color: ${(props) => props.accentColor || "#000000"};
  font-weight: bold;
  font-family: ${(props) => props.font || "inherit"};
`;
