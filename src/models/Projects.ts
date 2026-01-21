export interface IProject {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  deployed: boolean;
  link: string;
  status: string;
  image: string;
  github: string;
}
