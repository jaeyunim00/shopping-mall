import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, plusAge } from "./../store/userSlice";
import { plus } from "../store/basketSlice";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <h5>
        {state.user.name}
        {state.user.age}의 장바구니
      </h5>
      <button
        onClick={() => {
          dispatch(plusAge(100));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.basket.map((x, i) => {
            return (
              <tr key={i}>
                <td>{state.basket[i].id}</td>
                <td>{state.basket[i].name}</td>
                <td>{state.basket[i].count}</td>
                <button
                  onClick={() => {
                    dispatch(plus(state.basket[i].id));
                  }}
                >
                  +
                </button>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
