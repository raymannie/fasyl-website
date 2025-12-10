"use client";
import React from "react";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ScheduleCallButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ScheduleCallButton({
  className = "btn btn-secondary",
  children = "Schedule A Call",
}: ScheduleCallButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
