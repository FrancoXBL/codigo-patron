import { useParams } from "react-router-dom";
import MarkdownRenderer from "../react-markdown/markdown-renderer";
import { CiClock1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../const/API_KEY";
 export default function UniqueNewPage() {

    const {id} = useParams()

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(`${API_KEY}/api/news`);
          setNews(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const idNew = news.find(idNew => idNew._id === id)

    return (
        <div className="unique-new-page">
            <p className="text-hidden-new-page">{idNew.type}</p>
            <h1 className="unique-new-page-title">{idNew.title}</h1>
            <hr />
            <div className="img-unique-new-container">
            <p><CiClock1 />{idNew.date}</p>
            <img className="img-unique-new" src={idNew.img} alt="" />
            </div>
            <div className="markdown-style">
            <MarkdownRenderer markdown={idNew.body.trim()}/>
            </div>
        </div>
    )

}