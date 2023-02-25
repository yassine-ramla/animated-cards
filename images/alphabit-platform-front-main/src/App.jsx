import { useState } from "react";
import { Login, EditProfilePage, MembersProgressPage, Drawer, Navbar } from "./Import";
import { Routes, Route } from "react-router-dom";

function App() {
  /* Defining state to toggle drawer, will later use redux to avoid the re-render of whole page */
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(state => !state);
  return (
      <div className="flex font-mainFont text-mainBlack">
        {/* ALL PAGES HAVE NAVBAR AND SIDEBAR BESIDES LOGIN PAGE, MAIN LAYOUT IS DONE, JUST HAVE TO ROUTE THE PAGES */}
        <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
        {/*No need for min height later it's' just for testing toggling*/}
        <div className="flex-1 bg-lightGrey min-h-screen"> 
          <Navbar toggleDrawer={toggleDrawer}/>
          <main>
            {/*PAGES CONTENT IS HERE */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<EditProfilePage />} />
              <Route path="/progress" element={<MembersProgressPage />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;