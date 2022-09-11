import {
  FiltersPage,
  LandingScreen,
  ListPage,
} from "../../assets/ProjectAssets/PETronus";

const content = [
  {
    title: "Features",
    content: (
      <div>
        <ul>
          <li>
            It allows you to browse through a list of pet profiles to help you
            find your furry friend.
          </li>
          <li>
            Creating a foster account unlocks the possibility to add posts about
            the animal you are takiing care of and reach out to the adopter
            community.
          </li>
          <li>
            Provides you with a platform to connect with fosters and adopters
            around your locality.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Motivation",
    content: (
      <div>
        The awareness regarding stray/rescue dogs and cats has drastically
        increased which has encouraged a lot of people to adopt pets instead of
        purchasing them. The problem arises when they actually go for adoption.
        If they are lucky, they end up finding a pup/kitten on the streets and
        they adopt them. But worst case scenario, they need to go around looking
        for fosters who are teporarily taking care of these helpless animals,
        which can be a tedious process in itself as you'd need to look around
        for advertisements or posts on social media and verify the fosters in
        order to make sure that the pup/kitten is healthy. We came up with
        PETronus to tackle just this problem. PETronus helps you to browse
        through information posted directly by fosters on our platform and get
        the most important information at a glance to select and contact your
        prefered foster.
        <br />
      </div>
    ),
  },
  {
    title: "What it does",
    content: (
      <div>
        PETronus is a place for both, fosters and adopters. Fosters can login or
        create an account on our platform in order to post about the dog/cat
        that they're fostering. <br />{" "}
        <img
          src={LandingScreen}
          style={{
            display: "block",
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            float: "right",
          }}
          alt="LandingScreen"
        />{" "}
        <br /> Adopters do not need to create an account. Instead, they can
        directly choose their preference and select if they want to view posts
        regarding dogs or cats. <br />
        <br /> All posts can be viewed by the adopters and the list can be
        filtered by age, gender or species. Every card would display a carousal
        of pictures of the animal, alon with a small description, their age,
        gender, and the location. This concise display of information makes it
        easy for the user to view many posts at a glance and focus only on the
        posts that they're interested in.
        <br />
        <br />{" "}
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src={ListPage}
            style={{
              display: "block",
              width: "30%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="ListPage"
          />
          <img
            src={FiltersPage}
            style={{
              display: "block",
              width: "30%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="FiltersPage"
          />
        </div>{" "}
        <br />
        <br />
      </div>
    ),
  },
];
export default content;
