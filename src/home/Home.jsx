import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import "./home.scss";
import List from "../components/list/list";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      {/* type="serires"  */}
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
