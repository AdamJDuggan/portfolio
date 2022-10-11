import ArtOne from "./assets/artOne.jpg";

import ArtTwo from "./assets/artTwo.jpg";
import ArtSix from "./assets/ArtSix.jpg";
import ArtFour from "./assets/ArtFour.jpg";
import ArtNine from "./assets/artNine.jpg";

const projects = [
  {
    id: "simple-context-state",
    name: "Simple Context State",
    description: `Enables quick setup and easy management of state in React applications. Provides an inbuilt Errors store and Pending store (stores being blocks of state) which interact with the stores you create.`,
    detail: `This is a state management tool built on top of Reacts Context API.  
    When using Context or Redux the actions in our stores often require asynchronous API requests. 
    It is helpful to know when these actions are pending and when they have resolved or failed. 
    SCS provides an inbuilt pending store and errors store and wraps all asynchronous actions with 
    a pending and errors state. SCS exposes one provider and three hooks so you can quickly set up your 
    stores and access state and actions in your components.`,
    image: { src: ArtTwo, alt: "Random image of octopus" },
    keywords: ["npm package", "react", "javascript"],
    links: [
      { name: "Github", value: "/" },
      { name: "Npm", value: "/" },
      { name: "Docs", value: "/" },
    ],
  },
  {
    id: "super-hooks",
    name: "Super Hooks",
    description: `A range of utility hooks for React UI development.`,
    image: { src: ArtFour, alt: "Random image of samurai" },
    keywords: ["npm package", "react", "javascript"],
    links: [
      { name: "Github", value: "/" },
      { name: "Npm", value: "/" },
      { name: "Docs", value: "/" },
    ],
  },
  {
    id: "family-hols",
    name: "Family hols",
    description: `Soical media app for families to plan holidays and share photos.`,
    image: { src: ArtSix, alt: "Random image of beach" },
    keywords: ["Angular", "Firebase", "SASS"],
    links: [{ name: "Github", value: "/" }],
    inDevelopment: true,
  },
  {
    id: "community-counselling-brighton",
    name: "Community Counselling Brighton",
    description: `Responsive, SEO optimized website for Counselling service`,
    detail: `CCB wanted a new professional looking website that worked well on mobile devices. They did not have tons of text/content so I suggested a one page site with clearly defined sections. The team wanted a hero banner before the fold that was ‘positive, calming and Brighton'.`,
    image: { src: ArtNine, alt: "Random image of paining" },
    keywords: ["Responsive design", "SEO", "Google hosting"],
    links: [
      { name: "Website", value: "https://communitycounsellingbrighton.co.uk/" },
      { name: "Github", value: "/" },
    ],
  },
];

export default projects;
