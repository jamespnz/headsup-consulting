import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Ruler, Grid3x3, MoveHorizontal } from 'lucide-react';

const features = [
  'Even division of a fixed length into N equal segments with precise spacing',
  'Adjustable gap, margin, and element-count inputs with live recalculation',
  'Support for edge offsets and symmetric or asymmetric layouts',
  'Visual layout preview reflecting the computed spacing in real time',
  'Unit input in millimetres, centimetres, and inches with automatic conversion',
  'Copy-ready results for use in CAD, CSS, or carpentry contexts',
  'Bookmarkable, shareable calculations via URL state',
  'Lightweight, zero-account, single-page interface',
];

const techStack = [
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
  { category: 'Calculation', items: ['Equal Division', 'Unit Conversion', 'Offset Math'] },
  { category: 'UX', items: ['Single-Page', 'Zero-Login', 'Live Preview'] },
  { category: 'Hosting', items: ['Subdomain', 'Static Deploy', 'Edge Cache'] },
];

const gaps = [
  { label: 'Repeated manual division arithmetic', impact: 'Medium' },
  { label: 'Inconsistent unit handling across tools', impact: 'Medium' },
  { label: 'No visual preview of computed layout', impact: 'High' },
  { label: 'Unshareable ad-hoc spacing math', impact: 'Low' },
];

export default function SpacingCalculator() {
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
            <span className="section-label text-neutral-500">Micro-Utility</span>
            <span className="tag border-neutral-700 text-neutral-400 bg-neutral-800">Live</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">Spacing Calculator</h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            A focused single-page tool for dividing a fixed length into evenly spaced segments — built for designers, builders, and makers who need accurate, repeatable layout math without a spreadsheet.
          </p>
          <div className="mt-8">
            <a
              href="https://spacing.headsup-consulting.com"
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
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">Even spacing is tedious to get right by hand.</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Dividing a run into evenly spaced elements — fence posts, shelf supports, UI grid columns, buttons on a rail — requires dividing a length by a count and then accounting for gaps, margins, and edge offsets. Done by hand, the arithmetic is repetitive and easy to get wrong.
                </p>
                <p>
                  General-purpose calculators don\'t show a preview, and spreadsheets don\'t translate cleanly into a physical or visual layout.
                </p>
                <p>
                  The Spacing Calculator collapses the whole flow into a single page with live preview, unit conversion, and shareable state.
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
            A single-page calculator that turns length, count, and margin inputs into precise, previewable spacing.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                Icon: Ruler,
                label: 'Division Engine',
                desc: 'Divides a fixed length into N equal segments, handling gaps, margins, and edge offsets so the computed spacing is always exact.',
              },
              {
                Icon: MoveHorizontal,
                label: 'Offset & Symmetry',
                desc: 'Supports symmetric and asymmetric layouts with independent start and end margins, so edge conditions stay explicit rather than implied.',
              },
              {
                Icon: Grid3x3,
                label: 'Live Preview',
                desc: 'Renders the computed layout in real time, giving an immediate visual check before the numbers are carried into CAD, CSS, or carpentry.',
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
          <Link to="/portfolio/baking-hydration-calculator" className="btn-secondary">
            <ArrowLeft size={14} /> Baking Hydration Calculator
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://spacing.headsup-consulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Launch App <ExternalLink size={14} />
            </a>
            <Link to="/portfolio" className="btn-primary">
              All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
