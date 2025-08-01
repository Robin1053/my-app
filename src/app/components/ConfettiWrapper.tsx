'use client';
import { useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';

export const jsConfettiRef: { instance: JSConfetti | null } = {
  instance: null,
};

export default function ConfettiWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';

    if (containerRef.current) {
      containerRef.current.appendChild(canvas);
      jsConfettiRef.instance = new JSConfetti({ canvas });
    }
  }, []);

  return <div ref={containerRef} />;
}
