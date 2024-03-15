import React, { useState } from "react";
import { Body } from "./components/Body"; // Import the Body component

const LeftSidePanel = ({ openPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleNestedOptionClick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent container
    openPage(); // Trigger the function to open the page
  };

  return (
    <div className={`left-panel ${isOpen ? 'open' : ''}`} onClick={togglePanel}>
      <ul>
      Reports
       {isOpen && (
        <div className="nested-option" onClick={handleNestedOptionClick}>
          <li>Nested Option</li>
        </div>
      )}
      </ul>
    </div>
  );
};

const App = () => {
  const [isPageOpen, setPageOpen] = useState(false);

  const handleOpenPage = () => {
    setPageOpen(true);
  };

  return (
    <div>
      <LeftSidePanel openPage={handleOpenPage} />
      {isPageOpen && <Body />}
    </div>
  );
};

export default App;