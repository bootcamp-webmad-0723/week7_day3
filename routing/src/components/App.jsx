import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'

import projectsData from './projects-data.json'
import ParamsExample from './ParamsExample/ParamsExample'
import StringsExample from './StringsExample/StringsExample'
import ProjectDetailsPage from './ProjectDetailsPage/ProjectDetailsPage'

const App = () => {

  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/sobre-mi' element={<AboutPage />} />
        <Route path='/proyectos' element={<ProjectsPage projectsData={projectsData} />} />
        <Route path='/proyecto/:project_id' element={<ProjectDetailsPage projectsData={projectsData} />} />

        {/* ROUTE PARAMS */}
        <Route path='/vuelos/:origin/:destination/:date' element={<ParamsExample />} />

        {/* QUERY STRINGS */}
        <Route path='/resultados' element={<StringsExample />} />

        <Route path='*' element={<NotFoundPage />} />

      </Routes>

    </div>
  )
}

export default App
