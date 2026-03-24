import { getUser } from "@/./lib/getUser"
import { redirect } from "next/navigation"

export default async function SpeakingPage() {

  const user = await getUser()

  if (!user) {
    redirect("/")
  }
  
  return (
    <div>
      <h1>Speaking page</h1>
    </div>
  );
}
