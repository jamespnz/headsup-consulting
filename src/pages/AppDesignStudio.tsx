import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StudioDiagram } from '../components/Diagrams';

const pipeline = [
  {
    id: 'zenith-audit',
    name: 'ZenithAudit',
    stage: 'In Development',
    category: 'Compliance Automation',
    desc: 'AI-enabled compliance audit automation. First product in the portfolio.',
    path: '/portfolio/zenith-audit',
  },
  {
    id: 'workflow-engine',
    name: 'Workflow Intelligence Engine',
    stage: 'Concept',
    category: 'Process Orchestration',
    desc: 'Intelligent orchestration layer for enterprise workflow automation.',
    path: '/portfolio/workflow-intelligence',
  },
  {
    id: 'future-1',
    name: 'Product TBD',
    stage: 'Research',
    category: 'Data Intelligence',
    desc: 'Structured data analysis and reporting for regulated environments.',
    path: '#',
  },
];

const principles = [
  {
    num: '01',
    title: 'Architecture-Led',
    desc: 'Every product begins with a documented architecture decision record. The blueprint precedes the build.',
  },
  {
    num: '02',
    title: 'AI-Native Design',
    desc: 'AI is a first-class design concern — integrated at the architectural level, not layered on after the fact.',
  },
  {
    num: '03',
    title: 'Structured by Default',
    desc: 'Typed schemas, validated outputs, and documented interfaces. No ambiguity in critical data paths.',
  },
  {
    num: '04',
    title: 'Opinionated Stack',
    desc: 'Consistent technology choices across products. Reduces cognitive overhead, speeds delivery, simplifies maintenance.',
  },
  {
    num: '05',
    title: 'Production-Grade Only',
    desc: 'No prototype-masquerading-as-product. Every deliverable is deployable, documented, and maintainable.',
  },
  {
    num: '06',
    title: 'Minimal Surface Area',
    desc: 'Scope is a liability. Each product does one thing well before expanding.',
  },
];

export default function AppDesignStudio() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-neutral-500 mb-5">Business Unit</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">App Design Studio</h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            The internal product development unit of HeadsUp Consulting. Building AI-enabled systems from architecture blueprint to production deployment.
          </p>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-5">Purpose</p>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">What App Design Studio Does</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  App Design Studio is the internal unit responsible for all HeadsUp product development. It is not a separate company or agency — it is a named methodology and team identity within HeadsUp Consulting.
                </p>
                <p>
                  The studio applies a consistent, architecture-led approach to building AI-enabled systems. It owns the product pipeline, manages the technology stack, and ensures every product meets production-grade standards before release.
                </p>
                <p>
                  The studio also develops the App Design Studio Framework — a reusable methodology for AI system design that is applied across all products and available as a consulting engagement for external clients.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/portfolio/app-design-framework" className="btn-primary">
                  View the Framework <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-sm overflow-hidden bg-neutral-50" style={{ height: '280px' }}>
              <StudioDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-5">Design Philosophy</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-10">Studio Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="card">
                <p className="text-xl font-mono font-light text-neutral-200 mb-3">{p.num}</p>
                <p className="text-sm font-semibold text-neutral-900 mb-2">{p.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="section-label mb-3">Product Pipeline</p>
              <h2 className="text-2xl font-semibold text-neutral-900">Current &amp; Upcoming</h2>
            </div>
            <Link to="/portfolio" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5">
              Full portfolio <ArrowRight size={13} />
            </Link>
          </div>
          <div className="space-y-4">
            {pipeline.map((product, i) => (
              <div
                key={product.id}
                className={`border border-neutral-200 rounded-sm p-6 ${product.path !== '#' ? 'hover:border-neutral-400 transition-colors' : 'opacity-60'}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-neutral-300">{String(i + 1).padStart(2, '0')}</span>
                      <span className="tag">{product.category}</span>
                      <span className="tag">{product.stage}</span>
                    </div>
                    <p className="text-base font-semibold text-neutral-900 mb-1">{product.name}</p>
                    <p className="text-sm text-neutral-500">{product.desc}</p>
                  </div>
                  {product.path !== '#' && (
                    <Link
                      to={product.path}
                      className="flex-shrink-0 text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1.5 transition-colors"
                    >
                      View details <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI workflow principles */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-neutral-500 mb-5">AI Workflow Principles</p>
          <h2 className="text-2xl font-semibold text-white mb-8">How We Use AI</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Schema-Validated Outputs', desc: 'All AI model outputs are validated against typed schemas before entering business logic.' },
              { title: 'Deterministic Where Possible', desc: 'Non-deterministic AI reasoning is isolated to specific nodes. Core workflows remain testable and predictable.' },
              { title: 'Fallback Logic Required', desc: 'Every AI integration has a defined fallback path. Systems must function — at reduced capability — if models are unavailable.' },
              { title: 'Audit Trail on AI Decisions', desc: 'Decisions made with AI assistance are logged with context, model version, and output for compliance and debugging.' },
              { title: 'Human-in-the-Loop Checkpoints', desc: 'High-stakes decisions include a human review gate. Automation serves humans, not the reverse.' },
              { title: 'Prompt Architecture as Code', desc: 'Prompts are versioned, tested, and reviewed the same way application code is.' },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-800 rounded-sm p-5">
                <p className="text-sm font-semibold text-white mb-2">{item.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
