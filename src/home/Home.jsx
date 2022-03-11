// import { AcUnit } from "@material-ui/icons";
import Navbar from "./../components/Navbar.jsx";
import "./home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />

      <img
        width="100%"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
    </div>
  );
};

export default Home;
