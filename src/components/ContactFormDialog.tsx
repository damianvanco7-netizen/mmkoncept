import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);

  const isValid = name.trim() && email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.trim() && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSending(true);

    try {
      const submissionId = crypto.randomUUID();
      const trimmed = { name: name.trim(), email: email.trim(), message: message.trim() };

      // Save to database first (works immediately, no DNS needed)
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({ id: submissionId, ...trimmed });

      if (dbError) throw dbError;

      // Send email via Resend
      await supabase.functions.invoke('send-contact-email', {
        body: trimmed,
      });

      toast({
        title: "Správa bola odoslaná",
        description: "Ďakujeme, ozveme sa vám čo najskôr.",
      });

      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
      onOpenChange(false);
    } catch {
      toast({
        title: "Chyba",
        description: "Niečo sa pokazilo. Skúste to znova.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Overlay */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Content */}
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-[70] w-[92vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] liquid-glass-dialog rounded-2xl p-10 md:p-14 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Close button */}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 text-white/50 hover:text-white/80 transition-colors focus:outline-none">
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>

          {/* Header */}
          <DialogPrimitive.Title className="text-xl md:text-2xl font-semibold text-white mb-1">
            Get in Touch
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="text-sm text-white/50 mb-8">
            We'd love to hear from you.
          </DialogPrimitive.Description>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                id="cf-name"
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name and surname"
                className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <input
                id="cf-email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                id="cf-msg"
                required
                maxLength={1000}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors resize-none"
              />
            </div>

            {/* GDPR Consent */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <button
                type="button"
                onClick={() => setConsent(!consent)}
                className={`mt-0.5 h-4 w-4 rounded flex-shrink-0 border transition-all flex items-center justify-center ${
                  consent
                    ? "border-white/50 text-white"
                    : "border-white/25 text-transparent"
                }`}
              >
                {consent && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <span className="text-xs text-white/50 leading-relaxed">
                I agree to the processing of my personal data in accordance with the{" "}
                <Link
                  to="/gdpr"
                  target="_blank"
                  className="underline text-white/70 hover:text-white/90 transition-colors"
                >
                  Privacy Policy
                </Link>.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || sending}
              className="w-full rounded-full py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 liquid-glass-circle text-white disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </form>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ContactFormDialog;
