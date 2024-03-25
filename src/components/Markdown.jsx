import { useRef } from "react";
import Button from "./Button"
import Dropdown from "./Dropdown"

export default function Markdown({ markdown, setMarkdown }) {
    const textAreaRef = useRef(null);

    const handleInsertText = (value) => {
        if (!textAreaRef.current) return;

        const { selectionStart, selectionEnd } = textAreaRef.current;
        const newValue =
            markdown.substring(0, selectionStart) +
            value +
            markdown.substring(selectionEnd);

        setMarkdown(newValue);

        const newCursorPosition = selectionStart + value.length;
        textAreaRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
        textAreaRef.current.focus();

    };

    return (
        <div className="w-[-webkit-fill-available] lg:w-1/2 h-fit lg:h-screen border-2 border-grey-200 m-5 flex flex-col rounded-md bg-grey-300">
            <div className="w-full h-8 lg:h-10 border-2 border-grey-200 flex items-center">
                <Button value="****" handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/bold.png'} />
                <Button value='**' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/italic.png'} />
                <Button value='<u></u>' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/underline.png'} />
                <Button value='- ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/puffy-filled/32/list.png'} />
                <Button value='1. ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/numbered-list.png'} />
                <Button value='- [ ] ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/todo-list.png'} />
                <Button value='[title](url) ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/link--v1.png'} />
                <Button value='``` ```' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/source-code.png'} />
                <Button value='> ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/quote-right.png'} />
                <Button value='![image](url) ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/sf-regular-filled/48/image.png'} />
                <Dropdown handleInsertText={handleInsertText} />
            </div>
            <textarea
                className="w-[-webkit-fill-available] outline-none bg-grey-300 text-white h-fit lg:h-screen p-5"
                ref={textAreaRef}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
        </div>
    );
}
