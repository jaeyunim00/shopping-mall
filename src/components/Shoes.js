import { useNavigate } from "react-router-dom";

function Shoes(props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4" id={props.id}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="80%"
        onClick={() => {
          navigate(`detail/${props.shoes.id}`);
        }}
      />
      <h4
        onClick={() => {
          navigate(`detail/${props.shoes.id}`);
        }}
      >
        {props.shoes.title}
      </h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Shoes;
