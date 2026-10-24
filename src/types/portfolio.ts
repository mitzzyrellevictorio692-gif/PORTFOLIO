export interface SocialLink {
  id: 'github' | 'linkedin' | 'email' | 'location'
  label: string
  href: string
  display: string
}

export type SkillLevel = 'Learning' | 'Comfortable' | 'Used in projects'

export interface Skill {
  name: string
  level: SkillLevel
  note?: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  skills: Skill[]
}

export type ProjectCategory = 'AI & Research' | 'Embedded Systems' | 'Web'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  overview: string
  objectives: string[]
  tech: string[]
  illustration: 'navicane' | 'esp32-led' | 'traffic-light' | 'servo-gate' | 'generic'
  github: string
  demo: string
  prototype?: boolean
}

export interface Achievement {
  id: string
  title: string
  date: string
  description: string
  kind: 'achievement' | 'placeholder'
}

export interface EducationInfo {
  school: string
  degree: string
  expectedGraduation: string
  coursework: string[]
  academicProjects: string[]
}

export interface StatusEntry {
  label: string
  value: string
}

export interface Sprite {
  name: string
  width: number
  height: number
  palette: Record<string, string>
  grid: string[]
}

export interface Command {
  id: string
  title: string
  keywords: string[]
  group: 'Navigate' | 'Actions' | 'Theme' | 'Fun'
  icon: string
}

export interface PortfolioConfig {
  name: string
  title: string
  headline: string
  intro: string
  handle: string
  tagline: string
  location: string
  locationBadge: string
  githubUsername: string
  social: SocialLink[]
  status: StatusEntry[]
}

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
}

export interface LanguageStat {
  language: string
  count: number
  percent: number
}
