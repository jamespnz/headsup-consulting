import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Droplet, Scale, Wheat } from 'lucide-react';

const features = [
  'Real-time baker\'s percentage calculation from flour weight and water content',
  'Adjustable hydration presets for ciabatta, focaccia, sourdough, and sandwich loaves',
  'Support for preferment and levain hydration accounting',
  'Instant scaling across batch sizes and units (metric and imperial)',
  'Salt and yeast ratio guidance tied to flour weight',
  'Visual hydration indicator with dough-consistency reference notes',
  'Bookmarkable, shareable calculations via URL state',
  'Lightweight, zero-account, single-page interface',
];

const techStack = [
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
  { category: 'Calculation', items: ['Baker\'s Percent', 'Unit Conversion', 'Ratio Engine'] },
  { category: 'UX', items: ['Single-Page', 'Zero-Login', 'Share State'] },
  { category: 'Hosting', items: ['Subdomain', 'Static Deploy', 'Edge Cache'] },
];

const gaps = [
  { label: 'Manual percentage arithmetic errors', impact: 'High' },
  { label: 'Inconsistent unit conversion at scale', impact: 'Medium' },
  { label: 'No shareable calculation state', impact: 'Medium' },
  { label: 'Preferment hydration overlooked', impact: 'High' },
];

export default function BakingHydrationCalculator() {
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
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">Baking Hydration Calculator</h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            A focused single-page tool for computing baker\'s percentages, scaling batches, and accounting for preferment hydration — built for bakers who want fast, accurate, shareable math without a spreadsheet.
          </p>
          <div className="mt-8">
            <a
              href="https://baking.headsup-consulting.com"
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
              <h2 className="text-2xl font-semibold text-neutral-900 mb-5">Baker\'s math is error-prone by hand.</h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Home and professional bakers routinely convert recipes by hand, juggling flour weights, hydration targets, preferment contributions, and unit conversions simultaneously. Small arithmetic slips compound across a batch and produce inconsistent dough.
                </p>
                <p>
                  Spreadsheets help but are heavy, unshareable, and rarely account for preferment hydration separately from the final dough.
                </p>
                <p>
                  The Baking Hydration Calculator collapses this into a single, fast, zero-login page that produces accurate, shareable calculations on demand.
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
            A single-page calculator that treats baker\'s percentages as first-class, with preferment and unit handling built in.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                Icon: Droplet,
                label: 'Hydration Engine',
                desc: 'Computes baker\'s percentages from flour weight and water content, with presets for common loaf styles and adjustable hydration targets.',
              },
              {
                Icon: Scale,
                label: 'Batch Scaling',
                desc: 'Scales ingredient weights across batch sizes instantly, with metric and imperial unit conversion handled in the same pass.',
              },
              {
                Icon: Wheat,
                label: 'Preferment Accounting',
                desc: 'Isolates preferment and levain hydration from the final dough so the true effective hydration is always accurate.',
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
          <Link to="/portfolio" className="btn-secondary">
            <ArrowLeft size={14} /> All Products
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://baking.headsup-consulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Launch App <ExternalLink size={14} />
            </a>
            <Link to="/portfolio/spacing-calculator" className="btn-primary">
              Next: Spacing Calculator <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
