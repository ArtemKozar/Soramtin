import './App.scss'
import { About, Category, Footer, Header, List } from './container'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Category />
      <List />
      <Footer />
    </div>
  )
}

export default App
