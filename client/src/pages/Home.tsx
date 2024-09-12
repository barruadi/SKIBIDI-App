import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import './Home.css';
import Navbar from "../components/Navbar.tsx";
import TransactionButton from "../components/transaction-button.tsx";
import { useUser } from "@clerk/clerk-react";
import Login from './Login.tsx';
import grafik from "../assets/grafik.png"

const Home = () => {
    const {user} = useUser();
    return (
        <div className="home-container h-screen">
            <SignedIn>
                <Navbar />
                <div className="p-4 space-y-4" style = {{paddingTop:"8.5vh"}}>
                    <div className="box-1 text-white font-semibold">
                        <h1> Hello, {user?.firstName} </h1>
                        <p className="text-4xl text-custom-color font-semibold">My Wallet</p>
                        <p className="text-2xl font-semibold pb-2">Rp 3.242.500,00</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="box-2">
                            <p className="text-custom-color text-center font-semibold">This Month Income</p>
                            <p className="text-white text-center text-xl font-semibold">Rp 5.000.000,00</p>
                        </div>
                        <div className="box-2">
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