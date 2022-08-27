import TechnologyNames from "../constants/TechnologyNames";
import { ReactComponent as AndroidLogo } from "./android-logo.svg";
import { ReactComponent as GithubLogo } from "./github-logo.svg";
import { ReactComponent as LinkedInLogo } from "./linkedin-logo.svg";
import { ReactComponent as UnityLogo } from "./unity-logo.svg";
import { ReactComponent as FirebaseLogo } from "./firebase-logo.svg";
import { ReactComponent as RNLogo } from "./react-native-logo.svg";
import { ReactComponent as TwitterLogo } from "./twitter-logo-svg.svg";
import { ReactComponent as GooglePlayStoreLogo } from "./google-play-svg.svg";

const technologyAssets = {
  [TechnologyNames.Android]: AndroidLogo,
  [TechnologyNames.Github]: GithubLogo,
  [TechnologyNames.Linkedin]: LinkedInLogo,
  [TechnologyNames.Unity]: UnityLogo,
  [TechnologyNames.Firebase]: FirebaseLogo,
  [TechnologyNames.ReactNative]: RNLogo,
  [TechnologyNames.ReactJS]: RNLogo,
  [TechnologyNames.Twitter]: TwitterLogo,
  [TechnologyNames.GooglePlayStore]: GooglePlayStoreLogo,
};

export default technologyAssets;
