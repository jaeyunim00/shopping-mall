function Shoes(props) {
  return (
    <div className="col-md-4" id={props.id}>
      <img src={props.imgLink} width="80%" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Shoes;
