import styled from "styled-components";

interface IheaderProps {
  color?: string;
  backgroundColor?: string;
}

export const HeaderContainer = styled.header<IheaderProps>`
  margin: auto;
  margin-top: 50px;
  width: 70%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: rgba(191, 148, 182, 0.2) 0px 7px 29px 0px;
  border-radius: 12px;
`;

export const HeaderTitle = styled.h1<IheaderProps>`
  color: ${(props) => (props.color ? props.color : "black")};
  text-transform: uppercase;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 10px;
`;

export const SubHeaderTitle = styled.h2<IheaderProps>`
  color: ${(props) => (props.color ? props.color : "black")};

  font-size: 1.5;
  text-align: center;
`;

export const Divider = styled.hr<IheaderProps>`
  margin: auto;
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  opacity: 50%;
  border-top: 2px solid ${(props) => props.color || "black"};
  box-shadow: 0 2px 5px ${(props) => props.color || "black"};
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 60%;
  margin-top: 20px;
`;
export const HeaderText = styled.p<IheaderProps>`
  color: ${(props) => (props.color ? props.color : "black")};
  letter-spacing: 2px;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
`;
