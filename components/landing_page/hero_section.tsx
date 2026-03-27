import {Button} from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import LoginForm from "@/features/auth/components/LoginForm"


export default function HeroSection({ user }: { user: any }) {
  return (
    <section className="relative overflow-hidden bg-backgorund">
    <div className="wrapper" >
        <div className="flex flex-col items-center justify-center lg:py24 py12 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
                Ready to elevate your English?
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Join GuiTeach today and start your journey towards fluency with personalized private lessons tailored to your specific goals and pace.
            </p>
            
            {!user && (
            <div className="flex flex-col items-center justify-center lg:py24 py12 text-center">
                <LoginForm />
                <Link href="/signup">
                    <Button variant="outline" className="relative top-2">
                        Sign Up
                    </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-4 max-w-xl leading-relaxed">       
                    By using this platform you agree to our <Link href="/legal/terms_and_conditions" className="text-blue-900"> Terms & Conditions </Link> and <Link href="/legal/privacy_policy" className="text-blue-900"> Privacy Policy </Link>.
                </p>
            </div> 
            
            )}


            {user && (  
            <Link href="/dashboard">
                <Button variant="primary">
                    Go to Dashboard
                </Button>
            </Link>
            )}

        </div>
    </div>
    </section>
  );
}
