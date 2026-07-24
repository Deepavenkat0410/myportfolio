import React, { useState, useEffect } from 'react';

export const TypedText = ({
  strings,
  typeSpeed = 100,
  backSpeed = 40,
  backDelay = 1500,
}) => {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[arrayIndex % strings.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setText(currentString.substring(0, text.length + 1));

        if (text.length + 1 === currentString.length) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), backDelay);
          return;
        }
      } else {
        // Deleting
        setText(currentString.substring(0, text.length - 1));

        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setArrayIndex((prev) => (prev + 1) % strings.length);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, arrayIndex, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span className="font-light text-white inline-block min-h-[1.5em]">
      {text}
      <span className="typed-cursor">|</span>
    </span>
  );
};
