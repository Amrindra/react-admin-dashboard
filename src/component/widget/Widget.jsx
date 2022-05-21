import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  if (type === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: <PersonOutlinedIcon className="icon" />
    };
  }

  if (type === "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "See all order",
      icon: <ShoppingCartOutlinedIcon className="icon" />
    };
  }

  if (type === "earning") {
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      icon: <MonetizationOnOutlinedIcon className="icon" />
    };
  }

  if (type === "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: <AccountBalanceWalletOutlinedIcon className="icon" />
    };
  }

  return (
    <div className="widget-container">
      <div className="widget-left">
        <span className="title">USERS</span>
        <span className="counter">1234</span>
        <span className="link">Sea all USERS</span>
      </div>

      <div className="widget-right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
