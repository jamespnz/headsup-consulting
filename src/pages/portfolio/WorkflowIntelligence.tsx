import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

export default function WorkflowIntelligence() {
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
            <span className="section-label text-neutral-500">Upcoming</span>
            <span className="tag border-neutral-700 text-neutral-400 bg-neutral-800">Concept</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">Workflow Intelligence<br />Engine</h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Intelligent process orchestration connecting enterprise data sources with AI reasoning pipelines. Designed for complex, multi-system environments.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-4">Vision</p>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">The Problem It Solves</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Enterprise workflows are fragmented across dozens of systems — each with its own data model, API, and process logic. Integrating them requires custom connectors, brittle pipelines, and constant maintenance.
                </p>
                <p>
                  The Workflow Intelligence Engine provides a unifying orchestration layer that understands process context, routes work intelligently, and uses AI reasoning to handle exceptions — without requiring custom code for every integration point.
                </p>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Planned Capabilities</p>
              <div className="space-y-3">
                {[
                  'Visual workflow designer with AI-assisted process mapping',
                  'Native connectors for common enterprise SaaS platforms',
                  'AI reasoning nodes for exception handling and decision support',
                  'Real-time process telemetry and anomaly detection',
                  'Natural language workflow specification',
                  'Compliance-aware process guardrails',
                ].map((cap) => (
                  <div key={cap} className="flex items-start gap-3 py-2 border-b border-neutral-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-neutral-600">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-neutral-200 rounded-sm flex items-center justify-center flex-shrink-0">
              <Construction size={20} className="text-neutral-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">In Concept Phase</h2>
              <p className="text-neutral-500 leading-relaxed max-w-2xl">
                The Workflow Intelligence Engine is currently in the concept and requirements phase. Architecture design will begin following the ZenithAudit production release. If you are working on a problem in this space, reach out — early conversations shape better products.
              </p>
              <div className="mt-5">
                <Link to="/contact" className="btn-secondary">
                  Discuss This Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/portfolio/app-design-framework" className="btn-secondary">
            <ArrowLeft size={14} /> App Design Framework
          </Link>
          <Link to="/portfolio" className="btn-primary">
            All Products <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
