"use client"

import { signup } from "@/features/auth/actions/signup"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SignupForm() {
    return(
        <section className="relative overflow-hidden bg-background">
            <Link href="/">
                <ArrowLeft size={28} />
            </Link>
            
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
                    Sign Up
                </h1>
            </div>

            <form action={signup} className="flex flex-col gap-4 w-full max-w-sm" >
                <input 
                    name="fullName"
                    placeholder="Full name"
                    className="border p-2 rounded"
                    required
                />

                <input 
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                    required
                />

                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                    required
                />

                <Button type="submit">Sign Up</Button>

            </form>
        </section>
    )
}