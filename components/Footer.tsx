import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{site.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses through innovative software development,
              strategic marketing, and expert selling services.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <address className="text-slate-400 text-sm not-italic leading-relaxed">
                  {site.address.line1},
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-slate-400 text-sm hover:text-primary-400 transition-colors"
                >
                  {site.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${site.phone.tel}`}
                  className="text-slate-400 text-sm hover:text-primary-400 transition-colors"
                >
                  {site.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${site.phone.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-primary-400 transition-colors"
                >
                  WhatsApp available on {site.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="/privacy"
                className="text-slate-400 text-sm hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 text-sm hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
