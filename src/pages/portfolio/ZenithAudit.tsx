import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ArchDiagram } from '../../components/Diagrams';

const features = [
  'Automated compliance gap analysis using AI reasoning models',
  'Structured audit report generation with traceable evidence chains',
  'Multi-framework support: ISO 27001, SOC2, NIST, NZ GCIO',
  'Workflow orchestration for remediation tracking',
  'Executive dashboard with risk heatmaps',
  'Integration layer for existing GRC tools',
  'Scheduled audit cycles with delta tracking',
  'Role-based access control and audit trails',
];

const techStack = [
  { category: 'AI Layer', items: ['LLM Reasoning', 'Structured Outputs', 'RAG Pipeline'] },
  { category: 'Backend', items: ['TypeScript', 'Supabase', 'Edge Functions'] },
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
  { category: 'Infrastructure', items: ['Vercel', 'PostgreSQL', 'S3'] },
];

export default function ZenithAudit() {
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
            <span className="section-label text-neutral-500">Flagship Product</span>
            <span className="tag border-neutral-700 text-neutral-400 bg-neutral-800">In Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">ZenithAudit</h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            AI-enabled compliance audit automation for enterprise environments. Structured reporting, workflow orchestration, and intelligent gap analysis — built for regulated industries.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-4">Problem Statement</p>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">Compliance is broken by design</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Enterprise compliance audits are still largely manual. Teams spend weeks collating evidence, mapping controls to frameworks, and drafting reports — only to repeat the same process the following year.
                </p>
                <p>
                  The result: expensive audit cycles, inconsistent evidence quality, delayed remediation, and reports that don't reflect real-time risk posture.
                </p>
                <p>
                  ZenithAudit is designed to automate the structured, repeatable parts of compliance — freeing auditors to focus on judgement, not document assembly.
                </p>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-8">
              <p className="section-label mb-5">The Gap</p>
              <div className="space-y-4">
                {[
                  { label: 'Manual evidence collection', impact: 'High' },
                  { label: 'Inconsistent control mapping', impact: 'High' },
                  { label: 'Static point-in-time reporting', impact: 'Medium' },
                  { label: 'Slow remediation tracking', impact: 'Medium' },
                  { label: 'No AI-assisted analysis', impact: 'High' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-neutral-200 last:border-0">
                    <span className="text-sm text-neutral-700">{item.label}</span>
                    <span className={`tag text-xs ${item.impact === 'High' ? 'text-neutral-800 bg-neutral-200 border-neutral-300' : ''}`}>
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Architecture Overview</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-10">System Design</h2>
          <div className="border border-neutral-200 rounded-sm overflow-hidden bg-white" style={{ height: '320px' }}>
            <ArchDiagram />
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { label: 'AI Reasoning', desc: 'LLM-powered control analysis, evidence evaluation, and gap identification with structured output schemas.' },
              { label: 'Workflow Engine', desc: 'Orchestrates audit cycles, evidence requests, reviewer assignments, and remediation tracking.' },
              { label: 'Reporting Layer', desc: 'Generates structured audit reports in multiple formats, mapped to specific compliance frameworks.' },
            ].map((item) => (
              <div key={item.label} className="card">
                <p className="text-sm font-semibold text-neutral-900 mb-2">{item.label}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Key Features</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 py-3 border-b border-neutral-100">
                <CheckCircle2 size={16} className="text-neutral-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Technologies</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-widest mb-3">{group.category}</p>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag block w-fit">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/portfolio" className="btn-secondary">
            <ArrowLeft size={14} /> All Products
          </Link>
          <Link to="/portfolio/app-design-framework" className="btn-primary">
            Next: App Design Framework <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
