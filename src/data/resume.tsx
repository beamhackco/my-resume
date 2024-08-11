import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  title: "Resume",
  name: "Amornphong Naitip",
  initials: "student",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Software Engineering Student At Mae Fah Luang University.",
  summary:
    "I am a student at Mae Fah Luang University and I am looking to expand my skills by pursuing an internship in Web Application development.",
  avatarUrl: "/profile.png",
  skills: ["React", "Next.js", "Vue", "Typescript", "Javascript", "Node.js"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "6431503071@lamduan.mfu.ac.th",
    tel: "0967956304",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/beamhackco",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mango Database Thailand",
      href: "https://xn--72c7actra6b5df6e9itb.net/",
      badges: [],
      location: "",
      title: "Fullstack Web Application",
      logoUrl: "/Logo4.png",
      start: "Oct 2023",
      end: "Jul 2024",
      description:
        "Implemented Fullstack web Application about mango to display for those interested in mango.",
    },
  ],
  education: [
    {
      school: "Mae Fah Luang University",
      href: "https://www.mfu.ac.th/home.html",
      degree: "Bachelor of Engineering Program in Software Engineering",
      logoUrl: "/logo-mfu-v2.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Mango Database Thailand",
      href: "https://xn--72c7actra6b5df6e9itb.net/",
      dates: "Oct 2023 - Jul 2024",
      active: true,
      description: "นึกไม่ออก",
      technologies: ["React", "Javascript", "Node.Js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://xn--72c7actra6b5df6e9itb.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mangobg.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;
