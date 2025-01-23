import './App.css'
import PrefMenu from './assets/components/PrefMenu/PrefMenu'
import CurrentWindowProvider, { CurrentWindowContext } from './assets/context/currentwindow'

function App() {

  return (
    <>
    <CurrentWindowProvider>
      <PrefMenu/> 
    </CurrentWindowProvider>
    </>
  )
}

export default App
