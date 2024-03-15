import React, { useState } from "react";
import "../Styles/Body.css";

export const Body = () => {
  const [showDescription, setShowDescription] = useState("");

  const [showFetchButton, setShowFetchButton] = useState(false); // State for fetch button visibility
  const [textBoxesVisibility, setTextBoxesVisibility] = useState({});

  const handleInputChange = (val) => {
    setShowFetchButton(val.trim() !== "");
  };

  // Function to toggle the visibility of a specific textbox
  const toggleTextBox = (textboxId) => {
    setTextBoxesVisibility((prevState) => ({
      ...prevState,
      [textboxId]: !prevState[textboxId],
    }));
  };

  const tryItOut = () => {
    setShowFetchButton(true);
  }

  const showDescriptionFunction = () => {
    setShowDescription(true);
  }

  const removeDescriptionFunction = () => {
    setShowDescription(false);
    setShowFetchButton(false);
  }

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

  // Function to render the list if isOpen is true
  const renderList = () => {
    return (
      <div className="list-container">
        {data.map((newData) => (
          <ul key={newData.textBox} className="list">
            {/* Toggle the visibility of corresponding textbox on list item click */}
            <li onClick={() => toggleTextBox(newData.textBox)}>
              {newData.heading} <p>{newData.subheading}r</p>
            </li>
            <div
              style={{
                display: textBoxesVisibility[newData.textBox]
                  ? "block"
                  : "none",
              }}
            >
              <div className="parameters-container">
                <h3>Parameters</h3>
                <button style={{marginLeft: '84%'}} className="tryButton" onClick = {tryItOut}>Try it out</button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <td>participant Id
                    <h5>string</h5>
                    (path)
                  </td>
                  <td>
                    participant Id
                    <input
                      type="text"
                      className="textbox"
                      placeholder={newData.textBox}
                      // value={textboxes.textbox1}
                      onChange={(e) => handleInputChange(e.target.value)}
                    />
                  </td>
                </tbody>
              </table>
              {showFetchButton && textBoxesVisibility[newData.textBox] && (
              <div className="button-container"><button onClick={removeDescriptionFunction}>Clear</button><button onClick={showDescriptionFunction}>Fetch</button></div>
            )}
              {showDescription && <p> "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",</p>}
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
