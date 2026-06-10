import React from 'react'
import { FaCode, FaLaptopCode, FaTools } from 'react-icons/fa'

export const summary =
  'Junior Full-Stack Developer with hands-on experience building responsive web and mobile applications for Android and iOS. Proficient in C# .NET for backend development, SQL Server for data storage and management, and Ionic-Angular for frontend development.'

export const skills = [
  {
    icon: <FaCode className="w-4 h-4 text-[#4d93ff]" />,
    title: 'Frontend',
    items: ['Angular', 'Ionic-Angular', 'Nebular (Angular UI)', 'JavaScript', 'TypeScript', 'HTML5 / CSS3', 'Figma'],
  },
  {
    icon: <FaLaptopCode className="w-4 h-4 text-[#4d93ff]" />,
    title: 'Backend',
    items: ['C#', '.NET 8/9', 'REST APIs', 'WebSocket', 'SQL (queries & scripting)', 'CQRS', 'Domain-Driven Design (DDD)'],
  },
  {
    icon: <FaTools className="w-4 h-4 text-[#4d93ff]" />,
    title: 'Tools & Others',
    items: ['Git / GitHub', 'npm', 'nvm', 'Visual Studio Code', 'Visual Studio 2022', 'SQL Server 2019/2022', 'Swagger', 'Azure Blob Storage', 'Trello'],
  },
]

export const experiences = [
  {
    title: 'Junior Front-end Developer',
    company: 'ORD Technology Inc',
    location: 'Mandaluyong',
    period: '2023 – 2024',
    points: [
      'Developed and maintained responsive, cross-platform web and mobile applications for Android and iOS using Angular and Ionic.',
      'Translated Figma designs into scalable, high-quality user interfaces with a focus on usability and performance.',
      'Integrated and managed RESTful APIs to ensure reliable data flow between front-end and back-end systems.',
      'Engaged directly with clients to discuss feature roadmaps, provide technical input, and help plan upcoming system enhancements.',
    ],
  },
  {
    title: 'Junior Full-Stack Developer',
    company: 'ORD Technology Inc',
    location: 'Mandaluyong',
    period: '2024 – Present',
    points: [
      'Implemented real-time features using WebSocket, enhancing core functionalities such as messaging and live notifications.',
      'Designed and implemented request cancellation logic across front-end and back-end, reducing redundant API calls and improving system performance.',
      'Improved backend efficiency by reducing server memory consumption by approximately 60–70%.',
      'Planned and structured application data models and data structures based on client requirements, system workflows, and technical discussions.',
      'Applied Domain-Driven Design (DDD) and CQRS principles to structure backend services, improving maintainability, scalability, and separation of concerns.',
      'Collaborated with clients and stakeholders to gather requirements, translate business needs into technical solutions, and support long-term system development planning.',
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'San Sebastian College-Recoletos de Cavite',
    period: '2019 – 2023',
    points: [
      "Dean's Lister (SY 2020–2021 & SY 2021–2022)",
      'Capstone Project: IoT Snack Vending Machine',
    ],
  },
]

export default { skills, experiences, education, summary }
