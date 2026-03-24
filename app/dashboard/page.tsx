import { getUser } from "@/./lib/getUser"
import { redirect } from "next/navigation"

export default async function DashboardPage() {

  const user = await getUser()

  if (!user) {
    redirect("/")
  }
  
  return (
    <div>
      <h1>Dashboard page</h1>
    </div>
  );
}
