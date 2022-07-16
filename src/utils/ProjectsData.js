import ProjectNames from "../constants/ProjectNames";
import TechnologyNames from "../constants/TechnologyNames";

export default {
  items: [
    ProjectNames.Petronus,
    // ProjectNames.AppLogger,
    // ProjectNames.SpellABee,
  ],
  data: {
    [ProjectNames.Petronus]: {
      id: ProjectNames.Petronus,
      project_title: "PETronus",
      technologies: [TechnologyNames.Android, TechnologyNames.Firebase],
      summary: "",
      project_data: [
        {
          title: "Section Title",
          content: <p>Lorem Ipsum is simply dummy industry.</p>,
        },
        {
          title: "Section Title",
          content: <p>Hello</p>,
        },
      ],
    },
  },
};
