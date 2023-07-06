import MyNavBar from "./components/MyNavBar";
import Shoes from "./components/Shoes";
import Detail from "./pages/Detail";
import Event from "./pages/Event";
import data from "./database/data";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Cart from "./components/Cart";

//Images
import bg from "./imgs/bg.png";

//Bootstrap
import { createContext, useEffect, useState } from "react";

export let Context1 = createContext(); //context 만들어줌.(state보관함)

function App() {
  useEffect(() => {
    if (localStorage.getItem("watched")) {
    } else {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  const [shoes, setShoes] = useState(data);
  const [loading, setLoading] = useState(true);
  const [재고] = useState([10, 11, 12]);
  async function handleMoreBtn() {
    setLoading(false);
    await axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        const copy = [...shoes, ...result.data];
        setShoes(copy);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
                  {setLoading ? (
                    shoes.map((shoe, i) => {
                      return <Shoes shoes={shoes[i]} i={i} key={i}></Shoes>;
                    })
                  ) : (
                    <div>로딩중</div>
                  )}
                </div>
                <button onClick={handleMoreBtn}>상품 더보기</button>
              </div>
            </>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes}></Detail>
            </Context1.Provider>
          }
        ></Route>
        <Route path="/event" element={<Event></Event>}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추 즙 서비스!</div>}
          ></Route>
          <Route path="two" element={<div>생일 기념 쿠폰 받기!</div>}></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
