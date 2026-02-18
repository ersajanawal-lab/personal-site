import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Sajan Awal</span>
        </h1>

        <p className="hero-tagline">
          Co-founder at{' '}
          <a href="https://instagram.com/civilengineer.diary" className="hero-highlight">
            CED
          </a>
          , the developing platform for construction professionals.
          <br />
          Building tools and products for productivity.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Khce Alum</span>
          <span className="hero-chip">Construction Project Manager</span>
          <span className="hero-chip">Co-founded CED</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
