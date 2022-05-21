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
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </section>
      </div>
    </div>
  );
};
export default Home;
