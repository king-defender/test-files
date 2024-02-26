import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from "./Component/Slide";
import { slideData, responsive } from "./Component/Data";
import Stylesheet from "./Component/Style.css"

function App() {
    const slide = slideData.map((item) => (
        <Slide
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));
  return (
    <div className="App">
      <Carousel
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          responsive={responsive}
      >
          {slide}
      </Carousel>
    </div>
  );
}

export default App;
