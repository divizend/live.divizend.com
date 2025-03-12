"use client";

import { useState } from "react";
import Image from "next/image";
import { Turnstile } from "@marsidev/react-turnstile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  //const [token, setToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    /*if (!token) {
      toast.error("Bitte vervollständige die Captcha-Überprüfung.");
      return;
    }*/

    if (!email) {
      toast.error("Bitte gib deine E-Mail-Adresse ein.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), //, token
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Du wurdest zur Warteliste hinzugefügt.");
        setEmail("");
        // setToken(null);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Fehler beim Senden deiner E-Mail-Adresse.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3498db,#9b59b6,#e74c3c)]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center flex-grow px-6 py-16 gap-12">
        {/* Logo */}
        <div className="w-36 h-36 md:w-48 md:h-48 relative">
          <Image
            src="https://divizend.com/divizend.svg"
            alt="Divizend Logo"
            fill
            priority
            className="dark:filter dark:invert"
          />
        </div>

        {/* Main title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight tracking-tight">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500">
            _art_________
          </span>{" "}
          startup.
        </h1>

        {/* Dates */}
        <div className="flex flex-col items-center space-y-1 text-sm md:text-base font-medium opacity-80">
          <p>1. April 2025, 19:00 MEZ</p>
          <p className="text-xs md:text-sm opacity-70">
            1st of April, 2025, 7pm CET
          </p>
        </div>

        {/* Subscription form */}
        <div className="w-full max-w-md mt-6">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <Input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4"
            />

            {/*<div className="flex justify-center mb-2">
              <Turnstile
                siteKey={
                  process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ||
                  "1x00000000000000000000AA"
                }
                onSuccess={setToken}
              />
            </div>*/}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white font-medium transition-all"
            >
              {isSubmitting ? "Wird gesendet..." : "Informiert bleiben"}
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-4 mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-white/50">
          <span>🄯 2025 Divizend GmbH</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/divizend/live.divizend.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white/80 transition-colors"
            >
              <GitHubLogoIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://divizend.com/imprint"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Impressum
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
