import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const timeline = [
  {
    period: 'Early Career',
    location: 'New Zealand',
    events: [
      'Software engineering foundations in Auckland technology firms',
      'Early exposure to enterprise integration and systems architecture',
      'Developed a preference for clean, well-documented systems over fragile ones',
    ],
  },
  {
    period: 'Japan Chapter',
    location: 'Japan',
    events: [
      'Relocated to Japan — drawn by the culture of precision and craft',
      'Deepened expertise in systems architecture across regulated industries',
      'Founded HeadsUp Consulting and began building App Design Studio',
      'Launched ZenithAudit as the flagship compliance automation product',
    ],
  },
  {
    period: 'Return — Jan 2027',
    location: 'New Zealand',
    events: [
      'Returning to Auckland with a portfolio of production-grade AI products',
      'Available for architecture consulting, fractional CTO, and advisory roles',
      'Presenting at NZ Tech Expo — connecting with the NZ technology ecosystem',
    ],
  },
];

const values = [
  {
    title: 'Precision over haste',
    desc: 'Good architecture takes deliberate thought. Rushing produces systems that are expensive to change.',
  },
  {
    title: 'Clarity over cleverness',
    desc: 'A system that your team can reason about is worth more than an elegant one only its author understands.',
  },
  {
    title: 'Production-grade from day one',
    desc: 'Prototypes that become products carry their prototype decisions for years. Build it right the first time.',
  },
  {
    title: 'Honest assessment',
    desc: 'Good consulting means telling clients what they need to hear, not what validates the existing plan.',
  },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-neutral-500 mb-5">About</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">James</h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            Systems Architect &amp; Founder. AI-Enabled Workflows and Compliance Automation. Based in Japan — returning to New Zealand in January 2027.
          </p>
          <div className="flex items-center gap-2 mt-5 text-sm text-neutral-500">
            <MapPin size={14} />
            <span className="font-mono">Japan → New Zealand · Jan 2027</span>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <p className="section-label mb-5">Background</p>
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p className="text-lg">
                  James is a systems architect and founder with a focus on AI-enabled enterprise systems, compliance automation, and cloud-native architecture.
                </p>
                <p>
                  With a foundation built across New Zealand technology firms and refined during an extended period in Japan, James brings a disciplined, precision-oriented approach to systems design. Japan's engineering culture — characterised by careful attention to detail, long-term thinking, and the pursuit of mastery — has shaped the way HeadsUp Consulting approaches every engagement.
                </p>
                <p>
                  HeadsUp Consulting is the vehicle for this work: a boutique studio that operates at the intersection of systems architecture and AI product development. The studio builds production-grade AI systems and provides fractional architecture leadership to organisations navigating technical complexity.
                </p>
                <p>
                  After several years building and refining in Japan, James returns to New Zealand in January 2027 — bringing a focused portfolio of AI products and a systematic methodology for building them.
                </p>
              </div>
            </div>

            {/* Identity card */}
            <div className="space-y-6">
              <div className="card">
                <p className="section-label mb-4">Role</p>
                <p className="text-sm font-semibold text-neutral-900 mb-1">Systems Architect &amp; Founder</p>
                <p className="text-sm text-neutral-500">HeadsUp Consulting Ltd</p>
              </div>
              <div className="card">
                <p className="section-label mb-4">Focus Areas</p>
                <div className="space-y-2">
                  {[
                    'Systems Architecture',
                    'AI Product Development',
                    'Compliance Automation',
                    'Cloud-Native Design',
                    'Enterprise Integration',
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-neutral-400" />
                      <span className="text-sm text-neutral-600">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <p className="section-label mb-3">Availability</p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Available for architecture consulting, fractional CTO, and advisory engagements from January 2027.
                </p>
                <div className="mt-4">
                  <Link to="/contact" className="text-sm text-neutral-700 hover:text-neutral-900 font-medium flex items-center gap-1.5 transition-colors">
                    Get in touch <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-5">Journey</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-10">Japan → New Zealand</h2>
          <div className="space-y-0">
            {timeline.map((chapter, i) => (
              <div key={i} className="grid lg:grid-cols-4 gap-6 pb-10">
                <div className="lg:col-span-1">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-3 h-3 rounded-full border-2 border-neutral-900 bg-white flex-shrink-0" />
                      {i < timeline.length - 1 && <div className="w-px h-full min-h-16 bg-neutral-300 mt-2" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{chapter.period}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={11} className="text-neutral-400" />
                        <span className="text-xs font-mono text-neutral-400">{chapter.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-2 lg:pt-0.5">
                  {chapter.events.map((event) => (
                    <div key={event} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-2" />
                      <p className="text-sm text-neutral-600 leading-relaxed">{event}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-5">Philosophy</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Working Principles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <p className="text-sm font-semibold text-neutral-900 mb-2">{v.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-label text-neutral-500 mb-5">Mission</p>
            <blockquote className="text-2xl font-light text-neutral-200 leading-relaxed mb-6">
              "To build AI systems that organisations can actually trust — because they are designed with rigour, delivered with care, and documented so that others can maintain them."
            </blockquote>
            <p className="text-neutral-500 text-sm leading-relaxed">
              HeadsUp Consulting exists to bring the discipline of proper systems architecture to the AI era. Not AI for its own sake, but AI in service of real problems — compliance, workflow, intelligence — built to production standards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
