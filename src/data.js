import { FaChartLine, FaCogs, FaTachometerAlt } from "react-icons/fa";
export const heroData = {
  name: "Tapan Kalapahad",
  role: "BI Developer",
  email: "kalapahadtapan2000@gmail.com",
  phone: "7978216178",
  github: "https://github.com/kalapahad2000",
  linkedin: "https://linkedin.com/in/tapankp",
  drive: "https://drive.google.com/..."
};

export const education = [
  {
    institution: "Gandhi Institute For Technology (BPUT), Bhubaneswar",
    degree: "B.Tech, Mechanical Engineering",
    grade: "SGPA: 7.89",
    duration: "Apr 2017 - Jul 2021"
  },
  {
    institution: "Jupiter +2 Science College (CHSE), Bhubaneswar",
    degree: "Higher Secondary",
    grade: "75.5%",
    duration: "Apr 2015 - Mar 2017"
  },
  {
    institution: "Saraswati Vidya Mandir (BSE), Khordha",
    degree: "Secondary",
    grade: "74.33%",
    duration: "Apr 2014 - Mar 2015"
  }
];

export const skills = {
  languages: ["SQL", "DAX", "VBA", "Power Query", "Python"],
  tools: ["Power BI", "Power Apps", "Power Automation", "Advanced Excel", "MySQL", "SAP", "ERP", "Jira"],
  softSkills: ["MIS Reporting", "Stakeholder Coordination", "Data Analysis", "Dashboard Building", "Report Automation", "Process Automation", "Conduct UAT", "Supply Chain Management", "Inventory Management"]
};

export const experience = [
  {
    company: "Jindal Aluminium Limited",
    role: "Power BI Developer - Business Operations",
    duration: "Apr 2022 - Present",
    projectBrief: "Developed MIS reports, dashboards, and automation tools for supply chain, sales, HR, finance, and production. Integrated SAP & ERP data for real-time analysis.",
    responsibilities: [
      "Built 60+ MIS reports and dashboards in Power BI.",
      "Created Trigger Management System with Power Apps & Power Automate.",
      "Implemented Civil Works Daily Tracker & Project Progress Tracker.",
      "Analyzed customer complaints using SQL & Power BI, reducing complaints by 30%.",
      "Conducted UAT for Automation Projects OMS and CIMS."
    ],
    result: "Improved operational efficiency and reduced complaints by 30%."
  },
  {
    company: "Polybond India Pvt Ltd",
    role: "Graduate Trainee",
    duration: "Aug 2021 - Mar 2022",
    projectBrief: "Analyzed operations and parameters to maintain performance and quality.",
    responsibilities: [
      "Ensured optimal performance of manufacturing operations.",
      "Verified process parameters for quality compliance."
    ],
    result: "Maintained high-quality standards and smooth operations."
  }
];


export const projects = [
  {
    title: "Process Digitalization & Data Analysis",
    description: "Implemented Trigger Management System, automated PPC planning, and web applications to streamline automation.",
    tools: ["Power BI", "Power Apps", "Power Automate", "SAP"],
    icon: FaCogs
  },
  {
    title: "Automation Implementation",
    description: "Implemented Order Management System, Manufacturing Execution System and Semi Auto Label Sticker.",
    tools: ["Power BI", "Power Apps", "ERP"],
    icon: FaTachometerAlt
  },
  {
    title: "Dashboard Development",
    description: "Created dashboards in Power BI and SQL to track production, sales, inventory, HR metrics, and supply chain.",
    tools: ["Power BI", "SQL"],
    icon: FaChartLine
  }
];

export const certificates = [
  {
    name: "Microsoft Power BI Desktop for Business Intelligence",
    link: "https://drive.google.com/file/d/1AkpriKrnrxX7v-dwsA2iPp82CzERg90I/view?usp=sharing",
    logo: "/images/excel.png"
  },
  {
    name: "Preparing Data for Analysis with Microsoft Excel",
    link: "https://drive.google.com/file/d/1WvlrZAvackZ9HgKj1BDZiM2dgpPurvPB/view?usp=sharing",
     logo: "/images/microsoft.png"
  },
  {
    name: "Data Visualization and Dashboards with Excel",
    link: "https://drive.google.com/file/d/1o-g_YBG3c2P7wSshVVQ6rvEpb1ZAY3b1/view?usp=sharing",
    logo: "/images/ibm.png"
  },
  {
    name: "Databases and SQL for Data Science with Python",
    link: "https://drive.google.com/file/d/1o-g_YBG3c2P7wSshVVQ6rvEpb1ZAY3b1/view?usp=sharing",
    logo: "/images/ibm.png"
  }
];

export const awards = [
  {
    title: "Spot Award",
    organization: "Jindal Aluminium Limited",
    date: "Apr 2023",
    description: "Conducted data analysis to reduce oil consumption, saving ₹200/day.",
    logo: "/images/jindal_logo.png",
    link: "https://drive.google.com/file/d/1o-g_YBG3c2P7wSshVVQ6rvEpb1ZAY3b1/view?usp=sharing"
  }
];

export const personal = {
  hobbies: [
    { icon: "FaVolleyballBall", title: "Volleyball", detail: "Won 1st prize in company tournaments 🏆" },
    { icon: "FaBook", title: "Reading", detail: "Tech blogs, BI trends, and data analytics books" },
    { icon: "FaLaptopCode", title: "Coding & Learning", detail: "Exploring Python, Data Science, and ML" },
    { icon: "FaPlane", title: "Traveling", detail: "Exploring new places and cultures" }
  ],
  funFact: "Coffee lover ☕ and problem-solving geek"
};
