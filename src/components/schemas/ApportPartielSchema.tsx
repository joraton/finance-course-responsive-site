import React from 'react';

const ApportPartielSchema: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4">
      <h3 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4 text-gray-800">
        Schéma : Apport partiel d'actif
      </h3>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 800 400"
          className="w-full min-w-[600px] sm:min-w-0 h-auto border border-gray-300 rounded-lg bg-white"
        >
        {/* Société Apporteuse (avant) */}
        <rect x="50" y="50" width="150" height="100" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="5" />
        <text x="125" y="80" textAnchor="middle" className="text-sm font-semibold" fill="#1976d2">
          Société A
        </text>
        <text x="125" y="95" textAnchor="middle" className="text-xs" fill="#1976d2">
          (Apporteuse)
        </text>
        <text x="125" y="110" textAnchor="middle" className="text-xs" fill="#1976d2">
          Branche X + Y
        </text>
        <text x="125" y="125" textAnchor="middle" className="text-xs" fill="#1976d2">
          Autres actifs
        </text>

        {/* Société Bénéficiaire (avant) */}
        <rect x="300" y="50" width="150" height="100" fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="2" rx="5" />
        <text x="375" y="80" textAnchor="middle" className="text-sm font-semibold" fill="#7b1fa2">
          Société B
        </text>
        <text x="375" y="95" textAnchor="middle" className="text-xs" fill="#7b1fa2">
          (Bénéficiaire)
        </text>
        <text x="375" y="110" textAnchor="middle" className="text-xs" fill="#7b1fa2">
          Activités
        </text>
        <text x="375" y="125" textAnchor="middle" className="text-xs" fill="#7b1fa2">
          existantes
        </text>

        {/* Flèche d'apport */}
        <path d="M 200 100 L 280 100" stroke="#ff6f00" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <text x="240" y="90" textAnchor="middle" className="text-xs font-semibold" fill="#ff6f00">
          Apport
        </text>
        <text x="240" y="105" textAnchor="middle" className="text-xs" fill="#ff6f00">
          Branche X
        </text>

        {/* Flèche de rémunération */}
        <path d="M 280 120 L 200 120" stroke="#4caf50" strokeWidth="3" markerEnd="url(#arrowhead2)" />
        <text x="240" y="135" textAnchor="middle" className="text-xs font-semibold" fill="#4caf50">
          Actions B
        </text>

        {/* Ligne de séparation */}
        <line x1="0" y1="200" x2="800" y2="200" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
        <text x="400" y="190" textAnchor="middle" className="text-sm font-semibold" fill="#666">
          APRÈS L'OPÉRATION
        </text>

        {/* Société Apporteuse (après) */}
        <rect x="50" y="250" width="150" height="100" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="5" />
        <text x="125" y="280" textAnchor="middle" className="text-sm font-semibold" fill="#1976d2">
          Société A
        </text>
        <text x="125" y="295" textAnchor="middle" className="text-xs" fill="#1976d2">
          Branche Y
        </text>
        <text x="125" y="310" textAnchor="middle" className="text-xs" fill="#1976d2">
          Autres actifs
        </text>
        <text x="125" y="325" textAnchor="middle" className="text-xs font-semibold" fill="#4caf50">
          + Actions B
        </text>

        {/* Société Bénéficiaire (après) */}
        <rect x="300" y="250" width="150" height="100" fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="2" rx="5" />
        <text x="375" y="280" textAnchor="middle" className="text-sm font-semibold" fill="#7b1fa2">
          Société B
        </text>
        <text x="375" y="295" textAnchor="middle" className="text-xs" fill="#7b1fa2">
          Activités existantes
        </text>
        <text x="375" y="310" textAnchor="middle" className="text-xs font-semibold" fill="#ff6f00">
          + Branche X
        </text>
        <text x="375" y="325" textAnchor="middle" className="text-xs" fill="#7b1fa2">
          (reçue en apport)
        </text>

        {/* Commissaire aux apports */}
        <rect x="550" y="120" width="120" height="60" fill="#fff3e0" stroke="#f57c00" strokeWidth="2" rx="5" />
        <text x="610" y="140" textAnchor="middle" className="text-xs font-semibold" fill="#f57c00">
          Commissaire
        </text>
        <text x="610" y="155" textAnchor="middle" className="text-xs" fill="#f57c00">
          aux apports
        </text>
        <text x="610" y="170" textAnchor="middle" className="text-xs" fill="#f57c00">
          (évaluation)
        </text>

        {/* Flèche vers commissaire */}
        <path d="M 450 110 L 530 140" stroke="#f57c00" strokeWidth="2" strokeDasharray="3,3" />

        {/* Définition des marqueurs de flèches */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ff6f00" />
          </marker>
          <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4caf50" />
          </marker>
        </defs>
        </svg>
      </div>
      
      <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded flex-shrink-0"></div>
            <span className="leading-tight">Apport de la branche d'activité</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded flex-shrink-0"></div>
            <span className="leading-tight">Rémunération en actions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded flex-shrink-0"></div>
            <span className="leading-tight">Intervention du commissaire aux apports</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApportPartielSchema;