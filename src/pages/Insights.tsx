import { Link } from 'react-router-dom';
import { ArrowRight, PenLine } from 'lucide-react';

const placeholderInsights = [
  {
    title: 'Architecture decisions are irreversible — treat them that way',
    category: 'Architecture',
    date: 'Coming soon',
    desc: 'On the asymmetry between making and reversing architectural decisions, and why the analysis phase deserves more time than most teams give it.',
  },
  {
    title: 'What "AI-native" actually means in enterprise systems',
    category: 'AI Systems',
    date: 'Coming soon',
    desc: 'Distinguishing genuine AI integration from AI decoration — and why the difference matters for reliability, cost, and maintainability.',
  },
  {
    title: 'Compliance automation without hallucinations',
    category: 'Compliance',
    date: 'Coming soon',
    desc: 'How structured output schemas, validation layers, and human checkpoints allow AI to participate reliably in regulated workflows.',
  },
  {
    title: 'Japan, craft, and the engineering discipline I brought back',
    category: 'Founder Notes',
    date: 'Coming soon',
    desc: 'What years in Japan taught me about precision, patience, and why "good enough" is rarely good enough in systems architecture.',
  },
];

export default function Insights() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-neutral-500 mb-5">Insights</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight">Notes &amp; Writing</h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            Thinking on systems architecture, AI design patterns, compliance automation, and building products that last.
          </p>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start gap-5 p-6 border border-neutral-200 rounded-sm bg-neutral-50">
            <div className="w-10 h-10 bg-neutral-200 rounded-sm flex items-center justify-center flex-shrink-0">
              <PenLine size={17} className="text-neutral-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 mb-1">Writing in progress</p>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                The Insights section is currently being drafted. The articles below represent planned topics. Subscribe or check back after the NZ Tech Expo in late 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {placeholderInsights.map((insight) => (
              <div
                key={insight.title}
                className="border border-neutral-200 rounded-sm p-6 opacity-60"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="tag">{insight.category}</span>
                  <span className="text-xs font-mono text-neutral-400">{insight.date}</span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2 leading-snug">{insight.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{insight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">Want to discuss these topics?</h3>
              <p className="text-sm text-neutral-500">Reach out directly — I am happy to discuss architecture challenges.</p>
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
