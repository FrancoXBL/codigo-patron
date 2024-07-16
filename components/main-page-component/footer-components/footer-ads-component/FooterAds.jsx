export default function FooterAds({ img, title, url, body }) {
  return (
    <a href={url} className="ad-card" target="_blank" rel="noopener noreferrer">
      <div className="ad-card__image-container">
        <img src={img} alt={title} className="ad-card__image" />
      </div>
    </a>
  );
};