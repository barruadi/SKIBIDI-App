import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import './Home.css';
import Navbar from "./Navbar.tsx";
import TransactionButton from "../components/transaction-button.tsx";
import { useUser } from "@clerk/clerk-react";
import Login from './Login.tsx';
// import logo1 from "../assets/logo-food.png"
// import logo2 from "../assets/logo-transport.png"
// import logo3 from "../assets/logo-other.png"
// import logo4 from "../assets/logo-education.png"
// import logo5 from "../assets/logo-entertainment.png"
import grafik from "../assets/grafik.png"
import leaderboard from "../assets/leaderboard.png"

const Home = () => {
    const {user} = useUser();
    return (
        <div className="home-container h-full">
            <SignedIn>
                <Navbar />
                <TransactionButton/>
                <div className="p-4 space-y-4" style = {{paddingTop:"8.5vh"}}>
                    <div className="box-1 text-white font-semibold">
                        <h1> Hello, Raihan {user?.firstName} </h1>
                        <p className="text-4xl text-custom-color font-semibold">My Wallet</p>
                        <p className="text-2xl font-semibold pb-2">Rp 3.242.500,00</p>
                        <h2 className="text-xs text-custom-color font-semibold">masih dalam proses penyambungan back-end :)</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="box-2">
                            <p className="text-custom-color text-center font-semibold">This Month Income</p>
                            <p className="text-white text-center text-xl font-semibold">Rp 5.000.000,00</p>
                        </div>
                        <div className="box-3">
                        <p className="text-custom-color text-center font-semibold">This Month Outcome</p>
                        <p className="text-white text-center text-xl font-semibold">Rp 1.757.500,00</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src={grafik}
                            alt="grafik"
                            className="squared-full"/>
                    </div>
                    <div className="box-4">
                        <h2 className="text-2xl text-custom-color font-bold text-center pb-1">LEADERBOARD</h2>
                        <div className="flex items-center justify-center pb-3">
                            <img
                                src={leaderboard}
                                alt="leaderboard"
                                className="squared-full"/>
                        </div>
                    </div>
                    <div className="box-5">
                        <h2 className="text-xl text-custom-color font-semibold pb-1">My Income Today</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-white text-xl font-semibold">Rp 100.000,00</p>
                            <Link to='/transaction' className="bg-green-500 text-white text-2xl font-bold border-white border-4 squared-full h-8 w-8 flex items-center justify-center pb-1.5">
                            +
                            </Link>
                        </div>
                    </div>
                    {/* <div className="box-6 pb-6">
                        <h2 className="text-2xl text-custom-color font-bold text-center pb-6">My Spending</h2>
                        <div className="flex justify-center pb-6">
                            <div className="flex flex-col items-center">
                                <Link to='/transaction' className="text-black font-bold rounded-full h-16 w-16 flex items-center justify-center">
                                <img
                                    src={logo1}
                                    alt="Food"
                                    className="h-full w-full rounded-full object-cover"/>
                                </Link>
                                <h1 className="text-black font-bold">Food</h1>
                            </div>
                            <div className="flex flex-col items-center mx-10">
                                <Link to='/transaction' className="text-black font-bold rounded-full h-16 w-16 flex items-center justify-center">
                                <img
                                    src={logo2}
                                    alt="Transport"
                                    className="h-full w-full rounded-full object-cover"/>
                                </Link>
                                <h1 className="text-black font-bold">Transport</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative flex items-center justify-center">
                                    <Link to='/transaction' className="text-black font-bold rounded-full h-16 w-16 flex items-center justify-center">
                                    <img
                                        src={logo3}
                                        alt="Other"
                                        className="h-full w-full rounded-full object-cover"/>
                                    </Link>
                                    <Link to='/transaction' className="absolute text-black font-bold text-xl top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    ...
                                    </Link>
                                </div>
                                <h1 className="text-black font-bold">Other</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-6">
                            <div className="flex flex-col items-center">
                                <Link to='/transaction' className="text-black font-bold rounded-full h-16 w-16 flex items-center justify-center">
                                <img
                                    src={logo4}
                                    alt="Education"
                                    className="h-full w-full rounded-full object-cover"/>
                                </Link>
                                <h1 className="text-black font-bold">Education</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <Link to='/transaction' className="text-black font-bold rounded-full h-16 w-16 flex items-center justify-center">
                                <img
                                    src={logo5}
                                    alt="Entertainment"
                                    className="h-full w-full rounded-full object-cover"/>
                                </Link>
                                <h1 className="text-black font-bold">Entertainment</h1>
                            </div>
                        </div>
                    </div> */}
                    <TransactionButton/>
                </div>
            
                
            </SignedIn> 
            <SignedOut>
                <Login />
            </SignedOut>
        </div>
    )
}

export default Home