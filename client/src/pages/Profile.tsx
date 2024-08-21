import React from "react";

const Profile = () => {
    return (
        <div className="w-full align-middle bg-gray-200">
            <div className="flex justify-center bg-gray-400 p-5">
                <img src="" alt="profile picture" className="h-32 w-32 rounded-full border-2 border-gray-700"/>
            </div>
            <div className="mt-4 text-center">
                <h2 className="font-semibold">Ini nama</h2>
            </div>
            <div className="p-4">
                <h2>email:</h2>
            </div>
            <div className="p-4">
                <h2>Phone number: {}</h2>
            </div>
            <div>
                <button className="rounded-lg bg-slate-600 py-2 px-4">logout</button>
            </div>
        </div>
    )
}

export default Profile