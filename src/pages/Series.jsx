import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/list";

const Series = () => {
  return (
    <div className="movies">
      <Navbar />
      <Featured type="seri" />
      {/* type="serires"  */}
      {/* <List />
      <List />
      <List />
      <List /> */}

      <List />
    </div>
  );
};

export default Series;
