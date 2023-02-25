import { useLocation } from '../../Import/index'
import NavMenu from './NavMenu'
import ProfileCircle from './ProfileCircle';
import closeIcon from './assets/close.svg';

const Drawer = (props) => {
    const location = useLocation().pathname;
    const mainMenu = [
        {title: "Dashboard", icon: "home", link:"/"},
        {title: "Members", icon: "members", link:"/members"},
        {title: "Finance", icon: "finance", link:"/finance"},
        {title: "Departments", icon: "departments", link:"/departments"},
        {title: "Tasks management", icon: "tasks", link:"/tasks"},
        {title: "Events", icon: "events", link:"/events"},
        {title: "Resources", icon: "resources", link:"/resources"}
    ];
    const supportMenu = [
        {title: "Settings", icon: "settings", link:"/settings"},
        {title: "Help", icon: "help", link:"/help"},
        {title: "Sign out", icon: "logout", link:"/logout"}
    ];

    if(location === '/login') {
    return null
    } else {
        return (
            <nav id='drawer' className={`transition-[left] ease-in-out duration-500 bg-white py-8 px-6 grid content-between gap-10 text-sm z-10 absolute lg:static ${props.isOpen ? "left-[-300px]" : "left-0"}`}>
                <div className='space-y-12'>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-3xl font-bold">Alphabit</h2>
                        <button onClick={props.toggleDrawer} className='block lg:hidden'><img src={closeIcon} alt="close" className='w-[20px]'/></button>
                    </div>
                    <div className='space-y-6'>
                        <NavMenu title="main menu" pages={mainMenu} location={location}/>
                        <hr className='border-mainGrey'/>
                        <NavMenu title="support" pages={supportMenu} location={location}/>
                    </div>
                </div>
                <ProfileCircle />
            </nav>
        );
    }
}
 

export default Drawer