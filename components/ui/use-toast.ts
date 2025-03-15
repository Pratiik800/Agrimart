"use client"

import { toast as sonnerToast } from "sonner"

// Simple toast function that works without hooks
export function toast({ title, description }: { title?: string; description?: string }) {
  return sonnerToast(title, {
    description: description,
  })
}

// Hook-based toast implementation
export function useToast() {
  return {
    toast: ({ title, description }: { title?: string; description?: string }) => {
      sonnerToast(title, {
        description: description,
      })
    },
  }
}

