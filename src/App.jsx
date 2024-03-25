import './App.css'
import Navbar from "./components/Navbar"
import Markdown from "./components/Markdown"
import Preview from './components/Preview'
import { useState } from 'react'

function App() {
  const [markdown, setMarkdown] = useState("# Enter Text ...")

  return (
    <>
      <div className="bg-grey-700 text-white">
        <Navbar />
        <div className="flex flex-col lg:flex-row">
          <Markdown markdown={markdown} setMarkdown={setMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </>
  )
}

export default App
