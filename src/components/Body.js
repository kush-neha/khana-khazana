import React, { useState } from "react";
import "../Styles/Body.css";

export const Body = () => {
  // State to track whether the list is open or not
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showFetchButton, setShowFetchButton] = useState(false); // State for fetch button visibility
  // State to manage the visibility of textboxes
  const [textBoxesVisibility, setTextBoxesVisibility] = useState({});

  // Function to handle input change
  const handleInputChange = (val) => {
    setInputValue(val);
    // Show fetch button if input value is not empty
    setShowFetchButton(val.trim() !== "");
  };

  // Function to toggle the state of isOpen
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the visibility of a specific textbox
  const toggleTextBox = (textboxId) => {
    setTextBoxesVisibility((prevState) => ({
      ...prevState,
      [textboxId]: !prevState[textboxId],
    }));
  };

  const data = [
    {
      textBox: "textbox1",
      paragraph:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
    },
    {
      textBox: "textbox2",
      paragraph:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
    },
    {
      textBox: "textbox3",
      paragraph:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
    },
    {
      textBox: "textbox4",
      paragraph:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
    },
    {
      textBox: "textbox5",
      paragraph:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
    },
    {
      textBox: "textbox6",
      paragraph:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
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
              Rtp API <p>RTP response Status Controller</p>
            </li>
            <div className="spanAndTextbox">
              <input
                type="text"
                className="textbox"
                style={{
                  display: textBoxesVisibility[newData.textBox] ? "block" : "none",
                }}
                placeholder={newData.textBox}
                // value={textboxes.textbox1}
                onChange={(e) => handleInputChange(e.target.value)}
              />
              {textBoxesVisibility[newData.textBox] && (
                <span>{newData.paragraph}</span>
              )}
            </div>
            {showFetchButton && textBoxesVisibility[newData.textBox] && (
              <button className="fetchButton">Fetch</button>
            )}
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

      {/* Render a button that toggles the list */}
      <button className="button" onClick={toggleList}>
        Reports
      </button>
      {/* Render the list if isOpen is true */}
      {isOpen && renderList()}
    </div>
  );
};
