import { moxieWebsite ,moxiePass, moxieWebMob} from "../../assets/ProjectAssets/Moxie";


const content = [
  {
    title: "Overview",
    content: (
      <div>
        Moxie was a platform for fitness entrepreneurs to manage every aspect of their business including live-streaming of classes, scheduling, payments, and promotions.

Moxie also developed a marketplace for premium workouts and curated coaches.
<br/>
<br/>
I was a part of the mobile app development team and I actively contributed in the redesign of the platform.
      </div>
    ),
  },
  {
    title: "Product",
    content: (
      <div>
       When the pandemic hit, many fitness coaches turned to Zoom, but soon realized it was a broken solution.
<br/>
Moxie built a custom solution specifically for the fitness domain. It allowed coaches to set up their virtual studios and offer virtual private and group classes to their clients. Moxie also helped them manage every aspect of their business.
<br />
        <br />
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        >
          <img src={moxieWebsite} width="90%" />
        </div>
      </div>
    ),
  },
  {
    title: "Web + Mobile",
    content: (
      <div>

         Live streaming was a critical part of Moxie's apps. This video conferencing solution was built on top of AWS Chime. It was fully customized to meet the needs of our fitness coaches with a warm-up room and in-room music.
<br/>
We were the first team to integrate AWS Chime in React Native. We wrote our own custom bridges that ensured seamless integration with Chime SDKs when their React Native SDK was not even released.
<br />
        <br />
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        >
          <img src={moxieWebMob} width="90%" />
        </div>

      </div>
    ),
  },
  {
    title: "Payment and subscription customization",
    content: (
      <div>

         Moxie's flexible subscription feature empowered instructors to fully customize their subscription fees, duration, offerings, and more while maintaining complete transparency.<br/>
         Additionally, customizable passes, a marketplace feature, granted students access to any class across Moxie.
         <br />
        <br />
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        >
          <img src={moxiePass} width="90%" />
        </div>
      </div>
    ),
  },
];
export default content;
