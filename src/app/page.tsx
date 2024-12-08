"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {z} from "zod";

import { Input } from "@/components/ui/input";


export default function Home() {

    const router = useRouter();

    // redirect to login page
    const handleLoginRedirect = () => {
        router.push("/login");
    }

    // redirect to register page
    const handleRegisterRedirect = () => {
        router.push("/register");
    }

    return (
        <div className='items-center justify-items-center min-h-screen bg-customDark pb-20'>

            {/*header*/}
            <header>

                {/*navbar*/}
                <nav className='bg-customLight flex flex-row items-center justify-between'>

                    {/*logo*/}
                    <Link href="/" className='pl-2'>
                        <Image src="/assets/logo.png" alt="logo" width={130} height={130}/>
                    </Link>

                    <div className='flex gap-10 mr-10 text-xl font-base text-white tracking-wider font-kanit'>

                        {/*login*/}
                        <Button size='lg' variant='ghost' className='border-2 border-white' onClick={handleRegisterRedirect}>
                            Register
                        </Button>

                        {/*register*/}
                        <Button size='lg' variant='secondary' onClick={handleLoginRedirect}>
                            Login
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 fill="31363F">
                                <path
                                    d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
                            </svg>
                        </Button>
                    </div>
                </nav>
            </header>

            {/*main*/}
            <main className='mt-32'>

                {/*main text*/}
                <div className='flex flex-col items-center gap-10'>
                    {/*title*/}
                    <h1 className='font-jaro text-9xl tracking-widest text-white'>
                        WELCOME TO IS IT PHISY
                    </h1>

                    {/*desc*/}
                    <h2 className='text-4xl font-ABeeZee text-white'>
                        Helping you to know if it's phising link or not.
                    </h2>

                    {/*form*/}
                    <div className="flex w-full justify-center items-center gap-10 mt-16">
                        <Input type="text" placeholder="Is it Phisy?"  className="bg-gray-200 h-16 w-1/2 text-customDark font-kanit"/>
                        <Button type="submit" className='bg-customLight h-16 w-28 hover:bg-white hover:text-customLight font-normal tracking-wider text-lg font-kanit'>Check</Button>
                    </div>

                    <p className='text-4xl font-ABeeZee text-white'>
                        or
                    </p>

                    {/*register*/}
                    <Button size='lg' variant='ghost' className='border-2 border-customLight text-customLight font-kanit h-12 text-xl hover:bg-customLight hover:border-customLight' onClick={handleRegisterRedirect}>
                        Join with us
                    </Button>
                </div>
            </main>
        </div>
    );
}
