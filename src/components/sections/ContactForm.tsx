"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text"
        >
          {t("name")}
        </label>
        <input
          id="name"
          type="text"
          required
          value={formState.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-surface border border-border text-text",
            "placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20",
            "transition-all duration-300"
          )}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text"
        >
          {t("email")}
        </label>
        <input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-surface border border-border text-text",
            "placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20",
            "transition-all duration-300"
          )}
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text"
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formState.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-surface border border-border text-text resize-none",
            "placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20",
            "transition-all duration-300"
          )}
          placeholder="Your message..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {status === "success" && (
          <CheckCircle className="mr-2 h-4 w-4" />
        )}
        {status === "loading"
          ? "Sending..."
          : status === "success"
          ? t("success")
          : t("submit")}
        {status === "idle" && <Send className="ml-2 h-4 w-4" />}
      </Button>

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm text-center"
        >
          {t("error")}
        </motion.p>
      )}
    </form>
  );
}
