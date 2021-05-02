export default function insertLineBreaks(content, breakSequence = "<br>") {
    return content.replace(/\n/g, breakSequence);
}
