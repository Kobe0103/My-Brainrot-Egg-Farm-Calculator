'use client';

import { NavbarProps } from '@/types';

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const sections = [
    { id: 'mutations', label: 'Mutations' },
    { id: 'brainrots', label: 'Brainrots' },
    { id: 'details', label: 'Details' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>🧠 Brainrot Calc</h1>
      </div>
      <div className="nav-links">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: #111;
          border-bottom: 1px solid #222;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-brand h1 {
          font-size: 1.2rem;
          color: #fff;
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          gap: 0.5rem;
        }

        .nav-link {
          padding: 0.5rem 1.5rem;
          background: transparent;
          border: 1px solid #333;
          color: #888;
          cursor: pointer;
          border-radius: 20px;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }

        .nav-link:hover {
          border-color: #555;
          color: #ccc;
        }

        .nav-link.active {
          background: #222;
          border-color: #444;
          color: #fff;
        }
      `}</style>
    </nav>
  );
}