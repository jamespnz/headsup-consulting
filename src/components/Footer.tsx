import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6">
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="0" y="0" width="12" height="12" fill="#404040" />
                  <rect x="16" y="0" width="12" height="12" fill="#404040" opacity="0.3" />
                  <rect x="0" y="16" width="12" height="12" fill="#404040" opacity="0.3" />
                  <rect x="16" y="16" width="12" height="12" fill="#404040" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-neutral-700">HeadsUp Consulting</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              A boutique systems architecture and AI product studio. Based in Japan — returning to New Zealand in January 2027.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'About', path: '/about' },
                { label: 'App Design Studio', path: '/app-design-studio' },
                { label: 'Insights', path: '/insights' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:wfhfujisan@outlook.jp"
                className="flex items-center gap-2.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                <Mail size={14} />
                wfhfujisan@outlook.jp
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
            <p className="mt-5 text-xs text-neutral-400 leading-relaxed">
              Available for architecture consulting<br />
              from January 2027
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            &copy; {year} HeadsUp Consulting Ltd. All rights reserved.
          </p>
          <p className="text-xs font-mono text-neutral-400">
            Japan · New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
