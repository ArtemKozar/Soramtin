import {useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NavLayout from './components/layouts/NavLayout/NavLayout'
import {Home, About, MyList, NotFound} from './pages'
import QueryContext from "./contexts/QueryContext";

import './App.scss'

function App() {

  const [query, setQuery] = useState("All")

  const queryContextValue = {
    query,
    setQuery
  }

  return (
    <BrowserRouter>
      <QueryContext.Provider value={queryContextValue}>
        <div className="app">
          <Routes>
            <Route path="/" element={<NavLayout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="mylist" element={<MyList/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
        </div>
      </QueryContext.Provider>
    </BrowserRouter>
  )
}

export default App
