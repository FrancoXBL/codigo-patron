export default function AdHorizontal({ img, title, url, body }) {
  return (
    <div className="ad-box">
    <a href={url} className="ad-horizontal" target="_blank" rel="noopener noreferrer">
      <div className="ad-horizontal__image-container">
        <img src={img} alt={title} className="ad-horizontal__image" />
      </div>
    </a>
    </div>
  );
}
