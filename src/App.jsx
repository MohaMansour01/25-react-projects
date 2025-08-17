import "./App.css";
import Accordian from "./components/Accordion";
import ImageSlider from "./components/imageSlider";
import RandomColor from "./components/RandomColorGenerator";
import StarRating from "./components/starRating/inedx";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}
      {/* Random Color Selector */}
      {/* <RandomColor /> */}
      {/* Star Rating */}
      {/* <StarRating numberOfStars={10} /> */}
      {/* Image Slider */}
      <ImageSlider url={`https://picsum.photos/v2/list`} pages={'1'} limit={10} />
    </div>
  );
}

export default App;
