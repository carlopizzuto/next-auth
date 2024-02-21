import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-slate-900">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-slate-100 drop-shadow-md",
            font.className
          )}
        >
          Auth
        </h1>
        <p className="text-slate-200 text-lg">A simple authentication service</p>
        <div className="inline-flex space-x-5"> 
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Log in
            </Button>
          </LoginButton>
          <RegisterButton>
          <Button variant="default" size="lg">
              Sign up
            </Button>
          </RegisterButton>
        </div>
      </div>
    </main>
  );
}
