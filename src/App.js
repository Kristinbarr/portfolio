import React from 'react'
import data from './projectData'
import SingleProject from './components/SingleProject'
import './App.css'

function App() {
  // const [projects, setProjects] = useState([])

  return (
    <main>
      <h1>Kristin Barr</h1>
      <h2>Developer | Designer | Creator</h2>
      <h3>About</h3>
      <h3>Projects</h3>
      {data.map((proj) => (
        <>
          <SingleProject project={proj} />
        </>
      ))}
    </main>
  )
}

export default App
