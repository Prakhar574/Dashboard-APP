
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleChange = (e) => {
    setEditorContent(e.target.value);
  };

  const handleBold = () => {
    setIsBold(!isBold);
  };

  const handleItalic = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const handleSave = () => {
    localStorage.setItem("editorContent", editorContent);
    alert("Content saved!");
  };

  const getEditorStyle = () => {
    return {
      fontWeight: isBold ? "bold" : "normal",
      fontStyle: isItalic ? "italic" : "normal",
      textDecoration: isUnderline ? "underline" : "none",
    };
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5">Rich Text Editor</Typography>

      <div style={{ marginBottom: "20px" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleBold}
          style={{ marginRight: "10px" }}
        >
          Bold
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleItalic}
          style={{ marginRight: "10px" }}
        >
          Italic
        </Button>
        <Button
          variant="outlined"
          color="default"
          onClick={handleUnderline}
        >
          Underline
        </Button>
      </div>

      <textarea
        value={editorContent}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "200px",
          ...getEditorStyle(), 
        }}
        placeholder="Type something here..."
      />

      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Content
        </Button>
      </div>
    </div>
  );
};

export default RichTextEditor;
