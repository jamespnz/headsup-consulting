import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const timeline = [
  {
    period: 'Early Career',
    location: 'Technology Foundations',
    events: [
      'Software engineering foundations across enterprise technology firms',
      'Early exposure to enterprise integration and systems architecture',
      'Developed a preference for clean, well-documented systems over fragile ones',
    ],
  },
  {
    period: 'Japan Chapter',
    location: 'Japan',
    events: [
      'Based in Japan — drawn by the culture of precision and craft',
      'Deepened expertise in systems architecture across regulated industries',
      'Founded HeadsUp Consulting and began building App Design Studio',
      'Launched ZenithAudit as the flagship compliance automation product',
    ],
  },
  {
    period: 'Current',
    location: 'Kawasaki, Japan',
    events: [
      'Operating from Kawasaki, engaged with the Tokyo tech ecosystem',
      'Available for systems architecture and AI product work across Japan and APAC',
      'Expanding the HeadsUp product suite with a focus on enterprise AI systems',
    ],
  },
];

const values = [
  {
    title: 'Clear purpose, adaptive plans',
    desc: 'Direction should be firm; the path to get there should flex as reality evolves.',
  },
  {
    title: 'Shared outcomes over functional silos',
    desc: 'Systems and teams that optimize locally and ignore the whole produce fragile results.',
  },
  {
    title: 'Continuous reinvention over preservation',
    desc: 'The right response to change is redesign, not defence of what exists.',
  },
  {
    title: 'Human-centric design amidst change',
    desc: 'The best systems amplify human judgment rather than replace or constrain it.',
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
            Systems Architect &amp; Founder. AI-Enabled Workflows and Compliance Automation. Based in Kawasaki, Japan.
          </p>
          <div className="flex items-center gap-2 mt-5 text-sm text-neutral-500">
            <MapPin size={14} />
            <span className="font-mono">Kawasaki, Japan</span>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <p className="section-label mb-5">The Studio</p>
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p className="text-lg">
                  HeadsUp Consulting is a boutique systems architecture and AI product studio operating from Kawasaki, Japan. The studio focuses on building workflow intelligence, enterprise web applications, and AI-enabled systems that help organizations adapt quickly, make work visible, and deliver value with clarity.
                </p>
                <p>
                  Our work is grounded in the principles of enterprise agility — clear purpose realized through adaptive plans, shared outcomes over functional silos, continuous reinvention over preservation, and human-centric design amidst change. These values shape how we design, build, and evolve digital systems.
                </p>
                <p>
                  We create tools that help organizations sense change early, respond with confidence, and maintain coherence even under real-world pressure. App Design Studio, our internal product development unit, explores new approaches to workflow automation, compliance intelligence, and AI-driven decision support. Each product is developed as a modular, adaptable component that can integrate into broader enterprise ecosystems.
                </p>
                <p>
                  HeadsUp Consulting engages with the Tokyo tech ecosystem and the wider APAC region, collaborating with organizations seeking to modernize their operating models, redesign workflows, or build new digital capabilities. Our focus is on systems that support autonomy, transparency, and continuous learning — systems that help teams move faster without losing alignment.
                </p>
                <p>
                  As the studio grows, our aim is to bring together architects, designers, and engineers who share a commitment to clarity, adaptability, and purposeful technology. HeadsUp Consulting is designed to scale beyond any single individual, evolving into a collective practice dedicated to building the next generation of enterprise systems.
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
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-neutral-600">Currently based in Kawasaki, Japan</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-neutral-600">Engaged with the Tokyo tech ecosystem</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-neutral-600">Available for systems architecture and AI product work across Japan and APAC</span>
                  </div>
                </div>
                <Link to="/contact" className="text-sm text-neutral-700 hover:text-neutral-900 font-medium flex items-center gap-1.5 transition-colors">
                  Get in touch <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-5">Journey</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-10">Career Journey</h2>
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
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Enterprise Agility Principles</h2>
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
