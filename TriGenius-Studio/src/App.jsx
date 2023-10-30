import React from 'react'
import './index.css'
import { Route, Routes } from "react-router-dom";
import { AboutUsPage, HomePage, LoginPage, ProjectsPage } from './pages'

function App () {
  return (
        <Routes>
            <Route
               path= '/'
               element={<HomePage />}
               >
                
            </Route>

            <Route
               path= '/about'
               element={<AboutUsPage />}
               >

            </Route>

            <Route
               path= '/projects'
               element={<ProjectsPage />}
               >

            </Route>

            <Route
               path= '/contact'
               element={<HomePage />}
               >
            </Route>
            
            <Route
               path= '/login'
               element={<LoginPage />}
               >

            </Route>
        </Routes>

  )
}

export default App
