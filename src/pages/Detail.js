import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tap from "../components/Tap";
import { Nav } from "react-bootstrap";
function Detail(props) {
  const { id } = useParams();
  const 찾는상품 = props.shoes.find((shoe) => {
    return shoe.id == id;
  });
  const [visible, setVisible] = useState("block");
  const [수량, 수량설정] = useState("");

  console.log(찾는상품.id);
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tap></Tap>
    </div>
  );
}

export default Detail;
