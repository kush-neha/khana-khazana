import React, { useState } from "react";
import { Body } from "./components/Body"; 
import { Body2 } from "./components/Body2"; 

const LeftSidePanel = ({ handleOpenPage, handleOpenPage2 }) => {
  const [openReport, setOpenReport] = useState(null);

  const toggleNestedOptions = (report) => {
    setOpenReport(openReport === report ? null : report);
  };

  const handleNestedOptionClick = (event, openPageFunc) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent container
    openPageFunc(); // Trigger the function to open the page
  };

  return (
    <div className="left-panel">
      <ul>
        <li onClick={() => toggleNestedOptions('Reports')}>
          Reports
          {openReport === 'Reports' && (
            <ul>
              <li onClick={(e) => handleNestedOptionClick(e, handleOpenPage)}>Nested Option 1</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleNestedOptions('Reports2')}>
          Reports2
          {openReport === 'Reports2' && (
            <ul>
              <li onClick={(e) => handleNestedOptionClick(e, handleOpenPage2)}>Nested Option X</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

const App = () => {
  const [isPageOpen, setPageOpen] = useState(false);
  const [isPageOpen2, setPageOpen2] = useState(false);

  const handleOpenPage = () => {
    setPageOpen(true);
    setPageOpen2(false);
  };

  const handleOpenPage2 = () => {
    setPageOpen2(true);
    setPageOpen(false);
  };

  return (
    <div>
      <LeftSidePanel handleOpenPage={handleOpenPage} handleOpenPage2={handleOpenPage2} />
      {isPageOpen && <Body />}
      {isPageOpen2 && <Body2 />}
    </div>
  );
};

export default App;
