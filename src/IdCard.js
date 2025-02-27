function IdCard(props) {
  return (
    <div className="id-container">
      <img src={props.picture} alt="id pic" />

      <div className="subtitle">
        <p>
          <b>First Name:</b> {props.firstName}
        </p>
        <p>
          <b>Last Name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
        <p>
          <b>Birth:</b> {props.birth.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
