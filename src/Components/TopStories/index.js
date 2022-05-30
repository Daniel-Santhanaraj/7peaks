import Card from "../Card";
import "./index.scss";
function TopStories({ results }) {
  return (
    <div className="container">
      <div className="topStories">
        {results &&
          results.map((data, i) => {
            if (i === 0) {
              return (
                <Card news={data} type="type1" key={data.id} desc={true} />
              );
            } else if (i < 3) {
              return <Card news={data} type="type3" key={data.id} />;
            } else if (i < 5) {
              return <Card news={data} type="type4" key={data.id} />;
            } else {
              return (
                <Card news={data} type="type2" key={data.id} desc={true} />
              );
            }
          })}
      </div>
    </div>
  );
}

export default TopStories;
