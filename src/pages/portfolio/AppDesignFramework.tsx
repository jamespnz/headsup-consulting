import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { StudioDiagram } from '../../components/Diagrams';

const phases = [
  {
    num: '01',
    label: 'Discovery',
    desc: 'Stakeholder interviews, system landscape mapping, constraint identification, and opportunity scoping. Output: problem brief + architecture decision record.',
  },
  {
    num: '02',
    label: 'Architecture Design',
    desc: 'System design, data flow modelling, AI integration points, API contracts, and technology selection. Output: architecture blueprint.',
  },
  {
    num: '03',
    label: 'AI Layer Design',
    desc: 'Define AI model roles, prompt architecture, structured output schemas, and fallback logic. Output: AI specification document.',
  },
  {
    num: '04',
    label: 'Build & Iterate',
    desc: 'Iterative delivery in two-week cycles. Feature flag-driven rollout, continuous integration, and staged deployment to preview environments.',
  },
  {
    num: '05',
    label: 'Validation',
    desc: 'Structured testing against acceptance criteria, user acceptance testing, performance benchmarking, and security review.',
  },
  {
    num: '06',
    label: 'Delivery & Handover',
    desc: 'Production deployment, runbook documentation, monitoring setup, and optional ongoing advisory retainer.',
  },
];

const principles = [
  {
    title: 'Architecture First',
    desc: 'Every product begins with a documented architecture decision. No code before the blueprint.',
  },
  {
    title: 'AI-Native, Not AI-Bolted',
    desc: 'AI is designed into the system from the start — not retrofitted into an existing workflow.',
  },
  {
    title: 'Structured Outputs',
    desc: 'All AI interactions use typed, schema-validated outputs. No unstructured text in critical paths.',
  },
  {
    title: 'Production Readiness',
    desc: 'Every deliverable is deployable. No half-built prototypes presented as finished products.',
  },
];

export default function AppDesignFramework() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="section-label text-neutral-500">Meta-Product</span>
            <span className="tag border-neutral-700 text-neutral-400 bg-neutral-800">Active</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">App Design Studio<br />Framework</h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            A systematic methodology for designing and delivering AI-enabled systems. Used across all HeadsUp products — from discovery and architecture through to production deployment.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">The Framework</p>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">What it is</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  The App Design Studio Framework is a repeatable, opinionated methodology for building AI-enabled enterprise systems. It emerged from repeated delivery across compliance, workflow, and data integration domains.
                </p>
                <p>
                  Rather than treating each project as a greenfield problem, the framework provides a structured sequence of architecture decisions, AI design patterns, and delivery checkpoints.
                </p>
                <p>
                  The result: faster time-to-clarity on architecture, fewer late-stage design rework cycles, and a production-grade result from day one.
                </p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-sm overflow-hidden bg-neutral-50" style={{ height: '280px' }}>
              <StudioDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Delivery Sequence</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-10">Framework Phases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.num} className="card">
                <p className="text-2xl font-mono font-light text-neutral-200 mb-3">{phase.num}</p>
                <p className="text-sm font-semibold text-neutral-900 mb-2">{phase.label}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Design Philosophy</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Core Principles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-neutral-900 pl-5 py-2">
                <p className="text-sm font-semibold text-neutral-900 mb-1.5">{p.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture patterns */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Technical Patterns</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Architecture Patterns Used</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              'Event-Driven Architecture',
              'CQRS',
              'Hexagonal Architecture',
              'AI Gateway Pattern',
              'Schema-First Design',
              'Feature Flag Deployment',
              'Observability-First',
              'Zero-Trust Security',
              'API-First Integration',
            ].map((pattern) => (
              <div key={pattern} className="flex items-center gap-2.5 py-3 px-4 border border-neutral-200 rounded-sm bg-white">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                <span className="text-sm font-mono text-neutral-600">{pattern}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/portfolio/zenith-audit" className="btn-secondary">
            <ArrowLeft size={14} /> ZenithAudit
          </Link>
          <Link to="/portfolio/workflow-intelligence" className="btn-primary">
            Next: Workflow Intelligence <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
