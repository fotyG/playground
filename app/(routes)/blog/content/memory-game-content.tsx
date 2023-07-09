import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandFramer,
  TbBrandSupabase,
} from "react-icons/tb";

const memoryGameContent = {
  cardTitle: "Memory Game",
  cardDescription: [
    <TbBrandNextjs
      className="text-primary hover:text-secondary"
      title="Next.js"
      size={25}
    />,
    <TbBrandTypescript
      className="text-primary hover:text-secondary"
      title="TypeScript"
      size={25}
    />,
    <TbBrandTailwind
      className="text-primary hover:text-secondary"
      title="Tailwind CSS"
      size={25}
    />,
    <TbBrandSupabase
      className="text-primary hover:text-secondary"
      title="Supabase"
      size={25}
    />,
    <TbBrandFramer
      className="text-primary hover:text-secondary"
      title="Framer Motion"
      size={25}
    />,
  ],
  cardFeatures: "Anti-cheat, SSR",
  cardBadge: "Game",
  cardImg: "/images/pokeball.png",
  blogContent:
    "Making the game was very fun and presented no issues, but I was proven wrong as soon as my first customer started playing the game.. 👧🏽 My 3 year old daughter did her best to find the pokemon pairs, but as she got excited - she clicked on side buttons of the mouse and navigated away from the page, which resulted in the game progress to reset 😔 As I observed this repeating scenario - I knew I had to introduce persistent state. Forcing my users to authenticate for a simple game was not an option, so I went with local storage. Another problem popped up because I wanted to introduce a ranking system which is a treat for cheaters 🌭 First step was to encrypt the data in local storage, but if my server knew how to decrypt it - all a user had to do was to copy the value and paste it after seeing the current layout of cards to reduce total steps which would result in a better score. I came up with a very creative solution to compare states of every value on every move against the previous one to ensure no modifications were made 👮🏽‍♂️ I am well aware that there are still ways to cheat, but it will require some effort and I am happy with that as it stands. The second big issue was with rendering the card images, that lagged behind the flip animation when rendered on the client if a user had slow connection. I had to introduce server side rendering to fix this issue. Now every flip is a call to the API which returns the image and the flip animation starts only when the data is received 👍🏽",
};

export default memoryGameContent;