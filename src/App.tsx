import './App.css'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'
import { Button } from './components/ui/button'

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-col">
        <Navigation />
        <Widget />
      </div>
    </div>
  )
}

export default App
