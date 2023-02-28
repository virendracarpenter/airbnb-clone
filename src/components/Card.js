function Card(props) {
  let badge;
  if (!props.openSpots) {
    badge = "SOLD OUT";
  } else if (props.location === "Online") {
    badge = "ONLINE";
  }

  return (
    <div className="card">
      {badge && <div className="card-badge">{badge}</div>}
      <img className="card-img" src={props.img} alt={props.title} />
      <div className="card-stats">
        <span className="card-star"> 🟍 </span>
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) · </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p>
        <span className="bold">From ${props.rate}</span> / person
      </p>
    </div>
  );
}

export default Card;
