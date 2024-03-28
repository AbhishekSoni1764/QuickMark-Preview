import './App.css'
import Navbar from "./components/Navbar"
import Markdown from "./components/Markdown"
import Preview from './components/Preview'
import { useState } from 'react'

function App() {
  const [markdown, setMarkdown] = useState("");
  const [isVert, setIsVert] = useState(true);

  const handleOrientation = () => {
    setIsVert(prevState => !prevState);
  }

  return (
    <>
      <div className={isVert ? "bg-grey-700 h-screen text-white-100" : "bg-grey-700 h-full text-white-100"}>
        <Navbar />
        <div className={isVert ? "flex flex-col h-[90%]" : "flex flex-col h-screen lg:h-[90%] lg:flex-row"}>
          <Markdown markdown={markdown} setMarkdown={setMarkdown} handleOrientation={handleOrientation} isVert={isVert} />
          <Preview markdown={markdown} isVert={isVert} />
        </div>
      </div>
    </>
  )
}

export default App
