import { apploggerWorkingGif } from "../../assets/ProjectAssets/AppLogger";

const renderUrl = ({ url, text }) => {
  return (
    <a
      href={url}
      className="project-modal-hyperlink"
      target={"_blank"}
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

const content = [
  {
    title: "Overview",
    content: (
      <div>
        AppLogger is a React Native mobile application framework that helps in
        minimizing QA issue-reporting time and developer debugging time by
        providing a web interface for the logs generated and steps taken by the
        user on a device using the device's IP address. The user can keep track
        of their sessions and logs, as well as upload, download, and delete
        them.
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
          <img src={apploggerWorkingGif} width="90%" />
        </div>
      </div>
    ),
  },
  {
    title: "Why AppLogger?",
    content: (
      <div>
        Whenever an issue is reported, developers need issue reproducible steps
        along with some data to understand, debug and fix it. A lot of time,
        finding out these reproducible steps becomes a time-consuming effort.
        <br />
        <br />
        <h4>On the Developer side:</h4>
        QA data isn't always accurate for replicating the problem, and
        incomplete data can complicate troubleshooting. As a result, debugging
        time increases, and the issue may go unresolved since it is not
        reproducible. To solve these problems, we need to track the user actions
        and application state and allow them to be shared easily. AppLogger
        provides React Native components with customized tracking to minimize
        the integration effort in any existing or a new application. It also
        provides a generic wrapper that can be used with any React Native
        component. A simple track function can be used by developers to provide
        tracking logic to custom methods. Developers can access the app sessions
        including the steps and associated logs via the web interface using the
        device's IP address. The web interface includes a session dashboard with
        a list of sessions and a session details page that includes device
        information as well as user action and developer logs.
        <br />
        <br />
        <h4>On the QA side:</h4>
        AppLogger proves to be a boon by eliminating the need to perform same
        steps manually for a number of times. Additionally, it simplifies the
        process to convey the bug's replication steps to developers. It saves
        their time by keeping track of the steps in case of Random testing even
        when the issues are not reproducible.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Other features of AppLogger",
    content: (
      <div>
        <ul>
          <li>
            Session management - from the helper menu, the user can stop the
            current session, start a new one, and can temporarily disable
            tracking in the current session.
          </li>
          <li>
            Download Logs - session logs can be downloaded in HTML or JSON
            format from the web interface.
          </li>
          <li>
            Upload Logs - helper menu allows tracked session logs to be uploaded
            on any third party services. To use this feature, you must implement
            the upload function.
          </li>
          <li>
            Delete Logs - from the helper menu user can delete session logs.
          </li>
        </ul>
      </div>
    ),
  },
];
export default content;
