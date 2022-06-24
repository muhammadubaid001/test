export default function SignIn() {
    return (
        <div className="bg-hero-pattern h-screen bg-center font-sans">
            <div className="h-screen flex items-center justify-center w-full">
                <div className="bg-dark-black rounded-lg shadow p-10 w-4/5 lg:w-1/3">
                    <div className="p-2">
                        <img alt="logo" className="mx-auto" src="/Welcome%203/Group%205909.png"/>
                    </div>
                    <form className="flex flex-col space-y-4">
                        <div className="flex flex-col text-gray-300">
                            <label className="text-gray-200 text-sm mb-2">Name</label>
                            <input type="text" placeholder="Enter name"
                                   className="p-2.5 text-sm rounded-md border border-gray-700 bg-dark-black"/>
                        </div>
                        <div className="flex flex-col text-gray-300">
                            <label className="text-gray-200 text-sm mb-2">Enter password</label>
                            <input type="text" placeholder="Enter Password"
                                   className="p-2.5 text-sm rounded-md border border-gray-700 bg-dark-black"/>
                        </div>
                        <div className="flex justify-between">
                            <label className="text-gray-200 text-sm items-center flex gap-x-2">
                                <input type="checkbox"/>
                                Remember
                            </label>
                            <a className="text-primary text-sm">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="text-center bg-btn rounded-lg w-full p-3 text-gray-800">Sign In</button>
                        <button
                            className="uppercase text-center bg-dark-black border border-gray-700 rounded-lg w-full p-3 text-gray-400">Sign
                            up
                        </button>
                        <p className="text-gray-400 text-center text-sm">
                            Continue with
                        </p>
                        <div className="text-center">
                            <button className=" border border-gray-700 p-3 w-20 rounded-lg ">
                                <img alt="logo" src="https://freesvg.org/img/1534129544.png" className="h-5 w-5 mx-auto"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}