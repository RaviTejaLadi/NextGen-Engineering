export const getIconColor = (category: string): string => {
  switch (category) {
    case 'Core Engineering Disciplines':
      return 'text-blue-600';
    case 'Computer & Technology':
      return 'text-green-600';
    case 'Specialized Fields':
      return 'text-purple-600';
    case 'Emerging Areas':
      return 'text-orange-600';
    default:
      return 'text-gray-600';
  }
};
