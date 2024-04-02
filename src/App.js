import React, { useState } from "react";
import { Body } from "./components/Body"; // Import the Body component

const LeftSidePanel = ({ openPage }) => {

  const [openReport, setOpenReport] = useState(null);

  const toggleNestedOptions = (report) => {
    setOpenReport(openReport === report ? null : report);
  };

  const handleNestedOptionClick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent container
    openPage(); // Trigger the function to open the page
  };

  return (
    <div className="left-panel">
      <ul>
        <li onClick={() => toggleNestedOptions('Reports')}>
          Reports
          {openReport === 'Reports' && (
            <ul>
              <li onClick={(e) => handleNestedOptionClick(e)}>Nested Option 1</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleNestedOptions('Reports1')}>
          Reports1
          {openReport === 'Reports1' && (
            <ul>
              <li onClick={(e) => handleNestedOptionClick(e)}>Nested Option A</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleNestedOptions('Reports2')}>
          Reports2
          {openReport === 'Reports2' && (
            <ul>
              <li>Nested Option X</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleNestedOptions('Reports3')}>
          Reports3
          {openReport === 'Reports3' && (
            <ul>
              <li>Nested Option Alpha</li>
            </ul>
          )}
        </li>
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