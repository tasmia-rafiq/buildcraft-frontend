import { RefObject } from "react";
import { gsap, useGSAP } from "../utils/gsap";

interface UseRevealAnimationProps {
  scope: RefObject<HTMLElement | null>;
  target: RefObject<HTMLElement | null>;
  selector?: string;
  stagger?: number;
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
}

export function useRevealAnimation({
  scope,
  target,
  selector = "",
  stagger = 0.12,
  x = 0,
  y = 40,
  duration = 0.6,
  delay = 0,
}: UseRevealAnimationProps) {
  useGSAP(
    () => {
      if (!target.current) return;

      const elements = selector
        ? target.current.querySelectorAll(selector)
        : target.current.children;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(elements, {
        opacity: 0,
        x,
        y,
        duration,
        delay,
        stagger,
        clearProps: "all",
        scrollTrigger: {
          trigger: target.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    {
      scope,
    },
  );
}
