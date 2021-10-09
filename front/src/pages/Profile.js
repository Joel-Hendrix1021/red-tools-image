import { useContext } from "react";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

const Profile = () => {
  const { user } = useContext(GlobalUserContext);
  console.log(user);
  return (
    <div>
      <h4>username: {user.user.username}</h4>
      <h4>email: {user.user.email}</h4>
    </div>
  );
};

export default Profile;