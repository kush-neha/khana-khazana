import React, { useState } from "react";
import "../Styles/Body.css";

export const Body = () => {
  // State to track whether the list is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state of isOpen
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  // Function to render the list if isOpen is true
  const openApi = () => {
    return (
      <div className="list-container">
        <ul className="list">
          <li>Rtp API <p>RTP response Status Controller</p></li>
          <li>Settlement Overview API <p>Settlement  Overview Controller</p></li>
          <li>access-role-controller <p>Access Role Controller</p> </li>
          <li>access-user-rest-controller <p>Access User Rest Controller</p></li>
          <li>activation-rest-controller <p>Activation Rest Controller</p></li>
          <li>cass-rest-controller <p>Cass Rest Controller</p></li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Api Documentation</h1>
      <p>Api Documentation</p>
      <p>Terms of service</p>
      <p>Apache 2.0</p>

      {/* Render a button that toggles the list */}
      <button className = "button" onClick={toggleList}>Reports</button>
      {/* Render the list if isOpen is true */}
      {isOpen && openApi()}
    </div>
  );
};
