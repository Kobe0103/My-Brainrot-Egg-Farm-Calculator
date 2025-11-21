'use client';

import { useState } from 'react';
import { BrainrotDetailsProps } from '../types';

export default function BrainrotDetails({ brainrot }: BrainrotDetailsProps) {
  const [level, setLevel] = useState(brainrot?.level || 1);

  if (!brainrot) {
    return (
      <div className="section">
        <div className="empty-state">
          <span>Select a brainrot to view details</span>
        </div>
        <style jsx>{`
          .section {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 300px;
            color: #666;
            font-size: 0.9rem;
          }
        `}</style>
      </div>
    );
  }

  const calculateStats = () => {
    const baseIncome = typeof brainrot.baseIncome === 'number' ? brainrot.baseIncome : 0;
    const rarityBonus = brainrot.rarity === 'Rare' ? 50 : 
                       brainrot.rarity === 'Epic' ? 100 :
                       brainrot.rarity === 'Legendary' ? 200 : 0;
    const mutationBonus = brainrot.mutationBonus || 0;
    const levelBonus = (level - 1) * 5;
    
    const totalBonus = rarityBonus + mutationBonus + levelBonus;
    const totalIncome = baseIncome * (1 + totalBonus / 100);
    
    return {
      income: totalIncome,
      rarityBonus,
      mutationBonus,
      levelBonus,
      totalBonus
    };
  };

  const stats = calculateStats();

  return (
    <div className="section">
      <div className="details-container">
        <div className="details-header">
          <div className="brainrot-image-large">
            <div className="image-placeholder">
              {brainrot.emoji}
            </div>
          </div>
          <div className="brainrot-info">
            <h2>{brainrot.name}</h2>
            <div className="tags">
              <span className={`rarity-tag ${brainrot.rarity.toLowerCase()}`}>
                {brainrot.rarity}
              </span>
              {brainrot.mutation && (
                <span className="mutation-tag">
                  {brainrot.mutation} +{brainrot.mutationBonus}%
                </span>
              )}
              <span className="type-tag">
                {brainrot.type}
              </span>
            </div>
          </div>
        </div>

        <div className="details-content">
          <div className="level-section">
            <h3>Level</h3>
            <div className="level-controls">
              <button 
                onClick={() => setLevel(Math.max(1, level - 1))}
                disabled={level <= 1}
              >
                -
              </button>
              <input
                type="number"
                value={level}
                onChange={(e) => setLevel(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="100"
              />
              <button onClick={() => setLevel(level + 1)}>+</button>
            </div>
          </div>

          <div className="stats-section">
            <h3>Statistics</h3>
            <div className="stats-grid">
              <div className="stat">
                <span>Base Income</span>
                <span>{typeof brainrot.baseIncome === 'number' ? brainrot.baseIncome : 0}/s</span>
              </div>
              {stats.rarityBonus > 0 && (
                <div className="stat">
                  <span>Rarity Bonus</span>
                  <span className="bonus">+{stats.rarityBonus}%</span>
                </div>
              )}
              {stats.mutationBonus > 0 && (
                <div className="stat">
                  <span>Mutation Bonus</span>
                  <span className="bonus">+{stats.mutationBonus}%</span>
                </div>
              )}
              <div className="stat">
                <span>Level Bonus</span>
                <span className="bonus">+{stats.levelBonus}%</span>
              </div>
              <div className="stat">
                <span>Current Level</span>
                <span>{level}</span>
              </div>
              <div className="stat total">
                <span>Total Income</span>
                <span>{stats.income.toFixed(1)}/s</span>
              </div>
              <div className="stat total-bonus">
                <span>Total Bonus</span>
                <span className="bonus">+{stats.totalBonus}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .details-container {
          background: #111111;
          border: 1px solid #222222;
          border-radius: 8px;
          overflow: hidden;
        }

        .details-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          background: #1a1a1a;
          border-bottom: 1px solid #222222;
        }

        .brainrot-image-large .image-placeholder {
          width: 100px;
          height: 100px;
          background: #0a0a0a;
          border: 1px solid #333333;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .brainrot-info h2 {
          color: #fff;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .rarity-tag, .mutation-tag, .type-tag {
          background: #111111;
          border: 1px solid #333333;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .rarity-tag.rare {
          border-color: #3B82F6;
          color: #3B82F6;
        }

        .rarity-tag.basic {
          border-color: #6B7280;
          color: #6B7280;
        }

        .rarity-tag.epic {
          border-color: #8B5CF6;
          color: #8B5CF6;
        }

        .rarity-tag.legendary {
          border-color: #F59E0B;
          color: #F59E0B;
        }

        .mutation-tag {
          border-color: #10B981;
          color: #10B981;
        }

        .type-tag {
          border-color: #888;
          color: #888;
        }

        .details-content {
          padding: 2rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }

        .level-section h3, .stats-section h3 {
          color: #fff;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .level-controls {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .level-controls button {
          width: 50px;
          height: 50px;
          background: #111111;
          border: 1px solid #333333;
          color: #fff;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-size: 1.2rem;
        }

        .level-controls button:hover:not(:disabled) {
          background: #1a1a1a;
          border-color: #444444;
        }

        .level-controls button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .level-controls input {
          width: 100px;
          height: 50px;
          background: #111111;
          border: 1px solid #333333;
          color: #fff;
          text-align: center;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stat {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background: #1a1a1a;
          border: 1px solid #222222;
          border-radius: 8px;
          color: #ccc;
          font-size: 0.9rem;
        }

        .bonus {
          color: #10B981;
          font-weight: 500;
        }

        .stat.total {
          background: #111111;
          border-color: #333333;
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
        }

        .stat.total-bonus {
          background: #111111;
          border-color: #10B981;
          color: #10B981;
          font-weight: 500;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .details-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .details-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
