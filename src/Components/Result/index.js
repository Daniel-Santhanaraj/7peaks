import Card from "../Card";
import "./index.scss";
function Result({ results, title = "" }) {
  return (
    <div className="container">
      {title && <h1>{title}</h1>}
      <div className="sports">
        {results &&
          results.map((data, i) => (
            <Card news={data} type="type2" key={data.id} />
          ))}
      </div>
    </div>
  );
}

export default Result;
