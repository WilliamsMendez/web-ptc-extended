"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ServicioCard } from "@/components/Sections/Home/Components/NuestrosServiciosCard";


export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {

  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (

    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
<ul
  ref={scrollerRef}
  className={cn(
    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
  {items.map((item, idx) => (
    <li
      key={idx}
      className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,var(--brand-primary),var(--brand-secondary))] px-8 py-6 md:w-[450px] dark:border-blue-900 dark:bg-[linear-gradient(180deg,var(--brand-primary),var(--brand-secondary))] hover:scale-105 transition-all duration-200"
    >
      <blockquote>

        <span className="flex flex-col gap-1">
            <span className="text-lg font-semibold font-normal text-text-primary-static">
              {item.name}
            </span>
          </span>

        <span className="relative z-20 text-sm leading-[1.6] font-normal text-text-primary-static/50">
          {item.quote}
        </span>

        <div className="relative z-20 mt-6 flex flex-row items-center">
          
        </div>
      </blockquote>
    </li>
  ))}
</ul>


    </div>
  );
};
