import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onChange }) => {
  return (
    <div className="mb-4">
      <select value={selectedCategory} onChange={(e) => onChange(e.target.value)} className="p-2 border border-gray-300 rounded">
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
