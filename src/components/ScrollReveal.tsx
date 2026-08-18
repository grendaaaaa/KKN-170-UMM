"use client";

import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe element and all children with animate class
    observer.observe(element);
    const children = element.querySelectorAll(".animate-on-scroll, .stagger-children");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

// ScrollReveal wrapper component
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  direction?: "up" | "left" | "none";
  stagger?: boolean;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    
    // Observe all children that need animation
    const childrenToObserve = element.querySelectorAll(".animate-on-scroll, .stagger-children");
    childrenToObserve.forEach((child) => observer.observe(child));
    
    return () => observer.disconnect();
  }, [once]);

  const delayClass = delay > 0 ? `animate-on-scroll-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "animate-on-scroll"} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
