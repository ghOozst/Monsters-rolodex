import './card.style.css';

const Card = ({ monster: { name, email, id } }) => (
  <div className="card-container" key={id}>
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
