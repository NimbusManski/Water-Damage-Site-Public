
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' index element={<Layout />} />
     </Routes>
  </BrowserRouter>
)
}

export default App
