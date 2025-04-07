import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FormCreate } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormCreate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
