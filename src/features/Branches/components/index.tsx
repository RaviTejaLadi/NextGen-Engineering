import React from 'react';
import BranchesHeader from './BranchesHeader';
import BranchesContent from './BranchesContent';

const Branches: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <BranchesHeader />
        {/* Content */}
        <BranchesContent />
      </div>
    </div>
  );
};

export default Branches;
