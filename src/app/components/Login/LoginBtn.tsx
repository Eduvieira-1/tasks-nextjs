"use client";

import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function LoginBtn(){
    return (
        <div>
            <button onClick={() => signIn('google', { callbackUrl: '/'})}>
                Login com google
            </button>
        </div>
    )
}