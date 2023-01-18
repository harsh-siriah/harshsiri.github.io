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
    title: "Features",
    content: (
      <div>
        <ul>
          <li>Detects various objects present in the captured image.</li>
          <li>Translates the object's name to various languages.</li>
          <li>
            Also provides pronunciation of the object's name in English and
            other selected languages.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Technologies",
    content: (
      <div>
        This project is developed using React Native Framework.
        <ul>
          <li>
            {renderUrl({
              url: "https://github.com/facebook/react-native",
              text: "React Native",
            })}{" "}
            - Hybrid mobile app development framework
          </li>
          <li>
            {renderUrl({
              url: "https://cloud.google.com/vision",
              text: "Google Cloud's Vison API",
            })}{" "}
            - Derive insights from your images in the cloud or at the edge with
            AutoML
          </li>
          <li>
            {renderUrl({
              url: "https://rapidapi.com/gatzuma/api/deep-translate1/details",
              text: "Deep Translate API",
            })}{" "}
            - Deep Translate provides a simple API for translating plain text
            and HTML documents between any of 100+ supported languages.
          </li>
          <li>
            {renderUrl({
              url: "https://github.com/ak1394/react-native-tts#readme",
              text: "react-native-tts",
            })}{" "}
            - Library which provides API for using devices Text-to-Speech
            Service.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Project Roadmap",
    content: (
      <div>
        We entered the hackathon with an initial idea for a project which was to
        create a multiplayer experience wherein users would join a private room
        and would be given tasks like “Grab a book” or “Get a glass of water”,
        the user would have to do these tasks in real life and then point the
        application’s camera at the object. The app would recognize the object
        and award a point to the user that completes the task first.
        <h5>Day 1</h5>
        We were able to create a working prototype with basic OCR and object
        detection and we were able to read printed as well as handwritten text.
        We were also able to detect the objects in an image. Additionally, we
        explored how private multiplayer sessions can be created in React Native
        with Google Firebase Realtime Database. By the end of the day, we
        realized that the results provided by Google Cloud’s Vision API were
        neither fast nor accurate enough to be used in a gaming application.
        <h5>Day 2</h5>
        We spent half the day exploring various other libraries for object
        detection. A summary of our findings is included later in this article.
        By lunchtime, we decided to scrap the gaming idea as none of the
        libraries were suitable for our desired implementation. We then decided
        to keep OCR on hold and focus on object detection first. We came up with
        an app design involving a simple camera UI that would mark the detected
        objects on the captured image and clicking on the marker would open a
        dialog displaying the object’s name.
        <h5>Day 3</h5>
        We started the day with a brainstorming session and discussed various
        product ideas that could be implemented on top of the object detection
        POC. We eventually settled on an education-focused product for children
        involving translations and text-to-speech. Two team members worked on
        the design of the application and the rest of the members began
        exploring libraries for implementing translation and text-to-speech in
        React Native. By the end of the day, the design mocks for the
        application were ready along with a POC with all the features
        implemented.
        <h5>Day 4</h5>
        We primarily focused on implementing the UI and polishing the experience
        of the application. One of the biggest issues since day 1 was the
        response time taken by the Google Vision API for every request sent. On
        this day, we observed that the images being sent were very heavy,
        contributing majorly to the high load times. The solution was to
        compress the images after capturing them. This brought the loading time
        from 10-15 seconds down to 2-5 seconds. Moreover, to improve the app
        experience and to make it more kid-friendly, we added a few onboarding
        screens to explain the working of the application on the first start.
        This marked the completion of the product which finally adopted the name
        “Spell-A-Bee”.
      </div>
    ),
  },
  {
    title: "Spell-A-Bee",
    content: (
      <div>
        "Spell-A-Bee" is a cross-platform application built to help your child
        (and you) learn different languages easily on the go. Just capture an
        image of nearby objects and learn what they are called in different
        languages along with their audio pronunciations.
      </div>
    ),
  },

  {
    title: "How does it work?",
    content: (
      <div>
        The user is first prompted to click a picture of nearby objects. This
        image is converted to the base64 format and then provided to the Google
        Cloud Vision API. The API response provides the following information
        <ul>
          <li>name of the object detected</li>
          <li>confidence percentage, and</li>
          <li>the coordinates of the bounding box.</li>
        </ul>
        Using this information, we plot the markers for the detected objects.
        The object names are passed to the translation API to get the translated
        text based on the target language selected by the user. This response is
        then used by the device's Text-to-Speech Service for the pronunciation
        of the translated text in different languages.
      </div>
    ),
  },

  {
    title: "Screenshots",
    content: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table style={{ borderSpacing: "20px", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://user-images.githubusercontent.com/32268377/169829251-0413f124-f659-46e0-8eb7-66d7b6604a92.jpg"
                  alt="Splash Screen"
                  width="150"
                />
              </td>
              <td>
                <img
                  src="https://user-images.githubusercontent.com/86604753/170272199-cf24c4b9-b49a-49a1-b882-9201b6ef455f.jpg"
                  alt="Language Selection"
                  width="150"
                />
              </td>
              <td>
                <img
                  src="https://user-images.githubusercontent.com/86604753/170272223-2141821b-b53c-475e-aded-189b9a942029.jpg"
                  alt="Language Selection"
                  width="150"
                />
              </td>

              <td>
                <img
                  src="https://user-images.githubusercontent.com/86604753/170271969-5e4ecf3f-91d6-424a-a6d4-4941978eb95e.jpg"
                  alt="Loading Screen"
                  width="150"
                />
              </td>
              <td>
                <img
                  src="https://user-images.githubusercontent.com/86604753/170271856-48f88bed-9e71-445f-88f0-16f122b01345.jpg"
                  alt="Result Screen"
                  width="150"
                />
              </td>
              <td>
                <img
                  src="https://user-images.githubusercontent.com/86604753/170271757-ecc05558-6f28-4ee0-a2b5-6727afbf0b1b.jpg"
                  alt="Result Screen 2"
                  width="150"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];

export default content;
