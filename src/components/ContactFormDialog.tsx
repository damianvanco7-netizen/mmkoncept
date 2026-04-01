import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

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
      // mailto fallback — opens user's email client with pre-filled data
      const subject = encodeURIComponent(`Contact from ${name.trim()}`);
      const body = encodeURIComponent(
        `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
      );
      window.location.href = `mailto:martina.masarykova@mmconcept.sk?subject=${subject}&body=${body}`;

      toast({
        title: "Opening email client…",
        description: "Your default email app will open with the message pre-filled.",
      });

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
      onOpenChange(false);
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
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
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-[70] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] liquid-glass-dialog rounded-2xl p-8 md:p-10 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
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
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="cf-name" className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                id="cf-name"
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl bg-white/[0.06] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="cf-email" className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                E-mail
              </label>
              <input
                id="cf-email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl bg-white/[0.06] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="cf-msg" className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="cf-msg"
                required
                maxLength={1000}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                className="w-full rounded-xl bg-white/[0.06] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all resize-none"
              />
            </div>

            {/* GDPR Consent */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/[0.06] accent-white/80"
              />
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
