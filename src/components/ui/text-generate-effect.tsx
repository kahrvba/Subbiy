"use client";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "~/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string | (string | ReactNode)[];
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray: (string | ReactNode)[];
  if (typeof words === "string") {
    // Split on __BR__ and then split each part into words, keeping __BR__ as a separate item
    wordsArray = words
      .split(/(__BR__)/g)
      .flatMap(part => part === "__BR__" ? ["__BR__"] : part.split(" ").filter(Boolean));
  } else {
    wordsArray = words;
  }
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.6),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) =>
          word === "<br />" || word === "__BR__" ? (
            <br key={"br-" + idx} />
          ) : typeof word === "string" ? (
            <motion.span
              key={word + idx}
              className="dark:text-white text-[#ecead9] opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word} {" "}
            </motion.span>
          ) : (
            // If it's a ReactNode (like <br />), render as is
            word
          )
        )}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-[#b6aa07] text-md leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
}; 