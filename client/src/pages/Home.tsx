import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import './Home.css';
import Navbar from "./Navbar.tsx";
import { useUser } from "@clerk/clerk-react";
import Login from './Login.tsx';

const Home = () => {
    const {user} = useUser();
    return (
        <div className="home-container">
            <SignedIn>
                <Navbar />

                <div className="p-4 space-y-4" style = {{paddingTop:"8.5vh"}}>
                    <div className="box-1">
                        <h1> Hello {user?.firstName} </h1>
                        <h2 className="text-lg font-semibold">Your Wallet:</h2>
                        <p className="text-2xl">Rp </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="box-2">
                            <p>This Month Income</p>
                        </div>
                        <div className="box-3">
                            <p>This Month Outcome</p>
                        </div>
                    </div>
                    <div className="box-4">
                    <h2 className="text-lg font-semibold pb-2">My Income Today</h2>
                        <Link to='/transaction' className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                        +
                        </Link>
                    </div>

                    <div className="box-5">
                    <h2 className="text-lg font-semibold pb-2">My Income Today</h2>
                        <Link to='/transaction' className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                        +
                        </Link>
                    </div>
                </div>
                
            </SignedIn> 
            <SignedOut>
                <Login />
            </SignedOut>
        </div>
    )
}

export default Home