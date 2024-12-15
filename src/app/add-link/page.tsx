"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

import React, { useState, useEffect } from "react";
// import { getAuth, onAuthStateChanged, User } from "firebase/auth"; // Import Firebase Auth
// import { auth } from "@/firebase";  // Import the Firebase auth instance

export default function Home() {

    const router = useRouter();

    const handleHome = ()=>{
        router.push('/');
    }

    // handle log out
    const handleLogoutRedirect = () => {
        router.push("/logout");
    }

    const [url, setUrl] = useState("");
    const [status, setStatus] = useState("");
    const [statusColor, setStatusColor] = useState(""); // New state for dynamic color

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // send post request to api
        const response = await fetch("api/checkPhishing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();

        //klo upload sukses
        if (data.isPhishing) {
            setStatus(`Cool, successfully adding the link`);
            setStatusColor("text-green-500"); // Set color to green for safe links
        } else {
            setStatus('Failed to add link');
            setStatusColor("text-red-500"); // Set color to red for phishing links
        }
    };

    const user = "dummy"; // INI PENG DI SINI

    return (
        <div className='items-center justify-items-center min-h-screen bg-customDark'>

            <header>
                <nav className='bg-customLight flex flex-row items-center justify-between'>
                    {/* logo */}
                    <Link href="/" className='pl-2'>
                        <Image src="/assets/logo.png" alt="logo" width={130} height={130}/>
                    </Link>

                    <div className='flex gap-10 mr-10 text-xl font-base text-white tracking-wider font-kanit items-center'>

                        <div className="text-white text-lg font-kanit">
                            Welcome, {user.displayName || "User"} {/* Display the username */}
                        </div>

                        <Button size='lg' variant='ghost' className='border-2 border-white' onClick={handleHome}>
                            Home
                        </Button>

                        <Button size='lg' variant='secondary' onClick={handleLogoutRedirect}>
                            Logout
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                 width="24px" fill="#000000">
                                <path
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                            </svg>
                        </Button>

                    </div>
                </nav>
            </header>

            {/*main*/}
            <main className='mt-32 w-full'>

                {/*main text*/}
                <div className='flex flex-col items-center gap-20 w-full'>
                    {/*title*/}
                    <h1 className='font-jaro text-9xl tracking-widest text-white'>
                        ADD PHISING LINK
                    </h1>

                    {/*desc*/}
                    <h2 className='text-4xl font-ABeeZee text-white'>
                        Are you sure want to add this link as phising link?
                    </h2>

                    {/*form*/}
                    <div className="w-full">

                        <form onSubmit={handleSubmit}
                              className="flex w-full item items-center justify-center gap-10 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                                 fill="#F3F3F3">
                                <path
                                    d="M440-226.67q122 0 207.67-85.5 85.66-85.5 85.66-207.83 0-122-85.66-207.67Q562-813.33 440-813.33q-122.33 0-207.83 85.66Q146.67-642 146.67-520q0 122.33 85.5 207.83 85.5 85.5 207.83 85.5ZM440-520Zm0 160q-83 0-147.5-44.5T200-520q28-70 92.5-115T440-680q82 0 146.5 45T680-520q-29 71-93.5 115.5T440-360Zm0-60q55 0 101-26.5t72-73.5q-26-46-72-73t-101-27q-56 0-102 27t-72 73q26 47 72 73.5T440-420Zm0-46.67q21.67 0 37.5-15.33 15.83-15.33 15.83-38 0-21.67-15.83-37.5-15.83-15.83-37.5-15.83-22.67 0-38 15.83-15.33 15.83-15.33 37.5 0 22.67 15.33 38 15.33 15.33 38 15.33ZM440-160q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T80-520q0-74 28.5-139.5t77-114.5q48.5-49 114-77.5T440-880q74 0 139.5 28.5T694-774q49 49 77.5 114.5T800-520q0 66-22 124.33-22 58.34-61 106l162.33 163-47 46.67-163-162.67q-47.66 39-106 60.84Q505-160 440-160Z"/>
                            </svg>
                            <Input type="text" placeholder="Is it Phisy?"
                                   className="bg-gray-200 h-16 w-1/2 text-customDark font-kanit" value={url}
                                   onChange={(e) => setUrl(e.target.value)} required/>
                            <Button size='lg' type="submit"
                                    className='bg-customLight h-16 w-28 hover:bg-white hover:text-customLight font-normal tracking-wider text-lg font-kanit'>
                                Add
                            </Button>
                        </form>
                        <div className="flex flex-row justify-center mt-24 w-full">
                            {status &&
                                <p className={`${statusColor} text-4xl font-jaro`}>{status}</p>} {/* Apply dynamic color */}
                        </div>
                    </div>
                </div>
            </main>


            <footer className="text-white bg-customLight flex justify-center mt-20 p-10">
                <p>
                    isitphisy, copyright all right reserved.
                </p>
            </footer>
        </div>
    );
}
