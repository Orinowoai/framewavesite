"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl rounded-lg bg-[#0B0F14] border border-white/10 shadow-xl">
          <div className="flex justify-end p-3">
            <button aria-label="Close" onClick={onClose} className="text-white/70 hover:text-white">✕</button>
          </div>
          <div className="p-4 pt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}


