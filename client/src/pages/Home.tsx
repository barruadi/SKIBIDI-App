import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import './Home.css';
import Navbar from "./Navbar.tsx";
import { useUser } from "@clerk/clerk-react";

const Home = () => {
    const {user} = useUser();
    return (
        <div>
            <SignedIn>
                <Navbar />

                <div className="p-4 space-y-4" style = {{paddingTop:"6vh"}}>
                    <div className="box">
                        <h1> Hello {user?.firstName} </h1>
                        <h2 className="text-lg font-semibold">Your Wallet:</h2>
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
                
            </SignedIn> 
            <SignedOut>
                <h1 className="text-4xl text-center">Welcome to Skibidi!</h1>
                <h2 className="text-2xl text-center">Please sign in or sign up to continue</h2>
                <div className="flex justify-center space-x-4">
                    <SignUpButton />
                    <SignInButton />
                </div>
            </SignedOut>
        </div>
    )
}

export default Home