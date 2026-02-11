import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  ProjectCardStyle,
  ProjectDescriptionStyle,
  ProjectDividerStyle,
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
      name: "Torsten Höglund",
      description:
        "A Wordpress and vue.js website for a man who invented roofdim. A website to read about him and his books. Customers can also log in and access their liscenses for roofdim.",
      technologies: ["Wordpress", "Vue.js", "PHP"],
      deployed: true,
      link: "https://www.torstenh.se.portside.at",
      status: "Done",
      image: "/torstenh-prtsc.png",
      isOnGithub: false,
      github: "",
    },
    {
      id: 1,
      name: "Torsten Höglund",
      description:
        "A Wordpress and vue.js website for a man who invented roofdim. A website to read about him and his books. Customers can also log in and access their liscenses for roofdim.",
      technologies: ["Wordpress", "Vue.js", "PHP"],
      deployed: true,
      link: "https://www.torstenh.se.portside.at",
      status: "Done",
      image: "/torstenh-prtsc.png",
      isOnGithub: false,
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
          <>
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
                    target="_blank"
                    accentColor={theme.accentColor}
                  >
                    www.tostenh.portsite.at
                  </ProjectLinkStyle>
                )}
                {project.isOnGithub && (
                  <ProjectLinkStyle
                    href={project.github}
                    accentColor={theme.accentColor}
                  >
                    View on GitHub
                  </ProjectLinkStyle>
                )}
              </div>
            </ProjectCardStyle>
            <ProjectDividerStyle accentColor={theme.accentColor} />
          </>
        ))}
      </ProjectSectionStyle>
    </>
  );
};
