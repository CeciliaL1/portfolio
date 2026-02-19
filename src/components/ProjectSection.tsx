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
      id: 2,
      name: "The Zoo",
      description:
        "A React and Typescript website for a zoo. The website is a single page application that displays information about the animals in the zoo. The website is deployed on GitHub Pages. You can feed the animals and keep get an overwiew of witch animals you have fed and which ones you still need to feed.",
      technologies: ["React", "Typescript", "CSS"],
      deployed: true,
      link: "https://cecilial1.github.io/the-zoo/",
      status: "Done",
      image: "/the-zoo-prtsc.png",
      isOnGithub: true,
      github: "https://github.com/CeciliaL1/the-zoo",
    },
    {
      id: 3,
      name: "Tic Tac Toe",
      description:
        "A Vue.js and Typescript website for a tic tac toe game. The website is deployed on GitHub Pages. You can play against against a friend.",
      technologies: ["Vue.js", "Typescript", "CSS"],
      deployed: true,
      link: "https://cecilial1.github.io/vue-tic-tac-toe/",
      status: "Done",
      image: "/tic-tac-toe-prtsc.png",
      isOnGithub: true,
      github: "https://github.com/CeciliaL1/vue-tic-tac-toe",
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
                    {project.link}
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
