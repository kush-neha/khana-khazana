import React, { useState } from "react";
import { saveAs } from "file-saver";
import "../Styles/Body2.css";

export const Body2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const blob = new Blob([searchTerm], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "search-term.txt");
  };

  const handleLoadFileClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearchChange} 
        placeholder="Enter search term" 
      />
      <button onClick={handleSearchClick}>Save Search</button>
      
      <input 
        type="file" 
        accept=".txt" 
        onChange={handleLoadFileClick} 
        style={{ display: "none" }} 
        id="fileInput"
      />
      <label htmlFor="fileInput" className="file-label">
        Load Search
      </label>
      
      {fileContent && (
        <div className="file-content">
          <h3>File Content:</h3>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
};
