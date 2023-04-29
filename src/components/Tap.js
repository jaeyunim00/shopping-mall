import { useEffect, useState } from "react";

function Tap({ i }) {
  let [fade, setFade] = useState("");

  // useEffect(() => {}, [탭]);

  return [
    <div className="start">
      <div>내용1</div>, <div>내용2</div>, <div>내용3</div>
    </div>,
  ][i];
}

export default Tap;
