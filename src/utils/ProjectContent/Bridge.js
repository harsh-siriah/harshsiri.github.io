import { 
BridgeCheckIn
,BridgeGrief
,BridgeInsights
,BridgeResources } from "../../assets/ProjectAssets/Bridge";



const content = [
  {

    content: (
      <div>
       Bridge is a user-friendly mobile application designed to 
       assist pet owners in making informed decisions regarding their 
       pet's end-of-life care. Whether facing a terminal diagnosis or 
       grappling with the difficult choice of euthanasia, Bridge provides a 
       comprehensive toolkit to guide users through every step of the process 
       with empathy and clarity.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Key Fetaures",
    content: (
      <div>
       <ul>
        <li>Daily Check-ins: Receive gentle reminders to monitor your pet's condition and provide updates on their well-being.</li>
        <li>Resource Library: Access a comprehensive collection of articles, videos, and tips covering various aspects of pet care and end-of-life support.</li>
        <li>Veterinary Connection: Connect with veterinary professionals for expert advice and guidance tailored to your pet's specific needs.</li>
        <li>Emotional Support: Find solace in a supportive community of pet owners, sharing experiences and offering comfort during difficult times.</li>
        <li>Memorial Collage: Create a heartfelt collage of cherished memories with your pet, celebrating the bond you shared together.</li>
        <li>Donation Options: Contribute to shelters or rescue programs of your choice with a portion of the app's proceeds, making a difference in the lives of other animals in need.</li>
       </ul>
      </div>
    ),
  },
  {
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
                  src={BridgeCheckIn}
                  alt="Check In"
                  width="500"
                />
              </td>
              <td>
                <img
                  src={BridgeGrief}
                  alt="Grief"
                  width="500"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={BridgeInsights}
                  alt="Insights"
                  width="500"
                />
              </td>

              <td>
                <img
                  src={BridgeResources}
                  alt="Resources"
                  width="500"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Origin of the Idea",
    content: (
      <div>
        The concept for Bridge stemmed from a team member's 
        initial idea to address end-of-life care for dogs, 
        evolving from the notion of hospice care to a practical 
        app assisting pet owners in making euthanasia decisions 
        for pets diagnosed with terminal conditions. Through extensive 
        discussions and research, the team recognized the potential 
        value of such an app in supporting pet owners during emotionally 
        challenging times.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Business Proposal",
    content: (
      <div>
        Bridge offers a user-friendly app designed to guide pet owners 
        through the difficult process of deciding when to euthanize 
        their pets. The app utilizes a simple interface, prompting users 
        with daily check-ins regarding their pet's well-being. It provides 
        resources for home care, mental health support, and connects users 
        with veterinary services. Revenue streams include a one-time fee for 
        app usage, donations to shelters, commissions from hospice services, 
        advertising, and data revenue.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Market Sizing",
    content: (
      <div>
        <ul>
            <li>
            Serviceable Addressable Market (SAM): $58.5 million
            </li>
            <li>
            Total Addressable Market (TAM): $390 million
            </li>
            <li>
            Serviceable Obtainable Market (SOM): $26.3 million
            </li>
            <li>
            Total Revenue: $32.2 million
            </li>
        </ul>
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Strengths",
    content: (
      <div>
        <ul>
            <li>Comprehensive medical history collection</li>
            <li>Strengthens human-animal bond</li>
            <li>Reduces anxiety for owners and veterinarians</li>
            <li>Offers social support resources</li>
            <li>Low-cost upfront payment model</li>
            <li>Consistent reminders for pet check-ins</li>
            <li>Purpose-driven app with emotional attachment</li>
            <li>High margins from software sales</li>
            <li>Lack of direct competition</li>
        </ul>
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Opportunities",
    content: (
      <div>
        <ul>
            <li>Growth potential in the expanding pet industry</li>
            <li>Increased adoption and decreased euthanasia rates in shelters</li>
            <li>Rising sensitivity towards pet care and end-of-life support</li>
            <li>Significant market for social support after pet loss</li>
        </ul>
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Weaknesses",
    content: (
      <div>
        <ul>
            <li>Initial cash flow unpredictability</li>
            <li>Challenges in monetizing certain aspects like ad revenue</li>
            <li>Dependency on monthly active users for ad revenue</li>
        </ul>
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Threats",
    content: (
      <div>
        <ul>
            <li>Difficulty in ensuring consistent reporting from users</li>
            <li>Potential competition from free alternatives</li>
        </ul>
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "What I learned",
    content: (
      <div>
       The hackathon proved to be an exhilarating experience, providing 
       ample opportunities to flex my creative muscles and hone critical 
       thinking skills within tight deadlines. Immersed in the project, I 
       gained invaluable insights into the veterinary industry, delving into 
       the intricacies of their lives and professions.
       <br /> <br />
       I loved the bond we formed in the team. It was a lot of fun with the 
       team - one experience being that when we were recording the final 
       deliverable, we had to do 13 takes since we ended up giggling and bursting 
       out laughing every time we attempted the recording.
       <br /> <br />
       The hackathon's greatest reward was the opportunity to collaborate with 
       individuals from distinct academic backgrounds. The veterinary students 
       brought invaluable insights into animal behavior and medical needs, while 
       the MBA students enriched the project with their expertise in market analysis 
       and financial modeling. Working with such diverse perspectives fostered a 
       dynamic environment, leading to a well-rounded and comprehensive approach to 
       our project.
       <br /> <br />
      </div>
    ),
  },
  
  {
    title: "Conclusion",
    content: (
      <div>
        Bridge stands as a promising venture in the pet care 
        industry, offering innovative solutions to address the 
        emotional and practical challenges of end-of-life care for pets. 
        With a solid business proposal, substantial market sizing, and a 
        comprehensive SWOT analysis, Bridge is positioned for success in 
        providing valuable support to pet owners and veterinarians alike.
      </div>
    ),
  },
 
];
export default content;
