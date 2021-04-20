import teamImg1 from "../../assests/images/TomasRhythm/team-img-1.jpg";
import teamImg2 from "../../assests/images/TomasRhythm/team-img-2.jpg";
import teamImg3 from "../../assests/images/TomasRhythm/team-img-3.jpg";

export const MenuItems = [
  {
    label: "home",
  },
  {
    label: "about",
  },
  {
    label: "services",
  },
  {
    label: "works",
  },
  {
    label: "contacts",
  },
];

export const team = [
  {
    blockquote:
      "Design is not making beauty, beauty emerges from selection, affinities, integration, love.",
    name: "— Louis Kahn",
    isBlockquote: true,
    photo: teamImg1,
    skills: {
      subscripion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis.",
      branding: 85,
      design: 90,
      development: 95,
      photography: 80,
    },
    personName: "Thomas Rhythm",
    profession: "Art Director",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
    isBlockquote: false,
    photo: teamImg2,
    skills: {
      subscripion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis.",
      branding: 75,
      design: 80,
      development: 75,
      photography: 80,
    },
    personName: "Marta Lening",
    profession: "Web Engineer",
  },
  {
    description:
      "Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam ipsum.",
    isBlockquote: false,
    photo: teamImg3,
    skills: {
      subscripion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis.",
      branding: 80,
      design: 75,
      development: 65,
      photography: 99,
    },
    personName: "Steve Anders",
    profession: "Developer",
  },
];

export const servicesTabsData = [
  {
    name: 'Branding',
    icon: 'icon-strategy',
    content: {
      blockquote: {
        text: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
        name: "— Jeff Bezos"
      },
      firstTextColumn: "Branding volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.",
      secondTextColumn: "Branding vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sitamet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero."
    }
  },
  {
    name: 'web design',
    icon: 'icon-desktop',
    content: {
      blockquote: {
        text: "An web design for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
        name: "— Jeff Bezos"
      },
      firstTextColumn: "Web design volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.",
      secondTextColumn: "Web design vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sitamet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero."
    }
  },
  {
    name: 'graphic design',
    icon: 'icon-tools',
    content: {
      blockquote: {
        text: "A graphic design for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
        name: "— Jeff Bezos"
      },
      firstTextColumn: "Graphic design volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.",
      secondTextColumn: "Graphic design vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sitamet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero."
    }
  },
  {
    name: 'Development',
    icon: 'icon-gears',
    content: {
      blockquote: {
        text: "A development for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
        name: "— Jeff Bezos"
      },
      firstTextColumn: "Development volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.",
      secondTextColumn: "Development vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sitamet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero."
    }
  },
  {
    name: 'Photography',
    icon: 'icon-camera',
    content: {
      blockquote: {
        text: "A photography for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
        name: "— Jeff Bezos"
      },
      firstTextColumn: "Photodraphy volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.",
      secondTextColumn: "Photodraphy vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sitamet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero."
    }
  },
]
