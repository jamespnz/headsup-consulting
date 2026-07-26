import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Landmark, FileSearch, ExternalLink } from 'lucide-react';

const features = [
  'Real-time NZBC compliance tracking against B1/AS1 and E2/AS1 frameworks',
  'Stateful, local-first ledger protocol for audit-trail integrity',
  'Automated Audit Block Ratio calculation per checkpoint',
  'Hard-stop capital drawdown gating on registered compliance failures',
  'Quantity surveying ledger isolation for cost-risk separation',
  'Field-capture forensic evidence binding to compliance events',
  'Timeline and intent logging for macroeconomic project governance',
  'Academic evaluation mode for NZIQS research workflows',
];

const techStack = [
  { category: 'Compliance Layer', items: ['NZBC B1/AS1', 'NZBC E2/AS1', 'Audit Block Ratio'] },
  { category: 'Core Protocol', items: ['Stateful Ledger', 'Local-First Architecture', 'Forensic Capture'] },
  { category: 'Risk Engine', items: ['Drawdown Gating', 'Value-at-Risk Calc', 'Checkpoint Isolation'] },
  { category: 'Target Users', items: ['NZIQS Professionals', 'Developers', 'Academic Evaluators'] },
];

const gaps = [
  { label: 'Blind progress payment certification', impact: 'High' },
  { label: 'Delayed manual photo check-offs', impact: 'High' },
  { label: 'No real-time defect visibility at drawdown', impact: 'High' },
  { label: 'Buried building code failures', impact: 'High' },
  { label: 'Audit trail gaps at milestone stage', impact: 'Medium' },
];

export default function NZBuildGuardian() {
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
            <span className="section-label text-neutral-500">Sector Product</span>
            <span className="tag border-neutral-700 text-neutral-400 bg-neutral-800">In Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">NZ-Build-Guardian</h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Stateful forensic audit automation for the New Zealand construction sector. Real-time NZBC compliance tracking, quantity surveying ledger isolation, and commercial value-at-risk gating — engineered for NZIQS professionals, developers, and academic evaluations.
          </p>
          <div className="mt-8">
            <a
              href="https://nz-build-guardian.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-neutral-100 transition-colors"
            >
              Launch App <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-4">Problem Statement</p>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">
                Progress payments are approved blind, risking structural and financial exposure.
              </h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Traditional construction milestone certifications rely heavily on delayed, manual, and unstructured photo check-offs. Quantity surveyors and compliance managers certify major drawdown progress payments without real-time visibility into non-compliant checkpoint defects.
                </p>
                <p>
                  The result: critical building code failures are buried under concrete pours or internal linings, exposing developers to immense capital liability, delayed remediation, and massive audit trail gaps.
                </p>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-8">
              <p className="section-label mb-5">The Gap</p>
              <div className="space-y-1">
                {gaps.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-neutral-200 last:border-0">
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

      {/* Solution */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">The Solution</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-10">
            NZ-Build-Guardian isolates commercial risk by hard-stopping capital drawdown loops the moment a compliance failure is registered.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                Icon: ShieldAlert,
                label: 'Stateful Ledger Protocol',
                desc: 'Operating under a local-first ledger protocol, the terminal maintains a complete, tamper-evident record of every compliance event and checkpoint state across the project lifecycle.',
              },
              {
                Icon: FileSearch,
                label: 'Audit Block Ratio Engine',
                desc: 'Calculates real-time Audit Block Ratios against NZBC frameworks including B1/AS1 Foundations and E2/AS1 External Moisture — making systemic input, timeline, and intent completely explicit.',
              },
              {
                Icon: Landmark,
                label: 'Capital Drawdown Gating',
                desc: 'Bridges field-capture forensics and macroeconomic project governance by preventing progress payments from being certified against checkpoints carrying unresolved compliance failures.',
              },
            ].map(({ Icon, label, desc }) => (
              <div key={label} className="card">
                <Icon size={20} className="text-neutral-400 mb-3" />
                <p className="text-sm font-semibold text-neutral-900 mb-2">{label}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
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
          <p className="section-label mb-4">Domain</p>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Scope</h2>
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
          <div className="flex items-center gap-3">
            <a
              href="https://nz-build-guardian.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Launch App <ExternalLink size={14} />
            </a>
            <Link to="/portfolio/app-design-framework" className="btn-primary">
              Next: App Design Framework <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
