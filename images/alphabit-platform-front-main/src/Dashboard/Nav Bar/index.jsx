import React from "react";
import seachIcon from './assets/search.svg';
import notificationIcon from './assets/notification.svg';
import menuIcon from './assets/menu.svg';
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
const haveNotification = true;
const today = new Date();
const todayDate = today.toLocaleString('default', { month: "long" })+" "
+today.toLocaleString('default', { day: "numeric" })+" "
+today.toLocaleString('default', { year: "numeric" });
const todayTime = today.toLocaleString('default', { timeStyle: "short", hour12: true });
const location = useLocation().pathname;

if(location === '/login') {
      return null
    } else {
      return (
      <header
        className="flex justify-between gap-6 py-5 px-4 sm:px-8 border-b bg-lightGrey border-[#E5EAEE] text-sm font-medium">
        <div className="flex gap-4 items-center">
          <button onClick={props.toggleDrawer} className="shrink-0 aspect-square w-[35px] lg:hidden"><img src={menuIcon}
              alt="toggle" /></button>
          <form action="/" className='bg-white py-3 px-5 rounded-2xl flex items-center gap-4'>
            <div className="flex-1"><input type="text" className='pl-2 w-full' placeholder='Search' /></div>
            <button><img src={seachIcon} alt="search icon" /></button>
          </form>
        </div>

        <div className="flex gap-4 shrink-0">
          <div className="bg-white rounded-2xl px-5 py-3 items-center hidden sm:flex">
            {todayDate} , { todayTime.toUpperCase() }
          </div>
          <button className="bg-white rounded-full p-3 relative hover:opacity-60">
            <div className={`w-[6px] aspect-square rounded-full absolute bg-mainRed top-[11px] right-[12px] ${haveNotification
              ? "block" : "hidden" }`}></div>
            <img src={ notificationIcon } alt="notification" />
          </button>
        </div>
      </header>
      );
   }
}