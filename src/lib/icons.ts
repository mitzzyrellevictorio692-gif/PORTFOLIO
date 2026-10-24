import type { FunctionalComponent } from 'vue'
import {
  Circle,
  Code2,
  Copy,
  Cpu,
  Eye,
  FolderGit2,
  FolderOpen,
  Github,
  Globe,
  GraduationCap,
  Home,
  Layers,
  Linkedin,
  Mail,
  Sparkles,
  SunMoon,
  TerminalSquare,
  Trophy,
  User,
  Wrench,
} from 'lucide-vue-next'

const registry: Record<string, FunctionalComponent> = {
  Circle,
  Code2,
  Copy,
  Cpu,
  Eye,
  FolderGit2,
  FolderOpen,
  Github,
  Globe,
  GraduationCap,
  Home,
  Layers,
  Linkedin,
  Mail,
  Sparkles,
  SunMoon,
  TerminalSquare,
  Trophy,
  User,
  Wrench,
}

export function resolveIcon(name: string): FunctionalComponent {
  return registry[name] ?? Circle
}
