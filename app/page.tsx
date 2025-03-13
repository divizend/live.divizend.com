"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { Turnstile } from "@marsidev/react-turnstile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { ErrorMessage } from "./types";

export default function Home() {
  const [email, setEmail] = useState("");
  //const [token, setToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Check if user has previously submitted on mount
  useEffect(() => {
    const userSubmitted = localStorage.getItem("hasSubmitted") === "true";
    setHasSubmitted(userSubmitted);
  }, []);

  // Fetch subscriber count on mount and periodically
  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await fetch("/api/subscribe/count");
        if (response.ok) {
          const data = await response.json();
          setSubscriberCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching subscriber count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch immediately
    fetchSubscriberCount();

    // Set up polling every 10 seconds
    const intervalId = setInterval(fetchSubscriberCount, 10000);

    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, []);

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

        // Mark user as having submitted
        setHasSubmitted(true);
        localStorage.setItem("hasSubmitted", "true");

        // Immediately increment subscriber count for instant feedback
        if (subscriberCount !== null) {
          setSubscriberCount(subscriberCount + 1);
        }
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      if (
        error instanceof Error &&
        error.message === ErrorMessage.EMAIL_ALREADY_REGISTERED
      ) {
        toast.error("Du bist bereits in der Warteliste.");
        // If email already registered, still mark as submitted
        setHasSubmitted(true);
        localStorage.setItem("hasSubmitted", "true");
      } else {
        toast.error("Fehler beim Senden deiner E-Mail-Adresse.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate subscriber count text
  const getSubscriberText = () => {
    if (isLoading || subscriberCount === null) {
      return "Lädt..."; // Loading placeholder
    }

    const count = subscriberCount > 0 ? subscriberCount : 0;
    const displayCount = hasSubmitted ? count - 1 : count;

    if (displayCount <= 0) {
      return hasSubmitted ? "Du bist der/die Erste!" : "Sei der/die Erste!";
    }

    return hasSubmitted
      ? `Du + ${displayCount} andere sind dabei / You + ${displayCount} others are joining`
      : `${displayCount} andere sind dabei / ${displayCount} others are joining`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3498db,#9b59b6,#e74c3c)] opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay opacity-40"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center flex-grow w-full px-6 py-12 md:py-16">
        {/* Logo */}
        <div className="w-36 h-36 md:w-48 md:h-48 relative mb-4">
          <Image
            src="https://divizend.com/divizend.svg"
            alt="Divizend Logo"
            fill
            priority
            className="dark:filter dark:invert"
          />
        </div>

        {/* Main title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight tracking-tight mb-4">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500">
            _art_________
          </span>{" "}
          FinTech.
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-center font-light text-white/60 mb-10">
          Die Revolution für den modernen Marktteilnehmer.{" "}
          <span className="text-white/40 text-xs md:text-sm">
            / The revolution for the modern market participant.
          </span>
        </p>

        {/* Dates */}
        <div className="flex flex-col items-center space-y-1 text-sm md:text-base font-medium opacity-80 mb-10">
          <p>1. April 2025, 19:00 MEZ, genau hier</p>
          <p className="text-xs md:text-sm opacity-70">
            1st of April, 2025, 7pm CET, right here
          </p>
        </div>

        {/* Subscription form */}
        <div className="w-full max-w-md">
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
              {isSubmitting ? "Wird gesendet..." : "RSVP"}
            </Button>

            {/* Subtle subscriber count text - always shown, with loading state */}
            <p
              className={`text-xs text-center mt-2 ${
                isLoading ? "text-white/30" : "text-white/50"
              }`}
            >
              {getSubscriberText()}
            </p>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 px-4 w-full mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-white/50">
          <span className="mx-2">🄯 2025 Divizend GmbH</span>
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
            <a
              href="https://divizend.com/data-protection"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
