import "./Profile.css";
import anujSir from "../Nav/anujSir.jpeg";
import github from "../profile/github.png";
import greentickVerified from "../profile/right.jpg";
import star from "../profile/star.png";
import like from "../profile/link.jpeg";
import eye from "../profile/eye.png";
import heart from "../profile/heart.png";

function Profile() {
  return (
    <div>
      <div className="profile">
        <img src={anujSir} alt=""  className="dp"/>
      </div>
      <div className="profile-info">
        <p className="name">Anuj Gosalia</p>
        <span>
          <img src={github} alt="" className="additional-image" />
        </span>
        <span>
          <img
            src={greentickVerified}
            alt=""
            className="additional-image"
            style={{ height: "25px", width: "26px" }}
          />
        </span>
      </div>
      <div className="box">
        <div className="rating">
          <div className="boundary">
            <p>6482</p>
          </div>
          <div className="boundary">
            <p>245</p>
          </div>
        </div>
        <p className="rating-title">
          &nbsp;Followers &nbsp;&nbsp;&nbsp; Following
        </p>
      </div>
      <div>
        <p className="headTitle">Co-founder & CEO at Terribly Tiny Tales </p>
        <a href="https://www.instagram.com/anujgoslia" className="instalink">
          https://www.instagram.com/anujgoslia
        </a>
      </div>
      <div className="likes-container">
        <span>
            <img src={star} alt="" className="likes" />
            <p className="number">125</p>
            <img src={like} alt="" className="likes" />
            <p className="number">12</p>
            <img src={eye} alt="" className="likes" />
            <p className="number">57.8k</p>
            <img src={heart} alt="" className="likes" />
            <p className="number">26.0k</p>
        </span>
      </div>
    </div>
  );
}

export default Profile;
