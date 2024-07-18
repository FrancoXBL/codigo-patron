import { Link } from "react-router-dom";

export default function LastNewsCard({ title, img, type, id }) {
  return (
    <div className="news-card">
      <Link to={`/news/${id}`}>
        <img src={img} alt={title} className="news-card__image" />
        <span className="news-card__type">{type}</span>
        <h2 className="news-card__title">{title}</h2>
      </Link>
    </div>
  );
}
