import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tap from "../components/Tap";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../store/basketSlice";
import { Context1 } from "./../App";

function Detail(props) {
  const { id } = useParams();
  const 찾는상품 = props.shoes.find((shoe) => {
    return shoe.id == id;
  });
  const [visible, setVisible] = useState("block");
  const [수량, 수량설정] = useState("");
  const [탭, 탭변경] = useState(0);

  let { 재고 } = useContext(Context1); //보관함 해체 해줌.

  let dispatch = useDispatch();

  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(찾는상품.id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);

  useEffect(() => {
    let a = setTimeout(() => {
      setVisible("none");
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(수량) == true) {
      alert("그러지마세요");
    }
  }, [수량]);

  return (
    <div className="container">
      <div className="alert alert-warning" style={{ display: visible }}>
        2초 이내 구매시 할인
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾는상품.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <input
          type="text"
          placeholder="수량"
          value={수량}
          onChange={(event) => {
            수량설정(event.target.value);
          }}
        ></input>
        <div className="col-md-6">
          <h4 className="pt-5">{찾는상품.title}</h4>
          <p>{찾는상품.content}</p>
          <p>{찾는상품.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 3, name: "red knit", count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}></TabContent>
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
