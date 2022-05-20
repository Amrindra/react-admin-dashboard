import "./Home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import Widget from "../../component/widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="home_container">
        <Header />

        <section className="widget_section">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </section>
      </div>
    </div>
  );
};
export default Home;
