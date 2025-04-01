"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PolisDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-200 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 dark:text-amber-100 dark:border-amber-800 cursor-pointer">
          <span className="flex justify-center w-full">
            Participate in Polis Discussions
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Polis Discussions</DialogTitle>
          <DialogDescription>
            Choose a discussion topic to participate in
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-3 mt-2">
          <Link
            href="/polis-de-analyze"
            onClick={() => setOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full h-auto py-2 whitespace-normal text-sm justify-start hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-200 dark:border-amber-800 cursor-pointer"
            >
              Was für Analysen über dein Depot wünschst du dir im Companion?
            </Button>
          </Link>

          <Link
            href="/polis-de-learn"
            onClick={() => setOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full h-auto py-2 whitespace-normal text-sm justify-start hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-200 dark:border-amber-800 cursor-pointer"
            >
              Über welche Finanzthemen würdest du gern interaktiv und ggf.
              KI-gestützt mehr im Companion lernen?
            </Button>
          </Link>

          <Link
            href="/polis-de-general"
            onClick={() => setOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full h-auto py-2 whitespace-normal text-sm justify-start hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-200 dark:border-amber-800 cursor-pointer"
            >
              Abseits von Depotanalyse und Finanzbildung, was wünschst du dir
              noch für Divizend Live?
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
