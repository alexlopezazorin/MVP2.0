"use server"

import Dashboard from "@/components/dashboard/dashboard"
import { createSupabaseServer } from "@/lib/supabaseServer"
import { redirect } from "next/navigation"

export async function signup(formData: FormData) {
    const supabase = await createSupabaseServer()

    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const fullName = formData.get("fullName") as string
    
    
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName
            },
        },
    })


    if (error) {
        return {error: error.message}
    }

    const user = data.user

    if (!user) {
        return {error: "User not created"}
    }

    console.log("User created")

    redirect("/dashboard")

}