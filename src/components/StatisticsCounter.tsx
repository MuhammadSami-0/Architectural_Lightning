"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        }
      });
      return controls.stop;
    } else {
      if (ref.current) ref.current.textContent = "0";
    }
  }, [isInView, value]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

export default function StatisticsCounter() {
  return (
    <section className="py-20 md:py-24 px-margin-mobile md:px-margin-desktop bg-background relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          
          <div className="relative pt-8 md:pt-0 md:pl-12">
            {/* Top Border for Mobile */}
            <div className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-primary/30"></div>
            <motion.div 
              className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {/* Left Border for Desktop */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-primary/30"></div>
            <motion.div 
              className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-bottom"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <h3 className="text-6xl md:text-8xl font-headline-lg text-primary-container mb-4">
              <Counter value={100} suffix="+" />
            </h3>
            <p className="text-lg text-on-surface-variant font-label-caps tracking-widest uppercase">Projects Completed</p>
          </div>

          <div className="relative pt-8 md:pt-0 md:pl-12">
            {/* Top Border for Mobile */}
            <div className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-primary/30"></div>
            <motion.div 
              className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {/* Left Border for Desktop */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-primary/30"></div>
            <motion.div 
              className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-bottom"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <h3 className="text-6xl md:text-8xl font-headline-lg text-primary-container mb-4">
              <Counter value={98} suffix="%" />
            </h3>
            <p className="text-lg text-on-surface-variant font-label-caps tracking-widest uppercase">Client Satisfaction</p>
          </div>

          <div className="relative pt-8 md:pt-0 md:pl-12">
            {/* Top Border for Mobile */}
            <div className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-primary/30"></div>
            <motion.div 
              className="md:hidden absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {/* Left Border for Desktop */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-primary/30"></div>
            <motion.div 
              className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-bottom"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
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
