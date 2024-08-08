import React, { useState, useEffect } from "react";
import Login from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaDeaf } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { API_KEY } from "../../../const/API_KEY";
import { TbGitBranchDeleted } from "react-icons/tb";

const AdminPanel = () => {
  const [logged, setLogged] = useState(false);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_KEY}/api/news`, {
          params: { limit: 10 },
        });
        setNews(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      const deleted = await axios.delete(`${API_KEY}/api/news/${id}`);
      console.log(deleted);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {logged ? (
        <>
          <div className="admin-panel-links">
            <Link to={"/admin/news-form"}>AGREGAR NOTICIA</Link>
            <Link to={"/admin/match-form"}>AGREGAR PARTIDO AL HISTORIAL</Link>
            <Link to={"/admin/next-match-form"}>AGREGAR PROXIMO PARTIDO</Link>
            <h1>EDITAR O ELIMINAR NOTICIA</h1>
            {news
              .slice()
              .reverse()
              .map((news, index) => (
                <div className="cards" key={index}>
                  <p>{news.title}</p>
                  <div className="links">
                    <Link to={`/edit-new/${news._id}`}>
                      <FaEdit />
                    </Link>
                    <Link
                      onClick={() => {
                        if (
                          window.confirm(
                            "¿Estás seguro de que deseas eliminar esta noticia?"
                          )
                        ) {
                          handleDelete(news._id);
                        }
                      }}
                    >
                      <FaDeleteLeft />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          <Login setLogged={setLogged} />
        </>
      )}
    </>
  );
};

export default AdminPanel;
