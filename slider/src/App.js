import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from "./Component/Slide";
import  { responsive } from "./Component/Data";
import Stylesheet from "./Component/Style.css"
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const slide = data.map((item) => (
        <Slide
            name={item.title}
            url={item.image}
            price={"$" + item.price}
            description={item.description}
            category = {item.category}
        />
    ));
  return (
    <div className="App">
      <Carousel
          showDots={false}
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
