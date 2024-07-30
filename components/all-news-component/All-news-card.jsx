import { Link } from "react-router-dom";

export default function AllNewsCard({ title, img, type, id, body }) {
  return (
    <Link to={`/news/${id}`}>
      <div className="all-news-card">
        <div className="container-all-new-card">
          <img src={img} alt={title} className="all-news-card__image" />
        </div>
        <div>
          {/* <hr /> */}
          <h3 className="all-news-card__type">{type}</h3>
          <div className="all-news-card-text">
            <h2 className="all-news-card__title">{title}</h2>
          </div>
          {/* <hr /> */}
        </div>
      </div>
    </Link>
  );
}
