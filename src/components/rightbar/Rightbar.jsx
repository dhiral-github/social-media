import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import Home from "../../pages/home/Home";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdaytImg" src="/assets/demogift.jpg" alt="" />
          <span className="birthdayText">
            <b>Dhiral</b> <b>and 3 other friends </b>have birthday today
          </span>
        </div>
        <img className="rightbatAd" src="/assets/demoAd.jpg" alt="" />
        <h4 className="righbarTitle">Online friends</h4>
        <ul className="righbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
        {/* <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfiletImg"
                src="/assets/tree3.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">XYZ</span>
          </li> */}
      </>
    );
  };

  const ProfileRightbar = () => {
    const userDetails = {
      dhiral: "assets/person/person1.jpg",
      walter: "assets/person/person2.jpg",
      sheperd: "assets/person/person3.jpg",
      turtule: "assets/person/person4.jpg",
      jaison: "assets/person/person1.jpg",
    };
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Surat:</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Katargam:</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single:</span>
          </div>
          <h4 className="rightbarTitle">User friedns</h4>
          <div className="righbarFollowings">
            {/* <div className="righbarFollowing">
              <img src="assets/person/person1.jpg" alt="" className="righbarFollowingImg" />
              <span className="rightbarFolowingName">dhiral variya</span>
            </div>
            <div className="righbarFollowing">
              <img src="assets/person/person2.jpg" alt="" className="righbarFollowingImg" />
              <span className="rightbarFolowingName">dhiral variya</span>
            </div>
            <div className="righbarFollowing">
              <img src="assets/person/person3.jpg" alt="" className="righbarFollowingImg" />
              <span className="rightbarFolowingName">dhiral variya</span>
            </div>
            <div className="righbarFollowing">
              <img src="assets/person/person4.jpg" alt="" className="righbarFollowingImg" />
              <span className="rightbarFolowingName">dhiral variya</span>
            </div>
            <div className="righbarFollowing">
              <img src="assets/person/person1.jpg" alt="" className="righbarFollowingImg" />
              <span className="rightbarFolowingName">dhiral variya</span>
            </div> */}

            {Object.entries(userDetails).map((array, index) => {
              return (
                <div className="righbarFollowing" key={index}>
                  <img src={array[1]} alt="" className="righbarFollowingImg" />
                  <span className="rightbarFolowingName">{array[0]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
        {/* {<ProfileRightbar />} */}
      </div>
    </div>
  );
};

export default Rightbar;
