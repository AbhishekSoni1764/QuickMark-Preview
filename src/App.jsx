import './App.css'
import Navbar from "./components/Navbar"
import Markdown from "./components/Markdown"
import Preview from './components/Preview'
import { useEffect, useState } from 'react'

function App() {
  const [markdown, setMarkdown] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [isVert, setIsVert] = useState(true);

  useEffect(() => {
    const showPreview = (e) => {
      if (e.shiftKey && e.key === "Enter") {
        e.preventDefault();
        setIsPreview(prevValue => !prevValue);
      }
    };

    document.addEventListener('keydown', showPreview);

    return () => {
      document.removeEventListener('keydown', showPreview);
    }
  }, []);

  const handleOrientation = () => {
    setIsVert(prevState => !prevState);
  }

  return (
    <>
      <div className={isVert ? "bg-grey-700 h-screen text-white" : "bg-grey-700 h-full min-h-screen text-white"}>
        <Navbar />
        <div className={isVert ? "flex flex-col h-[90%]" : "flex flex-col lg:flex-row"}>
          <Markdown markdown={markdown} setMarkdown={setMarkdown} isPreview={isPreview} handleOrientation={handleOrientation} isVert={isVert} />
          <Preview markdown={markdown} isPreview={isPreview} isVert={isVert} />
        </div>
      </div>
    </>
  )
}

export default App
