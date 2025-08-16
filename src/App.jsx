import './App.css'
import Accordian from './components/Accordion'
import RandomColor from './components/RandomColorGenerator'
import StarRating from './components/starRating/inedx'

function App() {

  return (
      <div className='App'>
        {/* Accordian component */}
        {/* <Accordian /> */}
        {/* Random Color Selector */}
        {/* <RandomColor /> */}
        {/* Star Rating */}
        <StarRating numberOfStars={10} />
      </div>
  )
}

export default App
