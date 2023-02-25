import './style.css'
import InputField from './Input field'

const PasswordReset = () => {
    return (
        <div className="container flex flex-col border-AlphaBorder rounded-lg mt-8 border-2 mx-auto max-w-[300px] sm:max-w-screen-lg  bg-white border-mainGrey">
            <div className="heading flex flex-wrap items-center gap-x-4 gap-y-2 border-AlphaBorder border-b px-6 py-2 justify-center sm:justify-start">
                <div>
                    <svg className="w-[74px] h-[34px] lg:w-[89px] lg:h-[41px]" width="89" height="41" viewBox="0 0 89 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M78.0682 0H10.9319C4.9234 0 0 4.90943 0 10.8962V30.1038C0 36.1 4.9234 41 10.9319 41H78.0682C84.0766 41 89 36.1 89 30.1038V10.8962C89 4.90943 84.0766 0 78.0682 0ZM23.7838 23.4755L26.4065 26.3208L21.8637 29.717L20.0004 26.3208C19.7258 25.8358 19.296 24.8849 18.6919 23.4755C18.031 25.0245 17.5917 25.9679 17.3739 26.3208L15.4841 29.717L10.8144 26.3208L13.6378 23.4755C14.4331 22.6924 15.2039 22.0208 15.9651 21.4698C15.1887 21.4 14.168 21.2566 12.9088 21.0208L8.99847 20.3868L10.8126 15.0811L14.3195 16.6698C14.6888 16.8358 15.6072 17.3585 17.0691 18.2245C16.7566 16.8151 16.5559 15.7679 16.465 15.0811L15.967 11.283H21.5361L21.0854 15.0811C20.987 16.0057 20.7711 17.0528 20.4511 18.2245C21.093 17.9038 21.5172 17.6906 21.7179 17.5736C22.4223 17.183 22.9658 16.9132 23.3313 16.7396L26.8401 15.0811L28.5785 20.3868L24.6984 21.1943C23.9883 21.3302 22.9355 21.4189 21.5361 21.4698C22.4848 22.2094 23.2271 22.8736 23.7838 23.4755ZM49.4935 23.4755L52.1199 26.3208L47.5771 29.7151L45.7157 26.3208C45.4411 25.8358 45.0113 24.8849 44.4091 23.4755C43.7463 25.0245 43.3108 25.9679 43.093 26.3208L41.1994 29.7151L36.5317 26.3208L39.355 23.4755C40.1504 22.6924 40.9192 22.0208 41.6823 21.4698C40.9097 21.4 39.8853 21.2566 38.626 21.0208L34.7138 20.3868L36.5298 15.0811L40.0386 16.6698C40.4041 16.8358 41.3263 17.3585 42.7863 18.2245C42.4663 16.8151 42.2655 15.7679 42.1803 15.0811L41.6804 11.2868H47.2514L46.7989 15.0811C46.6966 16.0057 46.4845 17.0528 46.1683 18.2245C46.8064 17.9038 47.2306 17.6906 47.4332 17.5736C48.1339 17.183 48.6792 16.9132 49.0466 16.7396L52.5573 15.0811L54.2976 20.3868L50.4138 21.1943C49.7037 21.3302 48.6546 21.4189 47.2533 21.4698C48.1944 22.2094 48.9386 22.8736 49.4935 23.4755ZM78.3011 28.283C78.3011 29.4509 77.341 30.4057 76.1707 30.4057H64.2504C63.0783 30.4057 62.1201 29.4509 62.1201 28.283V21.1245C62.1201 19.9566 63.0783 19.0019 64.2504 19.0019H64.5383V16.2472C64.5383 13.1283 67.0814 10.5906 70.2077 10.5906C73.336 10.5906 75.881 13.1264 75.881 16.2472V19.0019H76.1688C77.3372 19.0019 78.2992 19.9566 78.2992 21.1245V28.283H78.3011Z" fill="#3A7BD5"/>
                    </svg> {/* svg code for the img here */}
                </div>
                <h3 className='font-bold text-lg text-AlphaBlue text-center lg:text-2xl sm:text-left'>Change password</h3>
            </div>
            <div className="content flex flex-col items-center gap-x-4 pt-6 lg:flex-row lg:items-end lg:px-5  pb-8">
                <div className="flex flex-col w-full gap-8 items-center lg:=p-0 lg:w-auto lg:flex-row lg:pl-5 lg:items-end">
                    <InputField placeholder="Enter current password" invalid={false} title="Current password" />
                    <InputField placeholder="Enter new password" invalid={false} title="New Password" />
                    <InputField placeholder="Enter new password" invalid={false} title="Confirm new password" />
                </div>
                <div className="flex justify-center w-full px-10 border-AlphaBorder border-t mt-5 pt-5 lg:w-auto lg:border-none lg:p-0 lg:pr-2 lg:m-0">
                    <button className="rounded-xl py-1 text-lg w-full bg-AlphaBlue text-white font-[600] hover:bg-AlphaHover transition lg:text-xl lg:px-5 lg:py-2 lg:mt-0 lg:w-auto">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset