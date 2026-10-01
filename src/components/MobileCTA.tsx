import { site, whatsappUrl } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

// Sticky bottom bar on mobile — calls convert far better than forms for a local
// service business, so keep the phone one tap away on every page. The matching
// bottom padding is applied to <main> in the root layout.
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-ink-line pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={`tel:${site.phone.tel}`}
        className="flex items-center justify-center gap-2 bg-ink py-4 text-sm font-medium text-frost"
      >
        <PhoneIcon className="h-4 w-4 text-glass-light" />
        Call now
      </a>
      <a
        href={whatsappUrl("Hi! I'd like a free quote for window film.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-glass-deep py-4 text-sm font-medium text-frost"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
