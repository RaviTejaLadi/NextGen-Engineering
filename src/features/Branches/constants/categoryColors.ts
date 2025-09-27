import { CategoryColor } from '../types/CategoryColor';
import { CategoryName } from '../types/CategoryName';

export const categoryColors: Record<CategoryName, CategoryColor> = {
  'Core Engineering Disciplines': {
    gradient: 'from-blue-500/10 via-blue-600/5 to-cyan-500/10',
    border: 'border-blue-200/50 hover:border-blue-400/60',
    accent: 'bg-blue-500',
    glow: 'shadow-blue-500/20',
    dot: 'bg-gradient-to-r from-blue-400 to-cyan-400',
  },
  'Computer & Technology': {
    gradient: 'from-emerald-500/10 via-green-600/5 to-teal-500/10',
    border: 'border-emerald-200/50 hover:border-emerald-400/60',
    accent: 'bg-emerald-500',
    glow: 'shadow-emerald-500/20',
    dot: 'bg-gradient-to-r from-emerald-400 to-teal-400',
  },
  'Specialized Fields': {
    gradient: 'from-purple-500/10 via-violet-600/5 to-indigo-500/10',
    border: 'border-purple-200/50 hover:border-purple-400/60',
    accent: 'bg-purple-500',
    glow: 'shadow-purple-500/20',
    dot: 'bg-gradient-to-r from-purple-400 to-indigo-400',
  },
  'Emerging Technologies': {
    gradient: 'from-orange-500/10 via-red-600/5 to-pink-500/10',
    border: 'border-orange-200/50 hover:border-orange-400/60',
    accent: 'bg-orange-500',
    glow: 'shadow-orange-500/20',
    dot: 'bg-gradient-to-r from-orange-400 to-pink-400',
  },
};
