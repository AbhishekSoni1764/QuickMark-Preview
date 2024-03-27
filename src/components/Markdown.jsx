import { useRef, useState } from "react";
import Button from "./Button"
import Dropdown from "./Dropdown"

export default function Markdown({ markdown, setMarkdown, isPreview, isVert, handleOrientation }) {
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
        <div className={isVert ? "w-[-webkit-fill-available] h-[50%] border-2 border-grey-200 m-5 flex flex-col rounded-md bg-grey-300" : "w-[-webkit-fill-available] lg:w-1/2 h-fit lg:h-screen border-2 border-grey-200 m-5 flex flex-col rounded-md bg-grey-300"}>
            <div className="w-full h-8 lg:h-10 border-2 border-grey-700 flex items-center">
                <Button value="**Bold Text**" handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/bold.png'} />
                <Button value='*Italicized Text*' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/italic.png'} />
                <Button value='<u>Underlined Text</u>' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/underline.png'} />
                <Button value={'- List Item 1\n- List Item 2'} handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/puffy-filled/32/list.png'} />
                <Button value={'1. List Item 1\n2. List Item 2'} handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/numbered-list.png'} />
                <Button value='- [ ] Check List' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/todo-list.png'} />
                <Button value='[Link Text](https://) ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/link--v1.png'} />
                <Button value={'\n```\nThis is Formatted as Code\n```'} handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/source-code.png'} />
                <Button value='> Quoted Text' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/ios-filled/50/quote-right.png'} />
                <Button value='![Image](url) ' handleInsertText={handleInsertText} imgUrl={'https://img.icons8.com/sf-regular-filled/48/image.png'} />
                <Dropdown handleInsertText={handleInsertText} />
                <button className='text-bold hover:shadow-inner hover:shadow-grey-700 border-2 border-grey-300 w-14 h-full flex items-center justify-center' onClick={handleOrientation}>
                    <img className="h-5 w-5" src={isVert ? 'https://img.icons8.com/ios-filled/50/split-horizontal.png' : "https://img.icons8.com/ios-filled/50/split-vertical.png"} alt="lgos" />
                </button>
            </div>
            <textarea
                className={isVert ? "w-[-webkit-fill-available] outline-none bg-grey-250 text-white h-[100%] p-5" : "w-[-webkit-fill-available] outline-none bg-grey-250 text-white h-fit lg:h-screen p-5"}
                ref={textAreaRef}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Text Here ..."
            />
            {!isPreview && <h3 className="p-5 bg-grey-250">Shift + Enter to Show Preview</h3>}
        </div>
    );
}
