import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { ArchDiagram } from '../components/Diagrams';

const portfolioItems = [
  {
    id: 'zenith-audit',
    label: 'Flagship Product',
    name: 'ZenithAudit',
    description: 'AI-enabled compliance audit automation for enterprise environments. Structured reporting, workflow orchestration, and intelligent gap analysis.',
    status: 'In Development',
    tags: ['AI', 'Compliance', 'Automation'],
    path: '/portfolio/zenith-audit',
  },
  {
    id: 'app-design-framework',
    label: 'Meta-Product',
    name: 'App Design Studio Framework',
    description: 'A systematic methodology for designing and delivering AI-enabled systems — from discovery to deployment.',
    status: 'Active',
    tags: ['Architecture', 'Process', 'AI Systems'],
    path: '/portfolio/app-design-framework',
  },
  {
    id: 'workflow-intelligence',
    label: 'Upcoming',
    name: 'Workflow Intelligence Engine',
    description: 'Intelligent process orchestration layer connecting enterprise data sources with AI reasoning pipelines.',
    status: 'Concept',
    tags: ['Workflow', 'AI', 'Integration'],
    path: '/portfolio/workflow-intelligence',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-6 animate-fade-up opacity-0-init" style={{ animationFillMode: 'forwards' }}>
                HeadsUp Consulting
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-6 leading-tight animate-fade-up opacity-0-init animate-delay-100" style={{ animationFillMode: 'forwards' }}>
                Systems Architect<br />
                <span className="text-neutral-400">&amp; Founder</span>
              </h1>
              <p className="text-lg text-neutral-500 mb-8 max-w-md leading-relaxed animate-fade-up opacity-0-init animate-delay-200" style={{ animationFillMode: 'forwards' }}>
                AI-Enabled Workflows and Compliance Automation. Building the next generation of enterprise intelligence systems.
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-10 animate-fade-up opacity-0-init animate-delay-300" style={{ animationFillMode: 'forwards' }}>
                <MapPin size={14} />
                <span className="font-mono">Japan → New Zealand · Jan 2027</span>
              </div>
              <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init animate-delay-400" style={{ animationFillMode: 'forwards' }}>
                <Link to="/portfolio" className="btn-primary">
                  View Portfolio <ArrowRight size={15} />
                </Link>
                <Link to="/about" className="btn-secondary">
                  About James
                </Link>
              </div>
            </div>

            {/* Architecture diagram */}
            <div className="relative hidden lg:block">
              <div className="border border-neutral-200 rounded-sm overflow-hidden bg-neutral-50 aspect-[3/2] animate-fade-in opacity-0-init animate-delay-300" style={{ animationFillMode: 'forwards' }}>
                <ArchDiagram />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-neutral-200 rounded-sm bg-white" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-neutral-100 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-label text-neutral-500 mb-6">Positioning</p>
            <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-neutral-200 mb-8">
              "A boutique systems architecture and AI product studio — building credible, production-grade intelligence systems for enterprise environments."
            </blockquote>
            <div className="divider bg-neutral-700" />
            <div className="grid sm:grid-cols-3 gap-8 mt-8">
              {[
                { label: 'Systems Architecture', desc: 'Distributed systems, cloud-native patterns, and enterprise integration.' },
                { label: 'AI Products', desc: 'AI-enabled workflows, compliance automation, and intelligent reporting.' },
                { label: 'Founder-Led', desc: 'Hands-on architecture and product delivery from concept to production.' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-medium text-white mb-2">{item.label}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Portfolio</p>
              <h2 className="text-3xl font-semibold text-neutral-900">Product Suite</h2>
            </div>
            <Link to="/portfolio" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5">
              All products <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="group card flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="section-label">{item.label}</span>
                  <span className="tag">{item.status}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 group-hover:text-neutral-700 transition-colors">
                  View details <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Japan → NZ narrative */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-6">Founder Story</p>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Japan → New Zealand</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Based in Japan, James has spent years refining a systems-thinking approach to architecture — influenced by Japan's precision culture, engineering discipline, and methodical approach to problem-solving.
                </p>
                <p>
                  Returning to New Zealand in January 2027, HeadsUp Consulting brings this perspective to the NZ tech ecosystem: deliberate, clean, and production-grade.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-secondary">
                  Read Full Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {[
                { period: 'Now', label: 'Japan', desc: 'Building AI products and refining architecture patterns from Fujisan.' },
                { period: 'Late 2026', label: 'NZ Tech Expo', desc: 'Presenting portfolio and connecting with the NZ technology ecosystem.' },
                { period: 'Jan 2027', label: 'New Zealand', desc: 'Returning to Auckland. Available for architecture consulting engagements.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 flex-shrink-0 mt-1" />
                    {i < 2 && <div className="w-px flex-1 bg-neutral-300 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-sm font-semibold text-neutral-900">{item.label}</p>
                      <span className="tag">{item.period}</span>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-4">Ready to connect?</h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Available for architecture consulting, product design, and advisory engagements from January 2027.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
