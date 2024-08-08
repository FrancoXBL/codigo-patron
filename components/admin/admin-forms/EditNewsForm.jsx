import React, { useState, useEffect } from "react";
import Login from "./LoginForm";
import axios from "axios";
import { API_KEY } from "../../../const/API_KEY";
import { useNavigate, useParams } from "react-router-dom";
import NewsPreview from "../../previews/NewsPreview";

const EditNewsForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({
    title: "",
    type: "",
    img: "",
    body: "",
    date: "",
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_KEY}/api/news/${id}`);
        setArticle(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  const [showPreview, setShowPreview] = useState(false);
  const [logged, setLogged] = useState(false);

  function mostrarVistaPrevia(sendNew, setShowPreview) {
    return (
      <>
        <NewsPreview news={sendNew} close={setShowPreview} />
      </>
    );
  }
  const navigate = useNavigate();
  const handleChange = (e) => {
      const { name, value } = e.target;
      setArticle({
          ...article,
          [name]: value,
        });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_KEY}/api/news/${id}`, article);
      navigate(`/news/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {logged ? (
        <>
          <div className={showPreview ? "preview-hide" : "form-container"}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Titulo de la noticia:</label>
                <input
                  type="text"
                  name="title"
                  value={article.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Tipo de noticia o a que ambito pertenece:</label>
                <input
                  type="text"
                  name="type"
                  value={article.type}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>URL de la imagen:</label>
                <input
                  type="text"
                  name="img"
                  value={article.img}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Cuerpo de la noticia:</label>
                <textarea
                  name="body"
                  value={article.body}
                  onChange={handleChange}
                  rows="10"
                />
              </div>
              <div className="form-group">
                <label>Fecha:</label>
                <input
                  type="date"
                  name="date"
                  value={article.date}
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="close-button"
                onClick={() => setShowPreview(true)}
              >
                Ver Vista Previa
              </button>
              <button type="submit" className="submit-button">
                Todo bien! Editar.
              </button>
            </form>
          </div>
          {!showPreview ? "" : mostrarVistaPrevia(article, setShowPreview)}
        </>
      ) : (
        <>
          <Login setLogged={setLogged} />
        </>
      )}
    </>
  );
};

export default EditNewsForm;
