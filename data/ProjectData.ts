export type Project = {
  id: string;
  link: string;
  img: string;
  name: string;
  text: string;
  class: string;
};

export const projectData: Project[] = [
  {
    id: "space-tourism",
    link: "https://github.com/Matz-dev1/space-tourism",
    img: "/images/SpaceTourism.png",
    name: "Space Tourism",
    text: "Desktop/mobile page with basic logic",
    class: "bg-gray-700/90",
  },
  {
    id: "find-a-car-page",
    link: "https://github.com/Matz-dev1/find-a-car-page",
    img: "/images/FindACar.png",
    name: "Find a Car Page",
    text: "Web app for finding and displaying data about the car. Not finished.",
    class: "bg-gray-700/80",
  },
  {
    id: "signup-form",
    link: "https://github.com/Matz-dev1/signUpFormv2",
    img: "/images/SignUpForm.png",
    name: "Sign Up Form",
    text: "Basic sign up form with logic built locally using hooks.",
    class: "bg-gray-700/70",
  },
];
