'use client';

import { BrainrotsProps } from '../types';

export default function Brainrots({ brainrots, selectedBrainrot, onSelectBrainrot, currentMutation }: BrainrotsProps) {
  return (
    <div className="section">
      <div className="section-header">
        <h2>
          {currentMutation ? `${currentMutation.name} Brainrots` : 'All Brainrots'}
        </h2>
        {currentMutation && (
          <span className="mutation-indicator">+{currentMutation.bonus}% bonus</span>
        )}
      </div>
      
      <div className="brainrots-grid">
        {brainrots.map(brainrot => (
          <div
            key={brainrot.id}
            className={`brainrot-card ${selectedBrainrot?.id === brainrot.id ? 'selected' : ''}`}
            onClick={() => onSelectBrainrot(brainrot)}
          >
            <div className="brainrot-image">
              <div className="image-placeholder">
                {brainrot.emoji}
              </div>
              <span className={`rarity-badge ${brainrot.rarity.toLowerCase()}`}>
                {brainrot.rarity}
              </span>
            </div>
            <div className="brainrot-info">
              <h3>{brainrot.name}</h3>
              <div className="brainrot-details">
                <span className="type">{brainrot.type}</span>
                {brainrot.mutation && (
                  <span className="mutation-tag">+{brainrot.mutationBonus}%</span>
                )}
              </div>
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

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        h2 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 400;
        }

        .mutation-indicator {
          background: #111111;
          border: 1px solid #10B981;
          color: #10B981;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .brainrots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .brainrot-card {
          background: #111111;
          border: 1px solid #222222;
          border-radius: 8px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .brainrot-card:hover {
          border-color: #444444;
          background: #1a1a1a;
        }

        .brainrot-card.selected {
          border-color: #ffffff;
          background: #1a1a1a;
        }

        .brainrot-image {
          position: relative;
          margin-bottom: 1rem;
          text-align: center;
        }

        .brainrot-image .image-placeholder {
          width: 80px;
          height: 80px;
          background: #0a0a0a;
          border: 1px solid #333333;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto;
        }

        .rarity-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #111111;
          border: 1px solid #333333;
          color: #fff;
          padding: 0.2rem 0.6rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .rarity-badge.rare {
          border-color: #3B82F6;
          color: #3B82F6;
        }

        .rarity-badge.basic {
          border-color: #6B7280;
          color: #6B7280;
        }

        .rarity-badge.epic {
          border-color: #8B5CF6;
          color: #8B5CF6;
        }

        .rarity-badge.legendary {
          border-color: #F59E0B;
          color: #F59E0B;
        }

        .brainrot-info h3 {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          text-align: center;
        }

        .brainrot-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }

        .type {
          color: #888;
          font-size: 0.8rem;
        }

        .mutation-tag {
          background: #111111;
          border: 1px solid #10B981;
          color: #10B981;
          padding: 0.2rem 0.6rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
