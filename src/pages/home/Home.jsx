import "./Home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import Widget from "../../component/widget/Widget";
import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="home_container">
        <Header />

        <section className="widget_sections">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </section>

        <section className="chart_sections">
          <Featured />
          <Chart />
        </section>
      </div>
    </div>
  );
};
export default Home;
