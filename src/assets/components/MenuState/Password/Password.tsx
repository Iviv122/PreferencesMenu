export default function Password() {
    return (
        <div className="w-full max-w-sm text-left space-y-5 m-2">
            <label className="block text-sm font-medium text-slate-700">Previous Password</label>
            <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Type here..."
            />

            <label className="block text-sm font-medium text-slate-700">New Password</label>
            <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Type here..."
            />
            <label className="block text-sm font-medium text-slate-700">Confirm password</label>
            <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Type here..."
            />
            <div className="text-gray-500 text-xs">
            </div>

            <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                    Save
                </button>
            </div>
        </div>
    );
}
