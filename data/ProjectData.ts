export type Project = {
  id: string;
  link: string;
  img: string;
  name: string;
  text: string;
};

export const projectData: Project[] = [
  {
    id: "space-tourism",
    link: "https://github.com/Matz-dev1/space-tourism",
    img: "/images/space-tourism.png",
    name: "Space Tourism",
    text: "Desktop/mobile page with basic logic",
  },
  {
    id: "find-a-car-page",
    link: "https://github.com/Matz-dev1/find-a-car-page",
    img: "/images/PickACar.png",
    name: "Find a Car Page",
    text: "Web app for finding and displaying data about the car. Not finished.",
  },
  {
    id: "signup-form",
    link: "https://github.com/Matz-dev1/signUpFormv2",
    img: "/images/SignUpForm.png",
    name: "Sign Up Form",
    text: "Basic sign up form with logic built locally using hooks.",
  },
];
