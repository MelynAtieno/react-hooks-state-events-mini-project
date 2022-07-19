import React from "react";

function CategoryFilter({category, selectedCategory, onSelectCategory}) {
  const className = category === selectedCategory ? "selected" : null;
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button key={category} className={className} onClick={() => onSelectCategory(category)}>
        {category}
      </button>
      
    </div>
  );
}

export default CategoryFilter;
