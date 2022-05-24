import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-top">
        <h1 className="featured-title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="featured-bottom">
        <div className="featured-chart"></div>
      </div>
    </div>
  );
};

export default Featured;
