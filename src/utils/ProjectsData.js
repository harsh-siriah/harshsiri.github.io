import ProjectNames from "../constants/ProjectNames";
import TechnologyNames from "../constants/TechnologyNames";
import VrHangoutsContent from "./ProjectContent/VrHangouts";
import PETronusContent from "./ProjectContent/PETronus";
import CanaryContent from "./ProjectContent/Canary";
import ProjectsCheckItOutMap from "./ProjectsCheckItOutMap";
import SpellABeeContent from "./ProjectContent/Spell-A-Bee";
import AppLoggerContent from "./ProjectContent/AppLogger";
import BridgeContent from "./ProjectContent/Bridge";
import KnobContent from "./ProjectContent/Knob";
import MoxieContent from "./ProjectContent/Moxie";

const ProjectData = {
  items: [

    ProjectNames.Bridge,
    ProjectNames.Petronus,
    ProjectNames.Knob,
    ProjectNames.Moxie,
    ProjectNames.VrHangouts,
    ProjectNames.Canary,
    ProjectNames.AppLogger,
    ProjectNames.SpellABee,
  ],
  data: {
    [ProjectNames.SpellABee]: {
      id: ProjectNames.SpellABee,
      title: "Spell A Bee",
      technologies: [TechnologyNames.ReactNative],
      summary: `Spell-A-Bee is a hackathon project by our Team "Detectors" during our Work together Week at WeWorks, Pune. The hackathon consisted of 7 teams competing over a span of 4 days. The aim of our project was to explore the usage and implementation of object detection and OCR (Optical Character Recognition) in React Native.`,
      content: SpellABeeContent,
      project_check_it_out: ProjectsCheckItOutMap[ProjectNames.SpellABee],
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
    [ProjectNames.AppLogger]: {
      id: ProjectNames.AppLogger,
      title: "AppLogger",
      subtitle: "React Native library to backtrace your testing steps",
      technologies: [
        TechnologyNames.Css,
        TechnologyNames.ReactNative,
        TechnologyNames.Html,
      ],
      summary:
        "React Native library to help you and your team backtrace testing steps, and get session details and device information. Securely!",
      content: AppLoggerContent,
      project_check_it_out: ProjectsCheckItOutMap[ProjectNames.AppLogger],
    },
    [ProjectNames.Bridge]: {
      id: ProjectNames.Bridge,
      title: "Bridge",
      subtitle: "Helping pet owners say goodbye",
      technologies: [
        TechnologyNames.Android,
        TechnologyNames.iOS,
      ],
      summary:
        "Introducing Bridge – your trusted companion in navigating the sensitive journey of pet end-of-life care. Born from a collective desire to ease the emotional burden of making difficult decisions for beloved pets, Bridge is more than just an app – it's a beacon of support, understanding, and compassion during challenging times.",
      content: BridgeContent,
      project_check_it_out: ProjectsCheckItOutMap[ProjectNames.Bridge],
    },
    [ProjectNames.Knob]: {
      id: ProjectNames.Knob,
      title: "The Knob",
      subtitle: "Simplifying Your Vintage Hardware Transactions",
      technologies: [
        TechnologyNames.Internet
      ],
      summary:
        "Developed \"The Knob,\" an online platform that connects carpenters with vintage hardware suppliers globally, promoting sustainable historic property restoration.",
      content: KnobContent,
      project_check_it_out: ProjectsCheckItOutMap[ProjectNames.Knob],
    },
    [ProjectNames.Moxie]: {
      id: ProjectNames.Moxie,
      title: "Moxie",
      subtitle: "React Native app with an online marketplace of fitness coaches",
      technologies: [
        TechnologyNames.ReactNative,
        TechnologyNames.Android,
        TechnologyNames.iOS,
        TechnologyNames.Firebase,
        TechnologyNames.Github,
      ],
      summary:
        "An all-in-one solution for fitness coaches",
      content: MoxieContent,
      project_check_it_out: ProjectsCheckItOutMap[ProjectNames.Moxie],
    },
  },
};

export default ProjectData;
