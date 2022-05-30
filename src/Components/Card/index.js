import { useNavigate } from "react-router-dom";
import "./index.scss";
import placeholder from "../../images/placeholder.jpg";

function Card({ news, type, desc = false }) {
  const bgStyle = {
    backgroundImage: news.fields.thumbnail
      ? `url( ${news.fields.thumbnail} )`
      : `url( ${placeholder})`,
  };

  let navigate = useNavigate();

  const getNews = () => {
    localStorage.setItem("activeNews", JSON.stringify(news));
    navigate(`/news`);
  };
  return (
    <div className={`card ${type}`} style={bgStyle} onClick={() => getNews()}>
      <div className="title">
        <h2>{news.webTitle}</h2>
        {desc && (
          <p dangerouslySetInnerHTML={{ __html: news.fields.trailText }}></p>
        )}
      </div>
    </div>
  );
}

export default Card;
