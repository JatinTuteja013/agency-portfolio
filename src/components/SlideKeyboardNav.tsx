"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdjacentSlides } from "@/data/slides";

export default function SlideKeyboardNav({ path }: { path: string }) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const { prev, next } = getAdjacentSlides(path);
      if (e.key === "ArrowRight" && next) router.push(next.path);
      if (e.key === "ArrowLeft" && prev) router.push(prev.path);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [path, router]);

  return null;
}
