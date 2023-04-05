import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavLayout from './components/layouts/NavLayout'
import { Home, About, MyList, NotFound } from './pages'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="mylist" element={<MyList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
