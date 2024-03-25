import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function Preview({ markdown }) {

    const text = DOMPurify.sanitize(marked.parse(markdown))

    return (
        <>
            <div className="w-[-webkit-fill-available] lg:w-1/2 h-fit lg:h-screen p-5 m-5 border-2 border-grey-200 rounded-md bg-grey-300">
                <div className="w-full max-w-full h-full overflow-y-scroll prose tracking-wider bg-grey-300 prose-invert" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </>
    )
}
