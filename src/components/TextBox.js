import React, { useState } from "react";

const TextBox = () => {
    const [content, setContent] = useState("");

    return (
        <div>
            <label for="content-area"></label>
            <textarea id="content-area" name="content-area" rows="12" cols="64"></textarea>
            <button type="button" class="btn btn-primary">
                Dance
            </button>
        </div>
    );
};

export default TextBox;
