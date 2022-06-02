import "./NewPage.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const NewPage = () => {
  return (
    <div className="newPage">
      <Sidebar />

      <div className="newPage_container">
        <Header />

        <div className="newPage_top">
          <h1>Add New User</h1>
        </div>

        <div className="newPage_bottom">
          <div className="newPage_left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>

          <div className="newPage_right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Choose Image:{" "}
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <div className="formInput">
                <label htmlFor="">Username: </label>
                <input type="text" placeholder="john_doe" />
              </div>

              <div className="formInput">
                <label htmlFor="">Name and surname: </label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="formInput">
                <label htmlFor="">Email: </label>
                <input type="email" placeholder="johndoe@gmail.com" />
              </div>

              <div className="formInput">
                <label htmlFor="">Phone: </label>
                <input type="text" placeholder="+1 234 567 8901" />
              </div>

              <div className="formInput">
                <label htmlFor="">Passowrd: </label>
                <input type="password" />
              </div>

              <div className="formInput">
                <label htmlFor="">Address: </label>
                <input type="text" placeholder="Boston Boston MA" />
              </div>

              <div className="formInput">
                <label htmlFor="">Country: </label>
                <input type="text" placeholder="USA" />
              </div>

              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPage;
