import "./List.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Header />
        Datatable
      </div>
    </div>
  );
};
export default List;
