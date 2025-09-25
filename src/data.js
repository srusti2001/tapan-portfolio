import {FaChartLine, FaChartBar, FaUsers } from "react-icons/fa";
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
    projectBrief: "Process Digitalization, MIS Analysis & Data Analysis, Automation Implementation, Dashboard Development, and Process Improvement.",
    responsibilities: [
      "Developed 60+ MIS reports in Power BI, providing real-time insights into supply chain, sales, human resources, import, export, finance, legal, costing, quality, maintenance, production performance, and the status of SAP enhancement projects and customized web application projects.",
      "Automated and consolidated 125+ reports from different departments into 60+ dynamic Power BI reports for real-time analysis and data-driven decision-making.",
      "Integrated SAP HANA and ERP data sources with BI tools to enable continuous data flow for real-time analysis.",
      "Developed a Trigger Management System across cross-functional departments to send reminders before the expiry date of subscriptions or AMC renewals.",
      "Analyzed customer complaints using Power BI and SQL, leading to a 30% reduction in complaints.",
      "Automated PPC planning via SAP analysis, Power BI reports, and PPC logic, centralizing operations.",
      "Developed and implemented an automated label printing Excel sheet using VBA to accurately print customer order details on stickers, saving each shop floor supervisor 2 hours per day.",
      "Played a pivotal role in the successful execution of the Automation Project OMS and CIMS. Responsibilities"
    ],
    result: "Improved operational efficiency, reduced complaints by 30% and process automation."
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
    title: "Production Performance Dashboard",
    description: "Production performance contains daily operation KPIs for trend analysis on a day-wise, MTD, and YTD basis for decision-making and expanding units as per demand.",
    tools: ["Power BI", "SQL","SAP","Excel"],
    icon: FaChartLine,
    link:"https://github.com/kalapahad2000/Production-Performance-Dashboard",
    image:"/images/Prod.jpeg"
  },
  {
    title: "Pizza Sales Power BI Dashboard",
    description: "The Pizza Sales Project is a data analysis and visualization project aimed at analyzing and visualizing sales data from a fictional pizza restaurant chain. This project utilizes SQL for data extraction and transformation and Power BI for data visualization. The goal of this project is to provide insights and actionable information to help the pizza restaurant chain optimize its operations, improve sales, and enhance customer satisfaction.",
    tools: ["Power BI", "Data Analysis", "Data Visualization","SQL","Excel"],
    icon: FaChartBar,
    link:"https://github.com/kalapahad2000/Pizza-Sales-Report",
    image:"/images/Pizza.jpeg"
  },
  {
    title: "SN Crop Power BI Dashboard",
    description: "This project harnesses the power of Power BI to bring insights and visualizations to life, specifically focused on crop data.The goal is to provide users with valuable information and analysis through clear and compelling visuals, helping them understand various aspects of crop data.",
    tools: ["Power BI", "Data Analysis", "Visualization"],
    icon: FaChartLine,
    link:"https://github.com/kalapahad2000/SN-Crop-Power-BI-Dashboard",
    image:"/images/SNCrop.jpeg"
  },
  {
    title: "Adventure Works Power BI Dashboard",
    description: "This Power BI dashboard empowers AdventureWorks, a global cycling equipment manufacturer, with data-driven insights for informed decision-making. It equips the management team to analyze key performance indicators (KPIs), identify regional sales variations, understand product performance trends, and segment high-value customers.",
    tools: ["Power BI", "Animated Charts", "Data Visualization"],
    icon: FaChartBar,
    link:"https://github.com/kalapahad2000/Power-BI-Dashboard-for-AdventureWorks",
    image:"/images/Adventure.jpeg"
  },
  {
    title: "HR Analysis Power BI Dashboard",
    description: "Help an organization to improve employee performance and improve employee retention (reduce attrition) by creating a HR Analytics dashboard.",
    tools: ["Power BI", "Power Query", "DAX", "Dashboarding"],
    icon: FaUsers,
    link:"https://github.com/kalapahad2000/HR-Analytics-Dashboard",
    image:"/images/HR.jpeg"
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
