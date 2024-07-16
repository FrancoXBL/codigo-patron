import { Link } from "react-router-dom";

export default function LastNewsCard({ title, img, type, id }){
    return (
      <Link to={`/news/${id}`}>
        <div className="news-card">
        <img src={img} alt={title} className="news-card__image" />
        <span className="news-card__type">{type}</span>
        <h2 className="news-card__title">{title}</h2>
      </div>
      </Link>
    )
}