import React, { useState } from "react";
import "../Styles/Body.css";

export const Body = () => {
  const [textBoxesVisibility, setTextBoxesVisibility] = useState({});
  const [inputFieldValues, setInputFieldValues] = useState({});
  const [fetchedValues, setFetchedValues] = useState({});
  const [showDescription, setShowDescription] = useState({});

  const handleInputChange = (textBoxId, val) => {
    setInputFieldValues((prevState) => ({
      ...prevState,
      [textBoxId]: val,
    }));
  };

  const toggleTextBox = (textBoxId) => {
    setTextBoxesVisibility((prevState) => ({
      ...prevState,
      [textBoxId]: !prevState[textBoxId],
    }));
  };

  const tryItOut = (textBoxId) => {
    setFetchedValues((prevState) => ({
      ...prevState,
      [textBoxId]: true,
    }));
  };

  const showDescriptionFunction = (textBoxId) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [textBoxId]: true,
    }));
    // No need to set fetchedValues here
    setInputFieldValues((prevState) => ({
      ...prevState,
      [textBoxId]: inputFieldValues[textBoxId],
    }));
  };

  const removeDescriptionFunction = (textBoxId) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [textBoxId]: false,
    }));
  };

  const data = [
    {
      heading: "Rtp API",
      subheading: "RTP response Status Controller",
      textBox: "textbox1",
    },
    {
      heading: "Settlement Overview API",
      subheading: "Settlement Overview Controller",
      textBox: "textbox2",
    },
    {
      heading: "access-role-controller",
      subheading: "Access Role Controller",
      textBox: "textbox3",
    },
    {
      heading: "access-user-rest-controller",
      subheading: "Access User Rest Controller",
      textBox: "textbox4",
    },
    {
      heading: "activation-rest-controller",
      subheading: "Activation Rest Controller",
      textBox: "textbox5",
    },
    {
      heading: "cass-rest-controller",
      subheading: "Cass Rest Controller",
      textBox: "textbox6",
    },
  ];

  const renderList = () => {
    return (
      <div className="list-container">
        {data.map((newData) => (
          <ul key={newData.textBox} className="list">
            <li onClick={() => toggleTextBox(newData.textBox)}>
              {newData.heading} <p>{newData.subheading}</p>
            </li>
            <div
            style={{
              display: textBoxesVisibility[newData.textBox] ? "block" : "none",
              backgroundColor: "lightskyblue"
            }}
            >
              <div className="parameters-container">
                <h3>Parameters</h3>
                <button
                  style={{ marginLeft: "84%" }}
                  className="tryButton"
                  onClick={() => tryItOut(newData.textBox)}
                >
                  Try it out
                </button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>participant Id</td>
                    <td>
                      participant Id
                      <input
                        type="text"
                        className="textbox"
                        placeholder={newData.textBox}
                        value={inputFieldValues[newData.textBox] || ""}
                        onChange={(e) =>
                          handleInputChange(newData.textBox, e.target.value)
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              {fetchedValues[newData.textBox] && (
                <div className="button-container">
                  <button onClick={() => removeDescriptionFunction(newData.textBox)}>
                    Clear
                  </button>
                  <button onClick={() => showDescriptionFunction(newData.textBox)}>
                    Fetch
                  </button>
                </div>
              )}
              {showDescription[newData.textBox] && (
                <p className="terminal">{inputFieldValues[newData.textBox]}</p>
              )}
            </div>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Api Documentation</h1>
      <p>Api Documentation</p>
      <p>Terms of service</p>
      <p>Apache 2.0</p>
      {renderList()}
    </div>
  );
};
