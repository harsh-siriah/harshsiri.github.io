import {
  useCaseDiagram,
  flowchart,
  homescreen,
} from "../../assets/ProjectAssets/VR_Hangouts";

const centerImageStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const content = [
  {
    title: "Objective",
    content: (
      <div>
        <ul>
          <li>
            Users should be able to have custom made 3D avatars that they can
            use in the virtual environment.
          </li>
          <li>
            Users should be able to interact with each other in a virtual room
            using voice chat.
          </li>
          <li>
            Users should be able to interact with objects in the virtual
            environment with virtual reality gear.
          </li>
        </ul>
        <div style={centerImageStyle}>
          <img
            src={useCaseDiagram}
            alt="Use case diagram"
            style={{ width: "40vw" }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Flow",
    content: (
      <div style={centerImageStyle}>
        <img
          src={flowchart}
          alt="Flowchart diagram"
          style={{ width: "40vw" }}
        />
      </div>
    ),
  },
  {
    title: "Creating Meetings ",
    content: (
      <div>
        <div>
          The users can choose their own nickname, choose room size and choose
          an environment and instantly create a meeting with a unique code. For
          joining the meeting, all other participants need to do is choose a
          nickname and enter the unique code.
          <span style={{ color: "#43A8A2" }}>
            The process was intentionally kept simple and it was ensured that
            least amount of steps need to be taken to get into a meeting.
          </span>
        </div>
        <div
          style={{
            overflow: "auto",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={homescreen}
            style={{ float: "left", paddingRight: "20px" }}
            width="600"
            alt="Homescreen"
          />
          <div>
            <span style={{ color: "#43A8A2" }}>Usernames</span>
            <br />
            For every meeting users can set their own nickname that will be
            visible over their avatars in the meeting room.
          </div>
        </div>
      </div>
    ),
  },
];

export default content;
