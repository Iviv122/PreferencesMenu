import "tailwindcss";

export default function Account() {
    return (
        <div className="w-full max-w-sm text-left space-y-5 m-2">
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Type here..."
            />

            <label className="block text-sm font-medium text-slate-700">UserName</label>
            <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Type here..."
            />

            <div className="text-gray-500 text-xs">
            </div>
            <div className="mt-1 flex space-x-3">
                <label
                    htmlFor="female"
                    className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                    <span>Female</span>
                    <input type="radio" id="female" name="gender" />
                </label>
                <label
                    htmlFor="male"
                    className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                    <span>Male</span>
                    <input type="radio" id="male" name="gender" />
                </label>
                <label
                    htmlFor="other"
                    className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                    <span>Custom</span>
                    <input type="radio" id="other" name="gender" />
                </label>

            </div>
            <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                    Save
                </button>
            </div>
        </div>
    );
}
