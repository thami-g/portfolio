import profile from "../../assets/images/bottom.jpg";
import { MdOutlineEmail } from "react-icons/md";

function Profile() {
  return (
     <div className="profile">
           <img src={profile} alt="" />
           <p className="profile-name">Thami Gumede</p>
           <p className="phone">thamig125@gmail.com</p>
           <MdOutlineEmail />
         </div>
  )
}

export default Profile
