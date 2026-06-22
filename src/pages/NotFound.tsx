import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="pt-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-mono text-neutral-400 mb-4">404</p>
        <h1 className="text-3xl font-semibold text-neutral-900 mb-4">Page not found</h1>
        <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return Home <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}
