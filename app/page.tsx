import { getUser } from "@/lib/getUser"
import HeroSection from "@/components/landing_page/hero_section"

export default async function Home() {
  const user = await getUser()

  return (
    <div>
      <HeroSection user={user} />
    </div>
  )
}