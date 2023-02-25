import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './style.css'
export default function EditProfile() {
    return (
      <div className="edit-profile border-mainGrey bg-white">
        <div className="top">
          <FontAwesomeIcon className='icon' icon={faCircleUser}></FontAwesomeIcon>
          <h2>Edit profile</h2>
        </div>
  
        <div className="profile-pic">
          <div className="left">
            <h4>Profile picture</h4>
            <div className="upload">
              <button>Upload Image</button>
            </div>
          </div>
          <div className="right">
            <div className="image"></div>
          </div>
        </div>
        <form action="">
          <div className="inputs">
          <label htmlFor="fname">First name</label>
          <input type="text" id='fname' required/>
          <label htmlFor="lname">Last name</label>
          <input type="text" id='lname' required/>
          <label htmlFor="num">Phone number</label>
          <input type="tel" id='num' required/>
          </div>
          <div className="submit">
          <input type="submit" id='submit' value='Submit'/>
          </div>
        </form>
      </div>   
    );
  }

