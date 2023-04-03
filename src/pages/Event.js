import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Event() {
  let navigate = useNavigate();

  return (
    <div>
      <div>오늘의 이벤트</div>
      <div>
        <div
          onClick={() => {
            navigate("one");
          }}
        >
          첫 번째!
        </div>
        <div
          onClick={() => {
            navigate("two");
          }}
        >
          두 번째!
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Event;
