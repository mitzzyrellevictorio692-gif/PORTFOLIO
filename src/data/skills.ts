import type { SkillCategory } from '@/types/portfolio'

export const skillCategories: SkillCategory[] = [
  {
    id: 'web',
    title: 'Web Development',
    icon: 'Globe',
    skills: [
      { name: 'Vue 3', level: 'Learning', note: 'Composition API, this portfolio' },
      { name: 'TypeScript', level: 'Learning' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'HTML5', level: 'Comfortable' },
      { name: 'CSS3', level: 'Comfortable' },
      { name: 'Tailwind CSS', level: 'Used in projects' },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded Systems',
    icon: 'Cpu',
    skills: [
      { name: 'Arduino', level: 'Used in projects' },
      { name: 'ESP32', level: 'Used in projects' },
      { name: 'Microcontrollers', level: 'Comfortable' },
      { name: 'Sensors & Actuators', level: 'Comfortable' },
      { name: 'Hardware-Software Integration', level: 'Comfortable' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Computer Vision',
    icon: 'Eye',
    skills: [
      { name: 'Object Detection Concepts', level: 'Learning' },
      { name: 'AI-Assisted Systems', level: 'Learning' },
      { name: 'Obstacle Detection', level: 'Learning', note: 'Explored in NaviCane' },
      { name: 'Real-Time Monitoring', level: 'Learning' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Comfortable' },
      { name: 'Visual Studio Code', level: 'Used in projects' },
      { name: 'Vite', level: 'Used in projects' },
      { name: 'Debugging & Testing', level: 'Comfortable' },
    ],
  },
  {
    id: 'general',
    title: 'General',
    icon: 'Code2',
    skills: [
      { name: 'C/C++', level: 'Comfortable' },
      { name: 'Python', level: 'Comfortable' },
      { name: 'Research & Documentation', level: 'Comfortable' },
    ],
  },
]
