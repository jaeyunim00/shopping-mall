import MyNavBar from "./MyNavBar";
import Shoes from "./Shoes";
import data from "./data";

//Images
import bg from "./imgs/bg.png";

//Bootstrap
import { useState } from "react";

function App() {
  const [shoes, setShoes] = useState(data);

  console.log(shoes);

  return (
    <div className="App">
      <MyNavBar></MyNavBar>
      <div className="main_bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="container">
        <div className="row">
          {shoes.map((shoe) => {
            return (
              <Shoes
                imgLink={shoe.imgLink}
                id={shoe.id}
                title={shoe.title}
                content={shoe.content}
                price={shoe.price}
              ></Shoes>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
