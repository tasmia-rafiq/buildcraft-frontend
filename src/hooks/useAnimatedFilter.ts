import { RefObject, useEffect, useRef } from "react";

import { gsap } from "@/utils/gsap";

interface UseAnimatedFilterProps {
  containerRef: RefObject<HTMLElement | null>;
  dependency: unknown;
}

export function useAnimatedFilter({
  containerRef,
  dependency,
}: UseAnimatedFilterProps) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const cards = containerRef.current?.querySelectorAll("[data-project]");

    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.96,
        y: 16,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, [dependency]);
}