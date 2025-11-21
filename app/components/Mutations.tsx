'use client';

import { MutationsProps } from '@/types';

export default function Mutations({ mutations, selectedMutation, onSelectMutation }: MutationsProps) {
  return (
    <div className="section">
      <h2>Mutations</h2>
      <div className="mutations-grid">
        {mutations.map(mutation => (
          <div
            key={mutation.id}
            className={`mutation-card ${selectedMutation?.id === mutation.id ? 'selected' : ''}`}
            onClick={() => onSelectMutation(mutation)}
          >
            <div className="mutation-image">
              <div className="image-placeholder">
                {mutation.emoji}
              </div>
            </div>
            <div className="mutation-info">
              <h3>{mutation.name}</h3>
              <span className="mutation-bonus">+{mutation.bonus}% bonus</span>
              <span className="mutation-count">{mutation.brainrots.length} brainrots</span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .section {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          margin-bottom: 1.5rem;
          color: #fff;
          font-size: 1.5rem;
          font-weight: 400;
        }

        .mutations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .mutation-card {
          background: #111111;
          border: 1px solid #222222;
          border-radius: 8px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .mutation-card:hover {
          border-color: #444444;
          background: #1a1a1a;
        }

        .mutation-card.selected {
          border-color: #ffffff;
          background: #1a1a1a;
        }

        .mutation-image {
          margin-bottom: 1rem;
        }

        .image-placeholder {
          width: 80px;
          height: 80px;
          background: #0a0a0a;
          border: 1px solid #333333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto;
        }

        .mutation-info h3 {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .mutation-bonus {
          color: #10B981;
          font-size: 0.9rem;
          font-weight: 500;
          display: block;
          margin-bottom: 0.3rem;
        }

        .mutation-count {
          color: #888;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}