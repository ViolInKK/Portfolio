import {
  backend,
  web,
  creator,
  react,
  learning,
  connectFour,
  blogr,
  dictionary,
} from "../assets"

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ]

  export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Creator",
      icon: creator,
    },
  ]

  export const experiences = [
    {
      title: "Web Developer",
      company_name: "Learning",
      icon: learning,
      iconBg: "#383E56",
      date: "September 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Backend development using technologies like Node.js and NestJS to build server-side logic and RESTful APIs.",
        "Worked with databases, such as PostgreSQL, to store and retrieve data from my applications.",
      ],
    },
  ]

  export const projects = [
    {
      name: "Blogr landing page",
      description:
        "With our beautifully designed and user-friendly landing page, you'll instantly feel inspired to start creating and publishing captivating content. The clean and modern layout, combined with vibrant imagery, creates an inviting and engaging space.",
      tags: [
        {
          name: "css",
          color: "text-pink-500",
        },
      ],
      image: blogr,
      source_code_link: "https://github.com/ViolInKK/Blogr",
      project_link: "https://violinkk.github.io/Blogr/",
    },
    {
      name: "Connect Four",
      description:
        "Welcome to exciting web-based connect four game, where strategy meets fun! Get ready to engage in an exhilarating battle of wits, as you aim to outsmart your opponent and connect four of your game pieces in a row.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-blue-500",
        },
        {
          name: "css",
          color: "text-pink-500",
        },
      ],
      image: connectFour,
      source_code_link: "https://github.com/ViolInKK/ConnectFour",
      project_link: "https://violinkk.github.io/ConnectFour/",
    },
    {
      name: "Dictionary",
      description:
        "Web-based platform that allows users to search words. App is designed to provide you with quick and easy access to a comprehensive collection of words, definitions, synonyms, antonyms, and more, all at your fingertips.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "restapi",
          color: "text-green-500",
        },
        {
          name: "css",
          color: "text-pink-500",
        },
      ],
      image: dictionary,
      source_code_link: "https://github.com/ViolInKK/Dictionary",
      project_link: "https://violinkk.github.io/Dictionary/",
    },
  ];