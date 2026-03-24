import {createSupabaseServer} from "./supabaseServer"

export async function getUser() {
  const supabase = createSupabaseServer()

  const{
    data: {user},
  } = await supabase.auth.getUser()

  return user
}
