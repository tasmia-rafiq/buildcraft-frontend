import { RefObject } from "react";
import { gsap, useGSAP } from "@/utils/gsap";

interface UseSplitRevealProps {
  scope: RefObject<HTMLElement | null>;
  left: RefObject<HTMLElement | null>;
  right: RefObject<HTMLElement | null>;
}

export function useSplitReveal({ scope, left, right }: UseSplitRevealProps) {
  useGSAP(() => {
      if (!left.current || !right.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(
        left.current,
        {
          opacity: 0,
          x: -60,
          duration: 0.8,
          ease: "power3.out",
        },
        0,
      ).from(
        right.current,
        {
          opacity: 0,
          x: 60,
          duration: 0.8,
          ease: "power3.out",
        },
        0,
      );
    },
    { scope },
  );
}
