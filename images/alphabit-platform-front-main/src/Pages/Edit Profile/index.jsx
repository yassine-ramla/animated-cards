import { Navbar, Drawer, EditProfile, PasswordReset, ProfileDetails } from "../../Import";


const EditProfilePage = () => {
return (
<>
    <section className="flex w-full justify-center md:justify-start">
        <section className="grid p-2 max-w-screen-lg mx-auto justify-items-center w-full">
            <div className="pt-8 grid grid-flow-row sm:w-full sm:grid-flow-col justify-items-center gap-8 sm:gap-16">
                <EditProfile />
                <ProfileDetails />
            </div>
            <PasswordReset />
        </section>
    </section>
</>
);
}

export default EditProfilePage;