import React, { useEffect, useState } from "react";
import insertLineBreaks from "../utils/insertLineBreaks";
import "../styles/TextBox.css";

const TextBox = () => {
    const [content, setContent] = useState("");
    let textArea;

    const handleBreaks = () => {
        textArea.value = insertLineBreaks(textArea.value);
    };

    useEffect(() => {}, []);

    return (
        <div id="content-area">
            <label htmlFor="break-text-area"></label>
            <textarea
                id="break-text-area"
                name="break-text-area"
                rows="12"
                cols="64"
                ref={(x) => {
                    textArea = x;
                }}
                onKeyUp={(e) => {
                    setContent(e.target.value);
                    console.log(content);
                }}
            ></textarea>
            <button type="button" className="btn btn-primary" onClick={handleBreaks}>
                Dance
            </button>
        </div>
    );
};

export default TextBox;
