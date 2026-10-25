
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ProductVideoProps = {
  title: string;
  videoSrc: string;
  buttonText?: string;
  description?: string;
  buttonStyle?: "light" | "dark";
};

export default function ProductVideo({
  title,
  videoSrc,
  buttonText = "Watch Product Video",
  description,
  buttonStyle = "dark",
}: ProductVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const buttonClasses =
    buttonStyle === "light"
      ? "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
      : "border-white text-white hover:border-orange-400 hover:bg-white/10";

  return (
    <>
      {/* VIDEO BUTTON */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 font-bold transition ${buttonClasses}`}
      >
        <span aria-hidden="true">▶</span>
        {buttonText}
      </button>

      {/* VIDEO POPUP */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-[#0B1D30] shadow-2xl"
              onKeyDown={(event) => {
                if (event.key !== "Tab") return;

                const focusable =
                  event.currentTarget.querySelectorAll<HTMLElement>(
                    'button, video[controls], a[href], [tabindex]:not([tabindex="-1"])'
                  );

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (
                  event.shiftKey &&
                  document.activeElement === first
                ) {
                  event.preventDefault();
                  last?.focus();
                } else if (
                  !event.shiftKey &&
                  document.activeElement === last
                ) {
                  event.preventDefault();
                  first?.focus();
                }
              }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <h2 className="text-xl font-bold text-white">
                  {title}
                </h2>

                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close video"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-orange-500"
                >
                  ×
                </button>
              </div>

              {/* VIDEO PLAYER */}
              <video
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support video playback.
              </video>

              {/* DESCRIPTION */}
              {description && (
                <p className="px-6 py-5 text-sm text-slate-300">
                  {description}
                </p>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}