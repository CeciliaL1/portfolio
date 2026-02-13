import styled from "styled-components";

interface ContactSectionProps {
  color?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export const ContactContainerStyle = styled.div<ContactSectionProps>`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
`;

export const ContactTitleStyle = styled.h2<ContactSectionProps>`
  color: ${(props) => props.color || "#000000"};
`;

export const ContactFormStyle = styled.form<ContactSectionProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ContactInputStyle = styled.input<ContactSectionProps>`
  width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${(props) => props.accentColor || "#000000"};
  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.color || "#000000"};
  background-color: ${(props) => props.secondaryColor || "#ffffff"};
  outline: none;

  &:hover {
    background-color: ${(props) => props.accentColor || "#000000"};
    opacity: 50%;
  }
`;

export const ContactTextAreaStyle = styled.textarea<ContactSectionProps>`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${(props) => props.accentColor || "#000000"};
  outline: none;

  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.color || "#000000"};
  background-color: ${(props) => props.secondaryColor || "#ffffff"};
  resize: vertical;
  min-height: 100px;

  &:hover {
    background-color: ${(props) => props.accentColor || "#000000"};
    opacity: 50%;
  }
`;
export const ContactButtonStyle = styled.button<ContactSectionProps>`
  padding: 10px 20px;
  margin: 10px 0;
  border: none;

  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.secondaryColor || "#ffffff"};
  background-color: ${(props) => props.accentColor || "#000000"};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ContactConfirmationStyle = styled.p<ContactSectionProps>`
  color: ${(props) => props.color || "#000000"};
  margin-top: 20px;
`;

/* Styled components for contact information section */

export const ContactInfoSectionStyle = styled.div<ContactSectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 20px;
  width: 100%;
`;

export const ContactInfoPstyle = styled.p<ContactSectionProps>`
  color: ${(props) => props.color || "#000000"};
`;

export const ContactInfoAstyle = styled.a<ContactSectionProps>`
  color: ${(props) => props.color || "#000000"};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContactInfoH3style = styled.h3<ContactSectionProps>`
  color: ${(props) => props.color || "#000000"};
  margin-bottom: 10px;
`;
export const ContactInfoContainerStyle = styled.div<ContactSectionProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContactInfoIconStyle = styled.span<ContactSectionProps>`
  color: ${(props) => props.accentColor || "#000000"};
  margin-right: 10px;
`;
