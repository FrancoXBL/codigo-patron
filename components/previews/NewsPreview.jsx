import ReactMarkdown from "react-markdown";
export default function NewsPreview({ news, close }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <h1>{news.title}</h1>
      <p>
        <strong>Tipo de noticia:</strong> {news.type}
      </p>
      <img
        src={news.img}
        alt={news.title}
        style={{ news: "100%", height: "auto" }}
      />
      <ReactMarkdown>{news.body}</ReactMarkdown>
      <p>
        <strong>Fecha:</strong> {news.date}
      </p>
      <button
        type="button"
        className="close-button"
        onClick={() => close(false)}
      >
        Cerrar y seguir editando
      </button>
    </div>
  );
}
