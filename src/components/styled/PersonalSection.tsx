import styled from "styled-components";

interface IPersonalStyleProps {
  color?: string;
}

export const ImageContainerStyle = styled.div`
  background-image: url("/cecilia.jpg");
  background-position: center;
  background-size: cover;
  height: 250px;
  width: 250px;
  border-radius: 50%;
`;

export const PersonalSectionStyle = styled.section<IPersonalStyleProps>`
  color: ${(props) => props.color || "#000000"};
  width: 400px;
  letter-spacing: 3px;
`;
