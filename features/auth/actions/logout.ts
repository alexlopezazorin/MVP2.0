"user server"

import {createSupabaseServer} from "@/lib/supabaseServer"
import {redirect} from "next/navigation"

export async function logout() {
  const supabase = createSupabaseServer()

  await supabase.auth.signOut()

  redirect("/")
}
