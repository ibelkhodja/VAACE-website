'use client'
import React, { useState, useEffect } from "react";

interface TypingHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const TypingHeading: React.FC<TypingHeadingProps> = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseTime = 2500,
  style,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      timer = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayedText(texts[textIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <h1
      {...props}
      style={{
        fontSize: "2rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        ...style,
      }}
    >
      {displayedText}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          backgroundColor: "currentColor",
          marginLeft: "2px",
          animation: "blink 1s step-end infinite",
        }}
      >
        &nbsp;
      </span>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
};
