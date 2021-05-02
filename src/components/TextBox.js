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
        <div id="content-area" className="container">
            <div class="row">
                <div className="col-md-10 offset-1">
                    <label htmlFor="break-text-area">Enter text:</label>
                    <textarea
                        id="break-text-area"
                        name="break-text-area"
                        rows="10"
                        cols="64"
                        ref={(x) => {
                            textArea = x;
                        }}
                        onKeyUp={(e) => {
                            setContent(e.target.value);
                            console.log(content);
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="row button-container">
                <div className="col-md-8 offset-2 pull-right">
                    <button
                        id="dance-button"
                        type="button"
                        className="btn btn-primary"
                        onClick={handleBreaks}
                    >
                        Dance
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextBox;
