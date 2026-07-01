"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

export default function StatisticsCounter() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-background relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          
          <div className="border-t-2 md:border-t-0 md:border-l-2 border-primary/30 pt-8 md:pt-0 md:pl-12">
            <h3 className="text-6xl md:text-8xl font-headline-lg text-primary-container mb-4">
              <Counter value={100} suffix="+" />
            </h3>
            <p className="text-lg text-on-surface-variant font-label-caps tracking-widest uppercase">Projects Completed</p>
          </div>

          <div className="border-t-2 md:border-t-0 md:border-l-2 border-primary/30 pt-8 md:pt-0 md:pl-12">
            <h3 className="text-6xl md:text-8xl font-headline-lg text-primary-container mb-4">
              <Counter value={98} suffix="%" />
            </h3>
            <p className="text-lg text-on-surface-variant font-label-caps tracking-widest uppercase">Client Satisfaction</p>
          </div>

          <div className="border-t-2 md:border-t-0 md:border-l-2 border-primary/30 pt-8 md:pt-0 md:pl-12">
            <h3 className="text-6xl md:text-8xl font-headline-lg text-primary-container mb-4">
              <Counter value={10} suffix="+" />
            </h3>
            <p className="text-lg text-on-surface-variant font-label-caps tracking-widest uppercase">Years of Experience</p>
          </div>

        </div>
      </div>
    </section>
  );
}
