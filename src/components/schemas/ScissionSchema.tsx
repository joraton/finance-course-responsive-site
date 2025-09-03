import React, { useState } from 'react';

const ScissionSchema: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'spinoff' | 'splitup' | 'splitoff'>('spinoff');

  const renderSpinoffSchema = () => (
    <svg viewBox="0 0 800 500" className="w-full h-auto">
      {/* Avant */}
      <text x="400" y="30" textAnchor="middle" className="text-lg font-bold" fill="#333">
        SPIN-OFF
      </text>
      
      {/* Actionnaires avant */}
      <rect x="50" y="60" width="120" height="60" fill="#e8f5e8" stroke="#4caf50" strokeWidth="2" rx="5" />
      <text x="110" y="85" textAnchor="middle" className="text-sm font-semibold" fill="#4caf50">
        Actionnaires
      </text>
      <text x="110" y="100" textAnchor="middle" className="text-xs" fill="#4caf50">
        100%
      </text>

      {/* Holding avant */}
      <rect x="300" y="60" width="200" height="80" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="5" />
      <text x="400" y="85" textAnchor="middle" className="text-sm font-semibold" fill="#1976d2">
        HOLDING
      </text>
      <text x="350" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Filiale A
      </text>
      <text x="400" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Filiale B
      </text>
      <text x="450" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Filiale C
      </text>
      <text x="400" y="120" textAnchor="middle" className="text-xs" fill="#1976d2">
        (100% chacune)
      </text>

      {/* Flèche de participation avant */}
      <path d="M 170 90 L 280 90" stroke="#4caf50" strokeWidth="2" markerEnd="url(#arrow1)" />
      <text x="225" y="85" textAnchor="middle" className="text-xs" fill="#4caf50">
        100%
      </text>

      {/* Ligne de séparation */}
      <line x1="0" y1="200" x2="800" y2="200" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
      <text x="400" y="190" textAnchor="middle" className="text-sm font-semibold" fill="#666">
        APRÈS SPIN-OFF DE LA FILIALE B
      </text>

      {/* Actionnaires après */}
      <rect x="50" y="240" width="120" height="80" fill="#e8f5e8" stroke="#4caf50" strokeWidth="2" rx="5" />
      <text x="110" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#4caf50">
        Actionnaires
      </text>
      <text x="110" y="280" textAnchor="middle" className="text-xs" fill="#4caf50">
        100% Holding
      </text>
      <text x="110" y="295" textAnchor="middle" className="text-xs font-semibold" fill="#ff6f00">
        + 100% Filiale B
      </text>
      <text x="110" y="310" textAnchor="middle" className="text-xs" fill="#ff6f00">
        (distribution gratuite)
      </text>

      {/* Holding après */}
      <rect x="250" y="240" width="150" height="60" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="5" />
      <text x="325" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#1976d2">
        HOLDING
      </text>
      <text x="300" y="285" textAnchor="middle" className="text-xs" fill="#1976d2">
        Filiale A
      </text>
      <text x="350" y="285" textAnchor="middle" className="text-xs" fill="#1976d2">
        Filiale C
      </text>

      {/* Filiale B indépendante */}
      <rect x="450" y="240" width="120" height="60" fill="#fff3e0" stroke="#ff6f00" strokeWidth="2" rx="5" />
      <text x="510" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#ff6f00">
        FILIALE B
      </text>
      <text x="510" y="280" textAnchor="middle" className="text-xs" fill="#ff6f00">
        (indépendante)
      </text>

      {/* Flèches après */}
      <path d="M 170 270 L 230 270" stroke="#4caf50" strokeWidth="2" markerEnd="url(#arrow1)" />
      <path d="M 170 290 L 430 270" stroke="#ff6f00" strokeWidth="2" markerEnd="url(#arrow2)" />

      {/* Avantage */}
      <rect x="600" y="350" width="180" height="100" fill="#f1f8e9" stroke="#689f38" strokeWidth="2" rx="5" />
      <text x="690" y="375" textAnchor="middle" className="text-sm font-semibold" fill="#689f38">
        Avantages
      </text>
      <text x="690" y="395" textAnchor="middle" className="text-xs" fill="#689f38">
        • Élimination décote
      </text>
      <text x="690" y="410" textAnchor="middle" className="text-xs" fill="#689f38">
        • Spécialisation
      </text>
      <text x="690" y="425" textAnchor="middle" className="text-xs" fill="#689f38">
        • Contrôle conservé
      </text>
      <text x="690" y="440" textAnchor="middle" className="text-xs" fill="#689f38">
        • Flexibilité future
      </text>

      <defs>
        <marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#4caf50" />
        </marker>
        <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#ff6f00" />
        </marker>
      </defs>
    </svg>
  );

  const renderSplitupSchema = () => (
    <svg viewBox="0 0 800 500" className="w-full h-auto">
      {/* Titre */}
      <text x="400" y="30" textAnchor="middle" className="text-lg font-bold" fill="#333">
        SPLIT-UP (Dissolution-Scission)
      </text>
      
      {/* Actionnaires avant */}
      <rect x="50" y="60" width="120" height="60" fill="#e8f5e8" stroke="#4caf50" strokeWidth="2" rx="5" />
      <text x="110" y="85" textAnchor="middle" className="text-sm font-semibold" fill="#4caf50">
        Actionnaires
      </text>
      <text x="110" y="100" textAnchor="middle" className="text-xs" fill="#4caf50">
        100%
      </text>

      {/* Société avant */}
      <rect x="300" y="60" width="200" height="80" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="5" />
      <text x="400" y="85" textAnchor="middle" className="text-sm font-semibold" fill="#1976d2">
        SOCIÉTÉ ABC
      </text>
      <text x="350" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Activité A
      </text>
      <text x="400" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Activité B
      </text>
      <text x="450" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Activité C
      </text>

      {/* Flèche avant */}
      <path d="M 170 90 L 280 90" stroke="#4caf50" strokeWidth="2" markerEnd="url(#arrow1)" />

      {/* Ligne de séparation */}
      <line x1="0" y1="200" x2="800" y2="200" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
      <text x="400" y="190" textAnchor="middle" className="text-sm font-semibold" fill="#666">
        APRÈS SPLIT-UP (ABC DISPARAÎT)
      </text>

      {/* Actionnaires après */}
      <rect x="50" y="240" width="120" height="100" fill="#e8f5e8" stroke="#4caf50" strokeWidth="2" rx="5" />
      <text x="110" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#4caf50">
        Actionnaires
      </text>
      <text x="110" y="285" textAnchor="middle" className="text-xs" fill="#4caf50">
        100% Société A
      </text>
      <text x="110" y="300" textAnchor="middle" className="text-xs" fill="#4caf50">
        100% Société B
      </text>
      <text x="110" y="315" textAnchor="middle" className="text-xs" fill="#4caf50">
        100% Société C
      </text>
      <text x="110" y="330" textAnchor="middle" className="text-xs" fill="#666">
        (3 participations)
      </text>

      {/* Trois sociétés après */}
      <rect x="250" y="240" width="100" height="60" fill="#ffebee" stroke="#d32f2f" strokeWidth="2" rx="5" />
      <text x="300" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#d32f2f">
        SOCIÉTÉ A
      </text>
      <text x="300" y="285" textAnchor="middle" className="text-xs" fill="#d32f2f">
        Activité A
      </text>

      <rect x="370" y="240" width="100" height="60" fill="#e8f5e8" stroke="#388e3c" strokeWidth="2" rx="5" />
      <text x="420" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#388e3c">
        SOCIÉTÉ B
      </text>
      <text x="420" y="285" textAnchor="middle" className="text-xs" fill="#388e3c">
        Activité B
      </text>

      <rect x="490" y="240" width="100" height="60" fill="#fff3e0" stroke="#f57c00" strokeWidth="2" rx="5" />
      <text x="540" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#f57c00">
        SOCIÉTÉ C
      </text>
      <text x="540" y="285" textAnchor="middle" className="text-xs" fill="#f57c00">
        Activité C
      </text>

      {/* Flèches après */}
      <path d="M 170 270 L 230 270" stroke="#d32f2f" strokeWidth="2" markerEnd="url(#arrow3)" />
      <path d="M 170 280 L 350 270" stroke="#388e3c" strokeWidth="2" markerEnd="url(#arrow4)" />
      <path d="M 170 290 L 470 270" stroke="#f57c00" strokeWidth="2" markerEnd="url(#arrow5)" />

      {/* Caractéristiques */}
      <rect x="600" y="350" width="180" height="120" fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="2" rx="5" />
      <text x="690" y="375" textAnchor="middle" className="text-sm font-semibold" fill="#7b1fa2">
        Caractéristiques
      </text>
      <text x="690" y="395" textAnchor="middle" className="text-xs" fill="#7b1fa2">
        • Société mère disparaît
      </text>
      <text x="690" y="410" textAnchor="middle" className="text-xs" fill="#7b1fa2">
        • 3 sociétés indépendantes
      </text>
      <text x="690" y="425" textAnchor="middle" className="text-xs" fill="#7b1fa2">
        • Tous les actionnaires
      </text>
      <text x="690" y="440" textAnchor="middle" className="text-xs" fill="#7b1fa2">
        ont les 3 activités
      </text>
      <text x="690" y="455" textAnchor="middle" className="text-xs" fill="#7b1fa2">
        • Spécialisation totale
      </text>

      <defs>
        <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#d32f2f" />
        </marker>
        <marker id="arrow4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#388e3c" />
        </marker>
        <marker id="arrow5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f57c00" />
        </marker>
      </defs>
    </svg>
  );

  const renderSplitoffSchema = () => (
    <svg viewBox="0 0 800 500" className="w-full h-auto">
      {/* Titre */}
      <text x="400" y="30" textAnchor="middle" className="text-lg font-bold" fill="#333">
        SPLIT-OFF (OPRA en actions)
      </text>
      
      {/* Actionnaires avant */}
      <rect x="50" y="60" width="120" height="80" fill="#e8f5e8" stroke="#4caf50" strokeWidth="2" rx="5" />
      <text x="110" y="85" textAnchor="middle" className="text-sm font-semibold" fill="#4caf50">
        Actionnaires
      </text>
      <text x="110" y="100" textAnchor="middle" className="text-xs" fill="#4caf50">
        Groupe 1: 60%
      </text>
      <text x="110" y="115" textAnchor="middle" className="text-xs" fill="#4caf50">
        Groupe 2: 40%
      </text>
      <text x="110" y="130" textAnchor="middle" className="text-xs" fill="#666">
        (préférences différentes)
      </text>

      {/* Société avant */}
      <rect x="300" y="60" width="200" height="80" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="5" />
      <text x="400" y="85" textAnchor="middle" className="text-sm font-semibold" fill="#1976d2">
        SOCIÉTÉ XY
      </text>
      <text x="350" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Activité X
      </text>
      <text x="450" y="105" textAnchor="middle" className="text-xs" fill="#1976d2">
        Activité Y
      </text>
      <text x="400" y="125" textAnchor="middle" className="text-xs" fill="#1976d2">
        (à séparer)
      </text>

      {/* Flèche avant */}
      <path d="M 170 100 L 280 100" stroke="#4caf50" strokeWidth="2" markerEnd="url(#arrow1)" />

      {/* OPRA */}
      <rect x="550" y="80" width="150" height="40" fill="#fff3e0" stroke="#ff6f00" strokeWidth="2" rx="5" />
      <text x="625" y="105" textAnchor="middle" className="text-sm font-semibold" fill="#ff6f00">
        OPRA en actions
      </text>

      {/* Ligne de séparation */}
      <line x1="0" y1="200" x2="800" y2="200" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
      <text x="400" y="190" textAnchor="middle" className="text-sm font-semibold" fill="#666">
        APRÈS SPLIT-OFF DE L&apos;ACTIVITÉ Y
      </text>

      {/* Groupe 1 après */}
      <rect x="50" y="240" width="120" height="60" fill="#e8f5e8" stroke="#4caf50" strokeWidth="2" rx="5" />
      <text x="110" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#4caf50">
        Groupe 1
      </text>
      <text x="110" y="280" textAnchor="middle" className="text-xs" fill="#4caf50">
        100% Société X
      </text>
      <text x="110" y="295" textAnchor="middle" className="text-xs" fill="#666">
        (garde activité X)
      </text>

      {/* Groupe 2 après */}
      <rect x="50" y="320" width="120" height="60" fill="#ffebee" stroke="#d32f2f" strokeWidth="2" rx="5" />
      <text x="110" y="345" textAnchor="middle" className="text-sm font-semibold" fill="#d32f2f">
        Groupe 2
      </text>
      <text x="110" y="360" textAnchor="middle" className="text-xs" fill="#d32f2f">
        100% Société Y
      </text>
      <text x="110" y="375" textAnchor="middle" className="text-xs" fill="#666">
        (échange actions)
      </text>

      {/* Société X */}
      <rect x="250" y="240" width="120" height="60" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="5" />
      <text x="310" y="265" textAnchor="middle" className="text-sm font-semibold" fill="#1976d2">
        SOCIÉTÉ X
      </text>
      <text x="310" y="285" textAnchor="middle" className="text-xs" fill="#1976d2">
        Activité X
      </text>

      {/* Société Y */}
      <rect x="250" y="320" width="120" height="60" fill="#fff3e0" stroke="#ff6f00" strokeWidth="2" rx="5" />
      <text x="310" y="345" textAnchor="middle" className="text-sm font-semibold" fill="#ff6f00">
        SOCIÉTÉ Y
      </text>
      <text x="310" y="365" textAnchor="middle" className="text-xs" fill="#ff6f00">
        Activité Y
      </text>

      {/* Flèches après */}
      <path d="M 170 270 L 230 270" stroke="#4caf50" strokeWidth="2" markerEnd="url(#arrow1)" />
      <path d="M 170 350 L 230 350" stroke="#d32f2f" strokeWidth="2" markerEnd="url(#arrow6)" />

      {/* Avantages */}
      <rect x="450" y="350" width="180" height="120" fill="#f1f8e9" stroke="#689f38" strokeWidth="2" rx="5" />
      <text x="540" y="375" textAnchor="middle" className="text-sm font-semibold" fill="#689f38">
        Avantages
      </text>
      <text x="540" y="395" textAnchor="middle" className="text-xs" fill="#689f38">
        • Spécialisation par choix
      </text>
      <text x="540" y="410" textAnchor="middle" className="text-xs" fill="#689f38">
        • Sortie sans vente
      </text>
      <text x="540" y="425" textAnchor="middle" className="text-xs" fill="#689f38">
        • Flexibilité actionnaires
      </text>
      <text x="540" y="440" textAnchor="middle" className="text-xs" fill="#689f38">
        • Optimisation fiscale
      </text>
      <text x="540" y="455" textAnchor="middle" className="text-xs" fill="#689f38">
        • Réduction complexité
      </text>

      <defs>
        <marker id="arrow6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#d32f2f" />
        </marker>
      </defs>
    </svg>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
        Schémas : Les différentes formes de scission
      </h3>
      
      {/* Sélecteur de type */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-lg p-1 flex gap-1">
          <button
            onClick={() => setSelectedType('spinoff')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              selectedType === 'spinoff'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Spin-off
          </button>
          <button
            onClick={() => setSelectedType('splitup')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              selectedType === 'splitup'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Split-up
          </button>
          <button
            onClick={() => setSelectedType('splitoff')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              selectedType === 'splitoff'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Split-off
          </button>
        </div>
      </div>

      {/* Schéma */}
      <div className="border border-gray-300 rounded-lg bg-white p-4">
        {selectedType === 'spinoff' && renderSpinoffSchema()}
        {selectedType === 'splitup' && renderSplitupSchema()}
        {selectedType === 'splitoff' && renderSplitoffSchema()}
      </div>

      {/* Légende */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-3">Comparaison rapide :</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded border">
            <h5 className="font-semibold text-blue-600 mb-2">Spin-off</h5>
            <ul className="text-gray-600 space-y-1">
              <li>• Société mère conservée</li>
              <li>• Distribution gratuite d&apos;actions</li>
              <li>• Tous gardent les 2 entités</li>
              <li>• Élimination décote conglomérat</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border">
            <h5 className="font-semibold text-purple-600 mb-2">Split-up</h5>
            <ul className="text-gray-600 space-y-1">
              <li>• Société mère disparaît</li>
              <li>• Création de plusieurs sociétés</li>
              <li>• Tous ont toutes les activités</li>
              <li>• Spécialisation complète</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border">
            <h5 className="font-semibold text-orange-600 mb-2">Split-off</h5>
            <ul className="text-gray-600 space-y-1">
              <li>• Offre publique d&apos;échange</li>
              <li>• Choix des actionnaires</li>
              <li>• Spécialisation par préférence</li>
              <li>• Sortie sans vente sur marché</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScissionSchema;