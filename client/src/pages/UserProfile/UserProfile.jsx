import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./userProfile.css";

export default function UserProfile() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const { id } = useParams();
  console.log(id);

  return (
    <div className="userprofile df fd-c ai-c">
      <div className="userprofile-main df bs-0 bd-0 br">
        <div className="userprofile-left df fd-c">
          <img
            src={
              user?.result?.imageUrl ||
              `https://avatars.dicebear.com/api/initials/${user?.result?.name}")}.svg`
            }
            alt=""
            className="userprofile-pic"
          />
          <button className="active-button">Edit Profile</button>
        </div>
        <div className="userprofile-right fd-c">
          <h3 className="mb-1">Name : {user?.result?.name}</h3>
          <span>email: {user?.result?.email}</span>
        </div>
      </div>
      <footer className="footer">
        <h3>Want to Start a Shop or Already have Shops</h3>
        <Link
          className="shop-btn link"
          to={user?.result?.hasShop ? `/admin/products` : `/shopregister`}
        >
          Start a shop
        </Link>
      </footer>
    </div>
  );
}