const renderUrl = ({ url, text }) => {
  return (
    <a href={url} target={"_blank"} rel="noreferrer">
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
          <li>Personalise your tweet feed from all your favorite topics.</li>
          <li>
            Stay up-to-date with tweets from your favorite users with the help
            of Lists.
          </li>
          <li>
            Revisit your favorite tweets and organize them however you want with
            Archives.
          </li>
          <li>Discover trending topics from all over the world.</li>
          <li>Access threads to learn more about any tweet.</li>
          <li>Search by keywords, mentions, usernames, hashtags, etc.</li>
          <li>Filter search results by popularity or recency.</li>
          <li>Support for playing videos, viewing images, and playing GIFs.</li>
          <li>Share tweets with your social circles.</li>
          <li>Share your lists/archives with your social circles.</li>
          <li>Backup and restore your Canary data whenever you want.</li>
        </ul>
        All of these features without sharing your data or getting tracked by
        anyone -- Not even us.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Inspiration",
    content: (
      <div>
        When we started with the hackathon project couple of weeks ago, we were
        still exploring the possibilities for how to utilize the Twitter APIs.
        We wanted to focus more on content discoverability or an app that
        focuses on user privacy. While browsing the Twitter platform and some
        3rd-party apps for inspiration, we noticed that none of them allowed
        browsing of content without signing up, while you could go to specific
        accounts via URL and browse without an issue. We finally decided on
        expanding this feature into a full-fledged app while keeping user
        privacy in mind — which is what Canary aims to be!
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "What it does",
    content: (
      <div>
        Canary is a privacy-focused app that lets users discover personalized
        public content without needing an account. The user can browse the home
        feed based on their preferences, search for specific topics, stay up to
        date with their favorite users, and archive tweets into multiple groups
        for the future. <br />
        <br />
        Users can discover trending topics all around the world by choosing any
        country from a list of countries. The user can also opt to browse the
        most popular or most recent tweets on the topics or user accounts from
        the search results. <br />
        <br />
        To make the app's content more relevant, we have reverse engineered and
        implemented Twitter's Lists feature. In addition, we have improved
        Twitter's Bookmarks feature by enabling users to create multiple
        archives with custom names that will store tweets. So, while browsing
        through the Canary app, the user can add any of their favorite tweets to
        any archive. <br />
        <br />
        Users can view media like GIFs, images and videos right in the
        applications and also share tweets among their social circles. Moreover,
        we offer a choice that redirects the user to Twitter in order to allow
        them to interact with tweets.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "How we built it",
    content: (
      <div>
        We built our app on the React Native framework, which enables us to have
        a common code base and deploy the application on Android and iOS
        platforms simultaneously. <br />
        <br />
        The app primarily uses the{" "}
        {renderUrl({
          url: "https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent",
          text: "search/recent",
        })}{" "}
        API to create the timeline. The preferences selected by the user are
        passed in the request query as contexts. To get the trending topics all
        around the world, we used the{" "}
        {renderUrl({
          text: "trends/place.json",
          url: "https://developer.twitter.com/en/docs/twitter-api/v1/trends/trends-for-location/api-reference/get-trends-place",
        })}{" "}
        API with id as the WOEIDs from the list of locations received from the{" "}
        {renderUrl({
          text: "trends/available.json",
          url: "https://developer.twitter.com/en/docs/twitter-api/v1/trends/locations-with-trending-topics/api-reference/get-trends-available",
        })}
        API. For search results, we get user account tweets by using the from
        operator in the query. Similarly, we use the @ and the # for mentions
        and hashtags search. We have also provided an option to switch between
        popular and new tweets in the search results. We achieve this by using
        the relevancy value in the sort_order property for getting the popular
        tweets and the recency value for getting the newest tweets. <br />
        <br />
        For lists, we maintain an array of user accounts that have been added to
        the list by our users. This array is stored locally on the device. We
        use the{" "}
        {renderUrl({
          url: "https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent",
          text: "search/recent",
        })}{" "}
        API with a query formed with the from operator to get the tweets from
        the stored user accounts. In addition, we offer a user search, where we
        use the{" "}
        {renderUrl({
          url: "https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-search",
          text: "users/search.json",
        })}{" "}
        API for getting a list of users who can be added to the list. <br />
        <br />
        Archives have a similar implementation to lists, where an array of tweet
        IDs is stored locally and they are requested using the{" "}
        {renderUrl({
          url: "https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets",
          text: "/tweets",
        })}{" "}
        API with the ids property.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Challenges we ran into",
    content: (
      <div>
        Creating the timeline was especially difficult for us because we could
        not use the{" "}
        {renderUrl({
          url: "https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/introduction",
          text: "timeline",
        })}{" "}
        API as it needs a Twitter account. So, we found a workaround and decided
        to use the search/recent API and tune it according to the user's needs
        by passing contexts in the API request. This fetched us the paginated
        list of tweets that we wanted but was only getting the recent tweets,
        which either did not have much interaction associated with them or were
        mostly spam or junk tweets. To overcome this challenge, we decided to
        pass the relevancy value in the sort_order property in the query. This
        fetched tweets that had some interactions with them and the feed was
        looking significantly better. We decided to go one step further into
        improving the quality of the feed by providing the user with the option
        to get tweets only by verified users. This provides the user with very
        good quality tweets with almost none of the spam.
        <br />
        <br />
        The next problem we faced was that since we filtered the request so
        much, we were getting only 2-3 pages of tweets as a result. To tackle
        this issue, we implemented API switching, wherein, if the user has opted
        for verified user tweets, they will first see those tweets with sort
        order as ‘relevancy’. Once the response pages are over, we hit the API
        with sort order as ‘recency’. After this response data is over, we start
        showing relevant tweets from all users, and after that ends, we show
        tweets from all users without the context filters. This ensures that
        there is almost a never-ending list of tweets on the user’s timeline.
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Accomplishments that we're proud of",
    content: (
      <div>
        <ul>
          <li>
            Allowing users to discover content while maintaining their privacy
            by not asking them to create an account, requesting device
            permissions, and storing the data only on the device.
          </li>
          <li>
            Replicating the List feature offered by Twitter without using the{" "}
            {renderUrl({
              text: "/lists",
              url: "https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/introduction",
            })}{" "}
            API.
          </li>
          <li>
            Providing a quality timeline to the user according to their
            preferences.
          </li>
          <li>
            Building the entire application without the need for a backend
            server.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "What I learned",
    content: (
      <div>
        <ul>
          <li>
            Using the Twitter API endpoints in many different ways to best suit
            our use case.
          </li>
          <li>
            Creating complex components and storing data locally in React
            Native.
          </li>
        </ul>
      </div>
    ),
  },
];
export default content;
