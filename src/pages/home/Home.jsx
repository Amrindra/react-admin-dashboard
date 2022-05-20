import "./Home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="home_container">
        <Header />
      </div>
    </div>
  );
};
export default Home;
