import MyNavBar from "./components/MyNavBar";
import Shoes from "./components/Shoes";
import Detail from "./pages/Detail";
import Event from "./pages/Event";
import data from "./database/data";
import { Routes, Route, Link } from "react-router-dom";

//Images
import bg from "./imgs/bg.png";

//Bootstrap
import { useState } from "react";

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <MyNavBar></MyNavBar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main_bg"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
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
            </>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes}></Detail>}
        ></Route>
        <Route path="/event" element={<Event></Event>}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추 즙 서비스!</div>}
          ></Route>
          <Route path="two" element={<div>생일 기념 쿠폰 받기!</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
