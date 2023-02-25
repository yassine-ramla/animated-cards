import { MemberProgress, Notifications, Scheduel, Stats } from '../../Import'

const MembersProgressPage = () => {
return (
<>
    <section className="flex flex-col w-full bg-mainPageBG p-4 md:p-8">
        <div className="h-fit flex flex-col justify-between items-end w-full gap-4 lg:flex-row">
            <div className='w-full pt-8 flex gap-8 flex-col'>
                <div className='lg:pl-16'>
                    <h1 className='font-bold text-5xl'>Hi Adidi, welcome back!</h1>
                    <p className='text-sm text-mainGrey mt-5'>Here is some important information for you:</p>
                </div>
                <Notifications />
            </div>
            <Scheduel />
        </div>
        <div className="py-4 h-fit flex flex-col justify-between items-center w-full gap-4 lg:flex-row lg:pt-8 lg:pb-0">
            <MemberProgress />
            <Stats />
        </div>
    </section>
</>
)
}

export default MembersProgressPage