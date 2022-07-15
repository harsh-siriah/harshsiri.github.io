import ProjectsData from "../../../utils/ProjectsData";

export const ProjectModalDataKeys = {
  items: "items",
  id: "id",
  content: "content",
  title: "title",
  date: "data",
  technologies: "technologies",
  summary: "summary",
  image: "image",
  projectTitle: "project_title",
  projectData: "project_data",
};

export class ProjectDataHelper {
  static getProjectsArray() {
    return ProjectsData.items;
  }

  static getProjectCardsData(projectId) {
    const project = ProjectsData.data[projectId];

    return {
      id: project[ProjectModalDataKeys.id],
      title: project[ProjectModalDataKeys.projectTitle],
      technologies: project[ProjectModalDataKeys.technologies],
    };
  }

  static getProjectModalData(projectId) {
    const project = ProjectsData.data[projectId];

    return {
      id: project[ProjectModalDataKeys.id],
      title: project[ProjectModalDataKeys.projectTitle],
      technologies: project[ProjectModalDataKeys.technologies],
      summary: project[ProjectModalDataKeys.summary],
      content: project[ProjectModalDataKeys.projectData],
    };
  }
}
