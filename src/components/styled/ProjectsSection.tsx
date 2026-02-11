import styled from "styled-components";
interface IProjectsProps {
  color?: string;
  backgroundColor?: string;
  accentColor?: string;
}

export const ProjectSectionStyle = styled.div<IProjectsProps>`
  height: 500px;
  width: 80%;
  border-radius: 12px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin: auto;

  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ProjectCardStyle = styled.div<IProjectsProps>`
  padding: 20px;

  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectTitleStyle = styled.h2<IProjectsProps>`
  color: ${(props) => props.color};
  margin-bottom: 10px;
`;
export const ProjectDescriptionStyle = styled.p<IProjectsProps>`
  color: ${(props) => props.color};
  width: 400px;
`;
export const ProjectTechListStyle = styled.ul<IProjectsProps>`
  color: ${(props) => props.color};
`;
export const ProjectLinkStyle = styled.a<IProjectsProps>`
  color: ${(props) => props.accentColor || "#0000EE"};
  text-decoration: none;
  margin-top: 5px;
`;
export const ProjectImageStyle = styled.img`
  height: 150px;
  border-radius: 8px;
  margin-top: 10px;
`;
export const ProjectGithubLinkStyle = styled.a<IProjectsProps>`
  color: ${(props) => props.accentColor || "#0000EE"};
`;
export const ProjectStatusStyle = styled.span<IProjectsProps>`
  color: ${(props) => props.accentColor || "#000000"};

  margin-top: 5px;
`;

export const ProjectDividerStyle = styled.hr<IProjectsProps>`
  width: 80%;
  margin: 20px auto;
  color: ${(props) => props.accentColor || "#000000"};
`;
