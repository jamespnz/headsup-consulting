import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'zenith-audit',
    label: 'Flagship Product',
    name: 'ZenithAudit',
    tagline: 'AI-enabled compliance audit automation',
    description: 'Enterprise compliance audit automation powered by AI. Structured reporting, workflow orchestration, and intelligent gap analysis for regulated environments.',
    status: 'In Development',
    tags: ['AI', 'Compliance', 'Automation', 'Enterprise'],
    path: '/portfolio/zenith-audit',
  },
  {
    id: 'app-design-framework',
    label: 'Meta-Product',
    name: 'App Design Studio Framework',
    tagline: 'Systematic methodology for AI-enabled systems',
    description: 'A replicable architecture and delivery methodology used across all HeadsUp products. From discovery to deployment, with AI integrated at every layer.',
    status: 'Active',
    tags: ['Architecture', 'Process', 'AI Systems', 'Methodology'],
    path: '/portfolio/app-design-framework',
  },
  {
    id: 'workflow-intelligence',
    label: 'Upcoming',
    name: 'Workflow Intelligence Engine',
    tagline: 'Intelligent process orchestration for enterprise',
    description: 'A next-generation process orchestration layer connecting enterprise data sources with AI reasoning pipelines. Designed for complex multi-system environments.',
    status: 'Concept',
    tags: ['Workflow', 'AI', 'Integration', 'Enterprise'],
    path: '/portfolio/workflow-intelligence',
  },
];

export default function Portfolio() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-neutral-500 mb-5">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">Product Suite</h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            A focused portfolio of AI-enabled systems, compliance tools, and architectural frameworks — each built with production-grade rigour.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-6">
            {products.map((product, i) => (
              <Link
                key={product.id}
                to={product.path}
                className="group block border border-neutral-200 rounded-sm p-8 hover:border-neutral-400 transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="section-label">{product.label}</span>
                      <span className="tag">{product.status}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-sm text-neutral-500 mb-3 font-medium">{product.tagline}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">{product.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {product.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-800 transition-colors">
                    <span>View details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-300">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1 h-px bg-neutral-100 group-hover:bg-neutral-200 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-1">Working on something new?</h3>
              <p className="text-sm text-neutral-500">Consulting engagements open from January 2027.</p>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
