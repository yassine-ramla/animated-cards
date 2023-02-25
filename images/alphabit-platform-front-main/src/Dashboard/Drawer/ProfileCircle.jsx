import profileImg from './assets/profile.png';
import { Link } from 'react-router-dom';


const ProfileCircle = () => {
    const profileImage = profileImg;
    const user = {name: "Abdelkrim Zitouni", role: "admin"}
    return (  
        <Link to="/profile" className='flex gap-3 bg-lightGrey rounded-2xl items-center px-3 py-3'>
            <img src={profileImage} alt="#"/>
            <div className='flex-1'>
                <p className='text-mainBlue font-bold max-w-[145px] overflow-hidden text-base'>{user.name}</p>
                <p className='capitalize text-mainGrey'>{user.role}</p>
            </div>
        </Link>
    );
}
 
export default ProfileCircle;