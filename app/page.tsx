"use client";

import { useEffect } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
});

export default function Home() {
  useEffect(() => {
    console.log("Mounted");
  }, []);
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
        <p className={cn("text-2xl font-light text-slate-200", font.className)}>
          An authentiation service
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
