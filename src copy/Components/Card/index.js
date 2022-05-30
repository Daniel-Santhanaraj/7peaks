import "./index.scss";
import placeholder from "../../images/placeholder.jpg";

function Card({ news, type, desc = false }) {
  const bgStyle = {
    backgroundImage: news.fields.thumbnail
      ? `url( ${news.fields.thumbnail} )`
      : `url( ${placeholder})`,
  };
  return (
    <div className={`card ${type}`} style={bgStyle}>
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
