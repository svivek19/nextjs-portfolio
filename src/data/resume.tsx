import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vivekananthan",
  initials: "S",
  location: "Tamilnadu, India",
  description:
    "I'm a Software Developer, and I love building things and helping people.",
  summary:
    "I graduated in 2024 and currently work as a MERN Stack Developer, building full-stack web applications with MongoDB, Express.js, React, and Node.js. I integrate Twilio for WhatsApp, SMS reminders, and notifications, and manage deployment and server optimization on VPS. Passionate about developing scalable, high-performance solutions and exploring new technologies.",
  avatarUrl: "/me.jpg",
  skills: [
    "React JS",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bootstrap",
    "Material UI",
    "DynamoDB",
    "Amplify",
    "AWS",
    "Firebase",
    "Redux",
    "Express.js",
    "VPS",
    "Version Control",
    "Jest",
    "Vitest",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/svivek19",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/svivek018/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Quantum Sharq Innovative Solutions",
      href: "https://quantumsharq.com/",
      badges: [],
      location: "on-site",
      title: "Junior Software Developer",
      logoUrl: "/qsis.svg",
      start: "June 2024",
      end: "Present",
      description:
        "As a MERN Stack Developer, I specialize in building dynamic and scalable web applications using MongoDB, Express.js, React, and Node.js. I handle both front-end development, creating responsive user interfaces with React, and back-end development, including building RESTful APIs and managing server-side logic with Node.js and Express. I also integrate Twilio for features like SMS and WhatsApp messaging, as well as setting up automated reminders and real-time notifications. Additionally, I manage the deployment and performance optimization of applications on VPS, ensuring they are scalable, secure, and reliable.",
    },
  ],
  education: [
    {
      school: "Bharath Niketan Engineering College",
      href: "https://www.bnec.ac.in/",
      degree: "BTech - Information Technology",
      logoUrl: "/bnec.jpeg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Food Delivery Website",
      href: "https://vbite.vercel.app/",
      active: true,
      description:
        "This project is a **food delivery website** built with **React**, **Firebase**, and **TailwindCSS**. It includes a secure **payment gateway** for online transactions and a **responsive design** for seamless use on any device. The **admin panel** allows the admin to easily add and manage food details.",
      technologies: [
        "React.js",
        "JavaScript",
        "Firebase",
        "TailwindCSS",
        "Redux",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://vbite.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/svivek19/food-delivery-website.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtlo3ztxm/image/upload/v1731150580/portfolio-images/foodapp.png",
    },
    {
      title: "Blog Website ",
      href: "https://react-blog-vivek.vercel.app/",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "React JS",
        "JavaScript",
        "Firebase",
        "TailwindCSS",
        "Admin Panel",
      ],
      links: [
        {
          type: "Website",
          href: "https://react-blog-vivek.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/svivek19/react-blog-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtlo3ztxm/image/upload/v1731151156/portfolio-images/blog.png",
    },
  ],
} as const;
