import ProjectNames from "../constants/ProjectNames";
import TechnologyNames from "../constants/TechnologyNames";
import VrHangoutsContent from "./ProjectContent/VrHangouts";

const ProjectData = {
  items: [
    ProjectNames.Petronus,
    ProjectNames.VrHangouts,
    // ProjectNames.AppLogger,
    // ProjectNames.SpellABee,
  ],
  data: {
    [ProjectNames.VrHangouts]: {
      id: ProjectNames.VrHangouts,
      project_title: "VR Hangouts",
      technologies: [TechnologyNames.Unity],
      summary:
        "During the peak of the Covid-19 pandemic, all professional and casual meetings had to be held through video calling applications. However, a shortcoming of video based technologies is that they can lack immersion. I focused my B.Tech project on remedying this issue by using Virtual Reality, 3D Avatar Customisation and voice chat for providing users with interactive 3D environments for hosting their meetings.",
      project_data: VrHangoutsContent,
    },
    [ProjectNames.Petronus]: {
      id: ProjectNames.Petronus,
      project_title: "PETronus",
      technologies: [TechnologyNames.Android],
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

export default ProjectData;
