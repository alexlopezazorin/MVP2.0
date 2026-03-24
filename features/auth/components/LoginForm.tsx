"use client"

import { login } from "@/features/auth/actions/login"
import { useState } from "react"

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null)

  return (
    <form
      action={async (formData) => {
        const res = await login(formData)
        if (res?.error) setError(res.error)
      }}
      className="flex flex-col gap-4 max-w-sm"
    >
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

      <button type="submit" className="bg-black text-white p-2 rounded">
        Sign In
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
