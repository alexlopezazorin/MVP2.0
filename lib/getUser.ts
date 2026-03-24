import { createSupabaseServer } from "./supabaseServer"

export async function getUser() {
  const supabase = await createSupabaseServer()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user
}