import type { Project, ProjectCategory } from '@/types/portfolio'

export const projectCategories: ProjectCategory[] = ['AI & Research', 'Embedded Systems', 'Web']

export const projects: Project[] = [
  {
    id: 'navicane',
    title: 'NaviCane: AI-Assisted Smart Helmet',
    category: 'AI & Research',
    prototype: true,
    overview:
      'An academic research prototype exploring how to help visually impaired individuals navigate more safely. The proposed system combines object detection, LiDAR-based distance measurement, audio warnings, voice guidance, and emergency tracking.',
    objectives: [
      'Explore obstacle awareness using object detection concepts',
      'Measure distance to nearby obstacles with a LiDAR-based approach',
      'Provide audio warnings and voice guidance for navigation cues',
      'Investigate emergency tracking for added safety',
    ],
    tech: ['Object Detection', 'LiDAR', 'Audio Guidance', 'Embedded', 'Research'],
    illustration: 'navicane',
    github: '#',
    demo: '',
  },
  {
    id: 'esp32-led',
    title: 'ESP32 Emergency LED System',
    category: 'Embedded Systems',
    overview:
      'An interrupt-based control system using an ESP32, an LED, and a push button to demonstrate responsive, hardware-driven event handling.',
    objectives: [
      'Use hardware interrupts for immediate, responsive input handling',
      'Control an LED based on push-button events',
      'Practice clean, event-driven embedded firmware structure',
    ],
    tech: ['ESP32', 'C/C++', 'Interrupts', 'GPIO'],
    illustration: 'esp32-led',
    github: '#',
    demo: '',
  },
  {
    id: 'traffic-light',
    title: 'Arduino Traffic Light Controller',
    category: 'Embedded Systems',
    overview:
      'A traffic light controller built on Arduino, implementing sequencing, digital I/O, timing logic, and button interaction.',
    objectives: [
      'Implement a correct red/yellow/green sequence with timing logic',
      'Drive multiple outputs with digital I/O',
      'Add pedestrian button interaction to alter the sequence',
    ],
    tech: ['Arduino', 'C/C++', 'Digital I/O', 'Timing'],
    illustration: 'traffic-light',
    github: '#',
    demo: '',
  },
  {
    id: 'servo-gate',
    title: 'ESP32 Servo-Based Gate',
    category: 'Embedded Systems',
    overview:
      'A gate control system using an ESP32 and a servo motor, with PWM signal control for gate movement and buzzer feedback.',
    objectives: [
      'Control a servo motor using PWM signals',
      'Open and close a gate mechanism reliably',
      'Provide buzzer feedback for gate state changes',
    ],
    tech: ['ESP32', 'Servo', 'PWM', 'C/C++'],
    illustration: 'servo-gate',
    github: '#',
    demo: '',
  },
]
