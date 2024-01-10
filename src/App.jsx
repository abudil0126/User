import './App.css'
import {Routes, Route} from 'react-router-dom'
import Users from './pages/Users'
import SavedUsers from './pages/SavedUsers'


function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Users />}></Route>
        <Route path="saved" element={<SavedUsers />}></Route>
      </Routes>
    </>
  )
}

export default App
