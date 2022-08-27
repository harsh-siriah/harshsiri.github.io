import ProjectsData from "../../../utils/ProjectsData";

export const ProjectModalDataKeys = {
  items: "items",
  id: "id",
  content: "content",
  title: "title",
  subtitle: "subtitle",
  date: "data",
  technologies: "technologies",
  summary: "summary",
  image: "image",
  projectCheckItOut: "project_check_it_out",
};

export class ProjectDataHelper {
  static getProjectsArray() {
    return ProjectsData.items;
  }

  static getProjectCardsData(projectId) {
    const project = ProjectsData.data[projectId];

    return {
      id: project[ProjectModalDataKeys.id],
      title: project[ProjectModalDataKeys.title],
      technologies: project[ProjectModalDataKeys.technologies],
    };
  }

  static getProjectModalData(projectId) {
    const project = ProjectsData.data[projectId];

    return project;
  }
}
