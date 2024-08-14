import { Link } from "react-router-dom";

export default function NormalNewsCard({ title, img, type, id }) {
  return (
    <>
      <Link to={`/news/${id}`}>
        <div className="normal-news-card">
          <span className="normal-news-card__type">{type}</span>
            <img src={img} alt={title} className="normal-news-card__image" />
            <h2 className="normal-news-card__title">{title}</h2>
        </div>
      </Link>
    </>
  );
}
