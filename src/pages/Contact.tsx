import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle2 } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setState('submitting');
    // Simulate form submission (no backend required per brief)
    await new Promise((res) => setTimeout(res, 1200));
    setState('success');
  }

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-neutral-500 mb-5">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">Get in Touch</h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            Available for architecture consulting, fractional CTO, and advisory engagements from January 2027. Reach out to start a conversation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <p className="section-label mb-5">Contact Details</p>
                <div className="space-y-4">
                  <a
                    href="mailto:wfhfujisan@outlook.jp"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-200 transition-colors">
                      <Mail size={15} className="text-neutral-600" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 mb-0.5">Email</p>
                      <p className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors break-all">
                        wfhfujisan@outlook.jp
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+817041052313"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-200 transition-colors">
                      <Phone size={15} className="text-neutral-600" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 mb-0.5">Phone</p>
                      <p className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        +81 (0)70-4105-2313
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-200 transition-colors">
                      <Linkedin size={15} className="text-neutral-600" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 mb-0.5">LinkedIn</p>
                      <p className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-8">
                <p className="section-label mb-4">Availability</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-300" />
                    <span className="text-sm text-neutral-600">Currently based in Japan</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-400" />
                    <span className="text-sm text-neutral-600">NZ Tech Expo — Late 2026</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-900" />
                    <span className="text-sm text-neutral-700 font-medium">Available Jan 2027 — NZ</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-8">
                <p className="section-label mb-4">Engagement Types</p>
                <div className="space-y-2">
                  {[
                    'Architecture Consulting',
                    'Fractional CTO',
                    'AI Product Advisory',
                    'Technical Due Diligence',
                    'System Design Review',
                  ].map((type) => (
                    <div key={type} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-neutral-400" />
                      <span className="text-sm text-neutral-500">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {state === 'success' ? (
                <div className="border border-neutral-200 rounded-sm p-12 text-center">
                  <div className="w-12 h-12 bg-neutral-100 rounded-sm flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={22} className="text-neutral-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Message sent</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. I will review your message and respond as soon as possible.
                  </p>
                  <button
                    onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setState('idle'); }}
                    className="mt-6 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p className="section-label mb-6">Send a Message</p>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-neutral-600 mb-1.5">
                        Full Name <span className="text-neutral-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-sm bg-white text-neutral-800 placeholder:text-neutral-400
                          focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-colors
                          ${errors.name ? 'border-red-300' : 'border-neutral-300'}`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-neutral-600 mb-1.5">
                        Email Address <span className="text-neutral-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-sm bg-white text-neutral-800 placeholder:text-neutral-400
                          focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-colors
                          ${errors.email ? 'border-red-300' : 'border-neutral-300'}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="subject" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-sm bg-white text-neutral-800
                        focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-colors"
                    >
                      <option value="">Select a topic (optional)</option>
                      <option value="architecture">Architecture Consulting</option>
                      <option value="fractional-cto">Fractional CTO</option>
                      <option value="ai-advisory">AI Product Advisory</option>
                      <option value="zenith-audit">ZenithAudit Enquiry</option>
                      <option value="expo">NZ Tech Expo — Connect</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Message <span className="text-neutral-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project or enquiry..."
                      className={`w-full px-3.5 py-2.5 text-sm border rounded-sm bg-white text-neutral-800 placeholder:text-neutral-400
                        focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-colors resize-none
                        ${errors.message ? 'border-red-300' : 'border-neutral-300'}`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === 'submitting' ? (
                      <>
                        <div className="w-3.5 h-3.5 border border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
