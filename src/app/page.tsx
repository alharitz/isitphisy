"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
        <div className='items-center justify-items-center min-h-screen bg-customDark'>
            <header>
                <nav className='bg-customLight flex flex-row items-center justify-between'>
                    <Link href="/" className='pl-2'>
                        <Image src="/assets/logo.png" alt="logo" width={130} height={130}/>
                    </Link>
                    <div className='flex gap-10 mr-10 text-xl font-base text-white tracking-wider font-kanit'>
                        <Button size='lg' variant='secondary'>
                            <Link href="/login">Login</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 fill="31363F">
                                <path
                                    d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
                            </svg>
                        </Button>
                        <Button size='lg' variant='ghost'>
                            <Link href="/register">Register</Link>
                        </Button>
                    </div>
                </nav>
            </header>
        </div>
    );
}
