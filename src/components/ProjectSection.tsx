import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  ProjectCardStyle,
  ProjectDescriptionStyle,
  ProjectImageStyle,
  ProjectLinkStyle,
  ProjectSectionStyle,
  ProjectStatusStyle,
  ProjectTitleStyle,
} from "./styled/ProjectsSection";
import type { IProject } from "../models/Projects";

export const ProjectSection = () => {
  const { theme } = useContext(ThemeContext);

  const projects: IProject[] = [
    {
      id: 1,
      name: "Project Alpha",
      description: "A cutting-edge project focused on AI development.",
      technologies: ["Python", "TensorFlow", "Keras"],
      deployed: true,
      link: "",
      status: "Done",
      image: "project_alpha.png",
      github: "",
    },
    {
      id: 2,
      name: "Project beta",
      description: "A cutting-edge project focused on AI development.",
      technologies: ["Python", "TensorFlow", "Keras"],
      deployed: true,
      link: "",
      status: "In Progress",
      image: "project_alpha.png",
      github: "",
    },
  ];

  return (
    <>
      <ProjectSectionStyle
        color={theme.color}
        backgroundColor={theme.secondaryBgColor}
      >
        {projects.map((project) => (
          <ProjectCardStyle key={project.id} accentColor={theme.accentColor}>
            <div>
              <ProjectTitleStyle color={theme.color}>
                {project.name}
              </ProjectTitleStyle>
              <ProjectDescriptionStyle color={theme.color}>
                {project.description}
              </ProjectDescriptionStyle>
            </div>
            <div>
              <ProjectImageStyle src={project.image} alt={project.name} />
              <ProjectStatusStyle
                accentColor={
                  project.status == "Done" ? theme.accentColor : "#ff003c"
                }
              >
                Status: {project.status}
              </ProjectStatusStyle>

              {project.deployed && (
                <ProjectLinkStyle
                  href={project.link}
                  accentColor={theme.accentColor}
                >
                  View Project
                </ProjectLinkStyle>
              )}
              <ProjectLinkStyle
                href={project.github}
                accentColor={theme.accentColor}
              >
                View on GitHub
              </ProjectLinkStyle>
            </div>
          </ProjectCardStyle>
        ))}
      </ProjectSectionStyle>
    </>
  );
};
