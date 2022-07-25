import ProjectNames from "../constants/ProjectNames";
import TechnologyNames from "../constants/TechnologyNames";
import VrHangoutsContent from "./ProjectContent/VrHangouts";

const ProjectData = {
  items: [
    ProjectNames.Petronus,
    ProjectNames.VrHangouts,
    // ProjectNames.AppLogger,
    ProjectNames.SpellABee,
  ],
  data: {
    [ProjectNames.SpellABee]: {
      id: ProjectNames.SpellABee,
      project_title: "Spell A Bee",
      technologies: [TechnologyNames.ReactNative],
      summary: `Spell-A-Bee is a hackathon project by our Team "Detectors" during our Work together Week at WeWorks, Pune. The hackathon consisted of 7 teams competing over a span of 4 days. The aim of our project was to explore the usage and implementation of object detection and OCR (Optical Character Recognition) in React Native.`,
      project_data: VrHangoutsContent,
    },
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

export default ProjectData;
