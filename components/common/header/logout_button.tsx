"use client"

import { logout } from "@/features/auth/actions/logout"
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  return (
    <Button variant="outline" onClick = {async () => {await logout()}}>
      Logout
    </Button>
  )
}