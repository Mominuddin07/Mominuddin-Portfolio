import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    docker,
    jobit,
    amazonclone,
    threejs,
    healthcoachs,
    coderscave,
    ibmskillbuild,
    aws,
    python,
    java,
    bootstrap,
    firebase,
  } from "../assets";
  
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
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Python",
      icon: python,
    },{
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Java Developer",
      company_name: "Coders Cave",
      icon: coderscave,
      iconBg: "#c0bda5",
      date: "May 2024 - June 2024",
      points: [
        "Developed a comprehensive student management system in Java, including a student information system with CRUD functionalities.",
        "Implemented a database to store and manage student records, ensuring data integrity and accessibility.",
        "Optimized the database schema for quick access and retrieval.",
        "Created an intuitive and accessibility-focused user interface for the student management system.",
      ],
    },

    {
      title: "Front End Web Developer",
      company_name: "IBM SkillBuild",
      icon: ibmskillbuild,
      iconBg: "#c0bda5",
      date: "June 2024 - July 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Artificial Intelligence Intern",
      company_name: "IBM Skillbuild",
      icon: ibmskillbuild,
      iconBg: "#E6DEDD",
      date: "July 2024 - Aug 2024",
      points: [
        "Implemented a responsive “Health Coach” website for exercises, diet plans, and nutrition plans.",
        "Supervised the integration of “IBM Cloud” and “IBM Watson Assistant” to implement an intelligent chatbot that allows users to traverse our website.",
        "Created an aesthetically pleasing appearance by designing organized sections.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Health Coach",
      description:
        "Health Coach is a user-friendly website designed to help individuals improve their health and fitness. It features a chatbot powered by IBM Watson, offering personalized health advice, along with sections for diet plans, exercise routines, and nutrition tips.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "IBM Cloud",
          color: "green-text-gradient",
        },
        {
          name: "IBM Watson",
          color: "pink-text-gradient",
        },
      ],
      image: healthcoachs,
      source_code_link: "https://github.com/Mominuddin07/Health-Coach",
    },
    {
      name: "CryptoTrack",
      description:
        "CryptoTracker is a React-based web application designed to provide users with real-time cryptocurrency data, empowering them to track market trends, prices.The project leverages modern web technologies and APIs, offering an intuitive interface and a sleek design for seamless user experience.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "CoinGeckoApi",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Mominuddin07/CryptoTrack?tab=readme-ov-file",
    },
    {
      name: "Amazon Clone",
      description:
        "A minimalistic Amazon front-end replica focusing on design and user interface. It allows users to browse through a variety of products, showcasing a clean and modern layout. The website features a fully responsive design, ensuring seamless interaction across different devices.",
      tags: [
        {
          name: "Java Script",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: amazonclone,
      source_code_link: "https://github.com/Mominuddin07/Amazon-Clone",
    },
  ];
  
  export { services, technologies, experiences, projects };