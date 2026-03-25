"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 rounded-full shadow-lg bg-green-950 text-black px-45 py-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-stone-100 text-muted-foreground">
          We use cookies to improve your experience. By continuing to use this site, you accept our <Link href="/legal/terms_and_conditions" className="text-stone-100 font-bold underline underline-offset-4"> Terms & Conditions </Link> and <Link href="/legal/privacy_policy" className="text-stone-100 font-bold underline underline-offset-4"> Privacy Policy </Link>.
        </p>

        <Button variant="outline" onClick={acceptCookies}>
          Accept
        </Button>
      </div>
    </div>
  );
}