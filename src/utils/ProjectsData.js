import ProjectNames from "../constants/ProjectNames";
import TechnologyNames from "../constants/TechnologyNames";
import VrHangoutsContent from "./ProjectContent/VrHangouts";
import PETronusContent from "./ProjectContent/PETronus";
import CanaryContent from "./ProjectContent/Canary";
import ProjectsCheckItOutMap from "./ProjectsCheckItOutMap";

const ProjectData = {
  items: [
    ProjectNames.Petronus,
    ProjectNames.VrHangouts,
    ProjectNames.SpellABee,
    ProjectNames.Canary,
  ],
  data: {
    [ProjectNames.SpellABee]: {
      id: ProjectNames.SpellABee,
      title: "Spell A Bee",
      technologies: [TechnologyNames.ReactNative],
      summary: `Spell-A-Bee is a hackathon project by our Team "Detectors" during our Work together Week at WeWorks, Pune. The hackathon consisted of 7 teams competing over a span of 4 days. The aim of our project was to explore the usage and implementation of object detection and OCR (Optical Character Recognition) in React Native.`,
      content: VrHangoutsContent,
    },
    [ProjectNames.VrHangouts]: {
      id: ProjectNames.VrHangouts,
      title: "VR Hangouts",
      technologies: [TechnologyNames.Unity],
      summary:
        "During the peak of the Covid-19 pandemic, all professional and casual meetings had to be held through video calling applications. However, a shortcoming of video based technologies is that they can lack immersion. I focused my B.Tech project on remedying this issue by using Virtual Reality, 3D Avatar Customisation and voice chat for providing users with interactive 3D environments for hosting their meetings.",
      content: VrHangoutsContent,
    },
    [ProjectNames.Petronus]: {
      id: ProjectNames.Petronus,
      title: "PETronus",
      technologies: [TechnologyNames.Android, TechnologyNames.Firebase],
      summary:
        "PETronus is an app for facilitating adooption of rescued/stray indie cats and dogs.",
      content: PETronusContent,
      project_check_it_out: ProjectsCheckItOutMap[ProjectNames.Petronus],
    },
    [ProjectNames.Canary]: {
      id: ProjectNames.Canary,
      title: "Canary",
      subtitle: "The Incognito Mode of Twitter",
      technologies: [TechnologyNames.ReactNative, TechnologyNames.Twitter],
      summary:
        "A privacy-focused app that allows you to discover & bookmark Twitter content while keeping all your data private without tracking your actions.",
      content: CanaryContent,
      project_check_it_out: ProjectsCheckItOutMap[ProjectNames.Canary],
    },
  },
};

export default ProjectData;
