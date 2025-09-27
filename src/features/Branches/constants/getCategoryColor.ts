export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Core Engineering Disciplines':
      return 'border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100';
    case 'Computer & Technology':
      return 'border-green-200 bg-gradient-to-br from-green-50 to-green-100';
    case 'Specialized Fields':
      return 'border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100';
    case 'Emerging Areas':
      return 'border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100';
    default:
      return 'border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100';
  }
};
