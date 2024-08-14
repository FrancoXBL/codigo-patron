import { useParams, useNavigate } from "react-router-dom";
import MarkdownRenderer from "../react-markdown/markdown-renderer";
import { CiClock1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../const/API_KEY";
import LoadingScreen from "../loading-component/LoadingComponent";
import { Helmet } from "react-helmet";

export default function UniqueNewPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [idNew, setNews] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Solicitud usando el ID
                const response = await axios.get(`${API_KEY}/api/news/${id}`);
                const newsData = response.data;
                setNews(newsData);
                setLoading(false);

                // Cambia el título de la página
                document.title = `" ${newsData.title} "` || "Noticia";

            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNews();
    }, [id, navigate]);

    if (loading) return <LoadingScreen />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="unique-new-page">
            {/* Open Graph Meta Tags */}
            <Helmet>
                <meta property="og:title" content={idNew.title} />
                <meta property="og:description" content={idNew.type} />
                <meta property="og:image" content={idNew.img} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="article" />
            </Helmet>

            <p className="text-hidden-new-page">{idNew.type}</p>
            <h1 className="unique-new-page-title">{idNew.title}</h1>
            <hr />
            <div className="img-unique-new-container">
                <p><CiClock1 />{idNew.date}</p>
                <img className="img-unique-new" src={idNew.img} alt="" />
            </div>
            <div className="markdown-style">
                <MarkdownRenderer markdown={idNew.body.trim()} />
            </div>
        </div>
    );
}
