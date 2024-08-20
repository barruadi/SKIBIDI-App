import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Home = () => {
    return (
        <div className="p-4 space-y-4">
            <div className="box">
                <h2 className="text-lg font-semibold">My Wallet:</h2>
                <p className="text-2xl">Rp </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="box">
                    <p>Grafik</p>
                </div>
                <div className="box">
                    <p>Leaderboard</p>
                </div>
            </div>
            <div className="box">
            <h2 className="text-lg font-semibold pb-2">My Income Today</h2>
                <Link to='/transaction' className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                +
                </Link>
            </div>
        </div>
    )
}

export default Home