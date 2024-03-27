import { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function Preview({ markdown, isPreview, isVert }) {

    const text = DOMPurify.sanitize(marked.parse(markdown));

    return (
        <>
            {isPreview && (
                <div className={isVert ? "w-[-webkit-fill-available] h-1/2 p-5 m-5 border-2 border-grey-200 rounded-md bg-grey-250" : "w-[-webkit-fill-available] lg:w-1/2 h-fit lg:h-screen p-5 m-5 border-2 border-grey-200 rounded-md bg-grey-250"}>
                    <div className="w-full max-w-full h-full overflow-y-scroll prose tracking-wider bg-grey-250 prose-invert prose-a:text-blue-600" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            )}
        </>
    )
}
