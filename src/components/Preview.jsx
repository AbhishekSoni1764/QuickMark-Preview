import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function Preview({ markdown }) {

    const text = DOMPurify.sanitize(marked.parse(markdown))

    return (
        <>
            <div className="w-[-webkit-fill-available] lg:w-1/2 h-fit lg:h-screen p-5 m-5 border-2 border-black">
                <div className="w-3/6 prose" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </>
    )
}


