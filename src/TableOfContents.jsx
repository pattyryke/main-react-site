import React from "react";

function TableOfContents({ pages, onPageChange }) {
    const handleItemClick = (index) => {
      const selectedPage = pages[index];
      onPageChange(selectedPage.component);
    };
  
    return (
      <div className="TableOfContents">
        <h2>Table Of Contents</h2>
        <ul>
          {pages.map((page, index) => (
            <li key={index} onClick={() => handleItemClick(index)}>
              {page.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default TableOfContents