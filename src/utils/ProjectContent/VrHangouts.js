import {
  useCaseDiagram,
  flowchart,
  homescreen,
  playerjoining,
  roomcreation,
  roomjoining,
  roomjoiningusecase,
  roomjoiningactivity,
  roomcreationactivity,
  roomcreationusecase,
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
      <div>
        The following diagram represents the entire working of the project.
        <div style={centerImageStyle}>
          <img
            src={flowchart}
            alt="Flowchart diagram"
            style={{ width: "40vw" }}
          />
        </div>
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
        {/* Usernames */}
        <div
          style={{
            overflow: "auto",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "#43A8A2",
                fontSize: "1.2em",
                marginBottom: "5px",
              }}
            >
              Usernames
            </span>
            <br />
            For every meeting users can set their own nickname that will be
            visible over their avatars in the meeting room.
          </div>
          <img
            src={homescreen}
            style={{ float: "right", paddingLeft: "20px", width: "30vw" }}
            alt="Homescreen"
          />
        </div>
        {/* Meeting room creation */}

        <div
          style={{
            overflow: "auto",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={roomcreation}
            style={{ float: "left", paddingRight: "20px", width: "30vw" }}
            alt="Room creation"
          />
          <div>
            <span
              style={{
                color: "#43A8A2",
                fontSize: "1.2em",
                marginBottom: "5px",
              }}
            >
              Meeting Creation Menu
            </span>
            <br />
            Users can specify a room size and choose an environment that would
            best suit their meeting.
          </div>
        </div>
        {/* Starting a Meeting */}
        <div
          style={{
            overflow: "auto",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "#43A8A2",
                fontSize: "1.2em",
                marginBottom: "5px",
              }}
            >
              Starting a Meeting
            </span>
            <br />A unique code is generated everytime a meeting is created and
            the meeting creator can view how many people join the meeting.
          </div>
          <img
            src={playerjoining}
            style={{ float: "right", paddingLeft: "20px", width: "30vw" }}
            alt="Starting a Meeting"
          />
        </div>
        {/* Joining a Meeting
         */}

        <div
          style={{
            overflow: "auto",
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={roomjoining}
            style={{ float: "left", paddingRight: "20px", width: "30vw" }}
            alt="Joining a Meeting"
          />
          <div>
            <span
              style={{
                color: "#43A8A2",
                fontSize: "1.2em",
                marginBottom: "5px",
              }}
            >
              Joining a Meeting
            </span>
            <br />
            Participants need to enter the unique code to join the meeting.
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <span
            style={{
              color: "#43A8A2",
              fontSize: "1.2em",
            }}
          >
            Activity Diagrams
          </span>
          The following diagrams represent the activities performed during
          meetings.
          <div style={centerImageStyle}>
            <figure>
              <img
                src={roomcreationusecase}
                alt="roomcreationusecase"
                style={{ width: "40vw" }}
              />
              <figcaption>Room Creation</figcaption>
            </figure>
          </div>
        </div>
      </div>
    ),
  },
];

export default content;
