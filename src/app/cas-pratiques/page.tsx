'use client'

import { useState } from 'react'
import BackToPlanButton from '@/components/content/BackToPlanButton'
import Link from 'next/link'
import { ChevronLeft, Award, FileText, Calculator, Eye, EyeOff, Lightbulb, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PracticalCase {
  id: number
  title: string
  context: string
  question: string
  solution: string
  methodology: string[]
  tips: string[]
}

const practicalCases: PracticalCase[] = [
  {
    id: 1,
    title: "Apport partiel d'actif - Société ALPHA",
    context: "La société ALPHA souhaite apporter sa branche d'activité 'distribution' à la société BETA. Cette branche comprend : un fonds de commerce (valeur comptable : 150 000 €, valeur réelle : 200 000 €), des stocks (80 000 €), des créances clients (45 000 €) et des dettes fournisseurs (30 000 €). Un commissaire aux apports a été désigné.",
    question: "Calculez la valeur de l'apport, déterminez le nombre d'actions à émettre si la valeur nominale est de 10 € par action, et analysez le rôle du commissaire aux apports.",
    solution: "**Calcul de la valeur de l'apport :**\n\n**À la valeur comptable :**\n- Fonds de commerce : 150 000 €\n- Stocks : 80 000 €\n- Créances clients : 45 000 €\n- Dettes fournisseurs : (30 000 €)\n**Total actif net comptable : 245 000 €**\n\n**À la valeur réelle :**\n- Fonds de commerce : 200 000 €\n- Stocks : 80 000 €\n- Créances clients : 45 000 €\n- Dettes fournisseurs : (30 000 €)\n**Total actif net réel : 295 000 €**\n\n**Nombre d'actions à émettre :**\n- Si apport à la valeur comptable : 245 000 € ÷ 10 € = **24 500 actions**\n- Si apport à la valeur réelle : 295 000 € ÷ 10 € = **29 500 actions**\n\n**Rôle du commissaire aux apports :**\n- Évaluation indépendante des actifs apportés\n- Vérification de la valeur des apports (probablement 295 000 €)\n- Protection des intérêts des associés de BETA\n- Rapport obligatoire sur la valeur des apports",
    methodology: [
      "Identifier tous les éléments d'actif et de passif de la branche",
      "Calculer la valeur nette comptable (actifs - passifs)",
      "Calculer la valeur nette réelle si différente",
      "Diviser par la valeur nominale pour obtenir le nombre d'actions",
      "Analyser le rôle du commissaire aux apports"
    ],
    tips: [
      "Attention à bien déduire les dettes dans le calcul de l'actif net",
      "La valeur d'apport peut être différente de la valeur comptable",
      "Vérifier que tous les éléments de la branche sont inclus",
      "Le commissaire aux apports est obligatoire pour les apports en nature"
    ]
  },
  {
    id: 2,
    title: "Scission partielle - Société GAMMA",
    context: "La société GAMMA (capital : 500 000 €, réserves : 300 000 €) décide de scinder partiellement son activité 'recherche et développement' vers une nouvelle société DELTA. Les actifs apportés représentent 40% de la valeur totale de GAMMA. Les actionnaires de GAMMA recevront des actions DELTA proportionnellement à leur participation.",
    question: "Déterminez l'impact sur les capitaux propres de GAMMA et calculez la répartition des actions DELTA si GAMMA a 50 000 actions en circulation.",
    solution: "**Impact sur GAMMA :**\n\nCapitaux propres avant scission : 500 000 € + 300 000 € = 800 000 €\nValeur de la branche scindée : 800 000 € × 40% = 320 000 €\n\n**Capitaux propres après scission :**\n- Capital : 500 000 € (inchangé)\n- Réserves : 300 000 € - 320 000 € = (20 000 €)\n- Titres de participation DELTA : 320 000 €\n**Total : 800 000 € (équilibre maintenu)**\n\n**Répartition des actions DELTA :**\nSi DELTA émet 32 000 actions (valeur nominale 10 €) :\n- Chaque action GAMMA donne droit à : 32 000 ÷ 50 000 = **0,64 action DELTA**\n- Un actionnaire détenant 1 000 actions GAMMA recevra : 1 000 × 0,64 = **640 actions DELTA**",
    methodology: [
      "Calculer la valeur totale des capitaux propres avant scission",
      "Déterminer la valeur de la branche scindée",
      "Ajuster les postes de capitaux propres de la société scindée",
      "Calculer le ratio de répartition des nouvelles actions"
    ],
    tips: [
      "Dans une scission partielle, la société mère continue d'exister",
      "Les actionnaires reçoivent des actions proportionnellement",
      "L'équilibre comptable doit être maintenu"
    ]
  },
  {
    id: 3,
    title: "Régime fiscal - Conditions du 210 B",
    context: "La société EPSILON envisage un apport partiel d'actif à sa filiale ZETA. L'opération génère une plus-value de 150 000 €. EPSILON souhaite bénéficier du régime de faveur de l'article 210 B du CGI.",
    question: "Quelles conditions doivent être respectées et quel sera l'impact fiscal de l'opération ?",
    solution: "**Conditions à respecter pour le régime 210 B :**\n\n**1. Conditions de forme :**\n- Déclaration préalable à l'administration fiscale\n- Dépôt dans les 30 jours suivant l'opération\n- Documentation complète de l'opération\n\n**2. Conditions de fond :**\n- Motif économique valable (restructuration, optimisation)\n- Absence de montage purement fiscal\n- Engagement de conservation des titres reçus (3 ans minimum)\n\n**Impact fiscal avec le régime de faveur :**\n- Plus-value de 150 000 € : **report d'imposition**\n- Pas d'imposition immédiate\n- Imposition différée jusqu'à cession des titres\n- Économie de trésorerie : 150 000 € × 25% = **37 500 €**\n\n**Sans le régime de faveur :**\n- Imposition immédiate : 150 000 € × 25% = **37 500 € d'IS**",
    methodology: [
      "Vérifier l'éligibilité au régime de faveur",
      "S'assurer du respect des conditions de forme et de fond",
      "Calculer l'économie fiscale potentielle",
      "Évaluer les contraintes (engagement de conservation)"
    ],
    tips: [
      "Le régime 210 B n'est pas automatique, il faut en faire la demande",
      "L'engagement de conservation est contraignant mais avantageux",
      "Bien documenter le motif économique de l'opération"
    ]
  },
  {
    id: 4,
    title: "Spin-off - Groupe GAMMA",
    context: "Le groupe GAMMA (holding) détient 100% de trois filiales : GAMMA-Auto (automobile), GAMMA-Tech (technologie) et GAMMA-Immo (immobilier). Les actionnaires du groupe estiment que la diversification nuit à la valorisation (décote du conglomérat). Ils décident de faire un spin-off de GAMMA-Tech. Le groupe GAMMA compte 1 000 000 d'actions en circulation.",
    question: "Décrivez le mécanisme du spin-off et analysez l'impact sur les actionnaires. Quelle est la logique économique de cette opération ?",
    solution: "**Mécanisme du Spin-off :**\n\n**Avant l'opération :**\n- Les actionnaires détiennent 100% de GAMMA (qui détient GAMMA-Auto, GAMMA-Tech, GAMMA-Immo)\n\n**Après l'opération :**\n- Les actionnaires détiennent 100% de GAMMA (qui détient GAMMA-Auto et GAMMA-Immo)\n- Les actionnaires détiennent AUSSI 100% de GAMMA-Tech (distribution gratuite d'actions)\n\n**Distribution :**\n- Chaque actionnaire reçoit gratuitement des actions GAMMA-Tech proportionnellement à sa participation dans GAMMA\n- Exemple : 1 action GAMMA-Tech pour 1 action GAMMA détenue\n\n**Logique économique - Décote du conglomérat :**\n- **Problème :** La valeur boursière du conglomérat < somme des valeurs des activités séparées\n- **Causes :** Manque de transparence, complexité, dilution du focus managérial\n- **Solution :** Séparer les activités pour révéler leur vraie valeur\n- **Objectif :** Éliminer la décote et maximiser la valeur pour les actionnaires",
    methodology: [
      "Identifier les activités à séparer",
      "Analyser la décote du conglomérat",
      "Définir le ratio de distribution des actions",
      "Calculer l'impact sur chaque actionnaire",
      "Évaluer les gains de valeur attendus"
    ],
    tips: [
      "Le spin-off permet de garder le contrôle des deux entités",
      "Opération généralement neutre fiscalement",
      "La décote du conglomérat justifie économiquement l'opération",
      "Les actionnaires peuvent ensuite vendre une des participations s'ils le souhaitent"
    ]
  },
  {
    id: 5,
    title: "Split-up vs Split-off - Société DELTA",
    context: "La société DELTA exerce trois activités distinctes : restauration (40% de la valeur), hôtellerie (35% de la valeur) et loisirs (25% de la valeur). Les dirigeants envisagent soit un Split-up (dissolution-scission), soit un Split-off (OPRA en actions) pour l'activité loisirs. DELTA a 500 000 actions en circulation, valorisées 50 € chacune.",
    question: "Comparez les deux options (Split-up vs Split-off) et analysez l'impact pour les actionnaires dans chaque cas.",
    solution: "**Situation initiale :**\n- Valeur totale DELTA : 500 000 × 50 € = 25 M€\n- Restauration : 10 M€ (40%)\n- Hôtellerie : 8,75 M€ (35%)\n- Loisirs : 6,25 M€ (25%)\n\n**Option 1 - Split-up (Dissolution-scission) :**\n- DELTA disparaît complètement\n- Création de 3 sociétés indépendantes : RESTO, HOTEL, LOISIRS\n- Chaque actionnaire reçoit des actions dans les 3 nouvelles sociétés\n- **Résultat :** 3 participations pour chaque actionnaire\n\n**Option 2 - Split-off (OPRA en actions) pour les loisirs :**\n- DELTA conserve restauration + hôtellerie (18,75 M€)\n- Création de LOISIRS (6,25 M€)\n- **Mécanisme :** Offre publique d'échange\n- Les actionnaires peuvent échanger leurs actions DELTA contre des actions LOISIRS\n- **Résultat :** Certains actionnaires gardent DELTA, d'autres ont LOISIRS\n\n**Comparaison :**\n- **Split-up :** Tous les actionnaires ont les 3 activités\n- **Split-off :** Spécialisation des actionnaires selon leurs préférences\n- **Split-off :** Permet une sortie partielle sans vendre sur le marché",
    methodology: [
      "Évaluer chaque activité séparément",
      "Analyser les objectifs des actionnaires",
      "Comparer les mécanismes de chaque option",
      "Calculer l'impact sur la répartition du capital",
      "Évaluer les avantages/inconvénients de chaque solution"
    ],
    tips: [
      "Le Split-up convient quand toutes les activités ont de la valeur",
      "Le Split-off permet aux actionnaires de choisir leur exposition",
      "Considérer les préférences des actionnaires (diversification vs spécialisation)",
      "Analyser l'impact fiscal de chaque option"
    ]
  },
  {
    id: 6,
    title: "Transformation en holding - Société EPSILON",
    context: "La société EPSILON exerce une activité industrielle (machines-outils) et détient plusieurs participations financières importantes. Les dirigeants envisagent de transformer EPSILON en holding pure en apportant l'activité industrielle à une filiale nouvellement créée (EPSILON-INDUSTRIE). Valeur de l'activité industrielle : 15 M€, participations financières : 8 M€.",
    question: "Analysez cette transformation en holding. Quels sont les avantages et les modalités de cette opération ?",
    solution: "**Mécanisme de transformation :**\n\n**Avant :**\n- EPSILON : activité industrielle (15 M€) + participations (8 M€) = 23 M€\n\n**Après :**\n- EPSILON (holding) : participations (8 M€) + 100% EPSILON-INDUSTRIE (15 M€) = 23 M€\n- EPSILON-INDUSTRIE : activité industrielle (15 M€)\n\n**Modalités :**\n1. Création d'EPSILON-INDUSTRIE (filiale à 100%)\n2. Apport de la branche industrielle à EPSILON-INDUSTRIE\n3. EPSILON reçoit les actions d'EPSILON-INDUSTRIE en rémunération\n\n**Avantages de la transformation :**\n- **Clarification de la structure :** Séparation holding/opérationnel\n- **Flexibilité financière :** Possibilité d'ouvrir le capital d'EPSILON-INDUSTRIE\n- **Optimisation fiscale :** Régime mère-fille pour les dividendes\n- **Gestion spécialisée :** Management dédié à chaque activité\n- **Valorisation :** Meilleure lisibilité pour les investisseurs\n\n**Points d'attention :**\n- Neutralité fiscale sous conditions (art. 210 B)\n- Coûts de structure supplémentaires\n- Complexification juridique",
    methodology: [
      "Identifier les activités à séparer",
      "Évaluer chaque branche d'activité",
      "Définir la structure holding optimale",
      "Analyser les conditions fiscales (210 B)",
      "Calculer les coûts/bénéfices de l'opération"
    ],
    tips: [
      "La transformation en holding facilite les cessions futures",
      "Vérifier les conditions du régime fiscal de faveur",
      "Anticiper les coûts de structure additionnels",
      "Considérer l'impact sur la gouvernance"
    ]
  }
]

export default function CasPratiquesPage() {
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({})
  const [showMethodology, setShowMethodology] = useState<{ [key: number]: boolean }>({})
  const [showTips, setShowTips] = useState<{ [key: number]: boolean }>({})

  const toggleSolution = (caseId: number) => {
    setShowSolution(prev => ({ ...prev, [caseId]: !prev[caseId] }))
  }

  const toggleMethodology = (caseId: number) => {
    setShowMethodology(prev => ({ ...prev, [caseId]: !prev[caseId] }))
  }

  const toggleTips = (caseId: number) => {
    setShowTips(prev => ({ ...prev, [caseId]: !prev[caseId] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <BackToPlanButton />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 sm:p-3 rounded-lg">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {"Cas pratiques"}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {"Exercices concrets avec corrections détaillées"}
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-semibold text-blue-900 mb-3">
              {"Méthodologie générale"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
              <div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">{"1. Analyse du contexte"}</h3>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>{"• Identifier le type d'opération"}</li>
                  <li>{"• Recenser les éléments concernés"}</li>
                  <li>{"• Déterminer les objectifs"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">{"2. Application des règles"}</h3>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>{"• Calculs comptables et fiscaux"}</li>
                  <li>{"• Vérification des conditions"}</li>
                  <li>{"• Optimisation des choix"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {practicalCases.map((practicalCase, index) => (
            <motion.div
              key={practicalCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-full">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {`Cas ${practicalCase.id} : ${practicalCase.title}`}
                    </h2>
                    <div className="bg-gray-100 rounded-lg p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">{"Contexte :"}</h3>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {practicalCase.context}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {"Question :"}
                  </h3>
                  <p className="text-yellow-800 text-xs sm:text-sm">
                    {practicalCase.question}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => toggleMethodology(practicalCase.id)}
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 text-xs sm:text-sm rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Calculator className="w-4 h-4" />
                    <span className="hidden sm:inline">Méthodologie</span>
                    <span className="sm:hidden">Méthodo</span>
                    {showMethodology[practicalCase.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => toggleSolution(practicalCase.id)}
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-100 text-green-700 text-xs sm:text-sm rounded-lg hover:bg-green-200 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {"Solution"}
                    {showSolution[practicalCase.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => toggleTips(practicalCase.id)}
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-orange-100 text-orange-700 text-xs sm:text-sm rounded-lg hover:bg-orange-200 transition-colors"
                  >
                    <Lightbulb className="w-4 h-4" />
                    {"Conseils"}
                    {showTips[practicalCase.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <AnimatePresence>
                {showMethodology[practicalCase.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-b border-gray-200"
                  >
                    <div className="p-4 sm:p-6 bg-blue-50">
                      <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-3">
                        {"Méthodologie de résolution :"}
                      </h3>
                      <ol className="text-blue-800 space-y-2">
                        {practicalCase.methodology.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-semibold flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-xs sm:text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                )}
                
                {showSolution[practicalCase.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-b border-gray-200"
                  >
                    <div className="p-4 sm:p-6 bg-green-50">
                      <h3 className="text-sm sm:text-base font-semibold text-green-900 mb-3">
                        {"Solution détaillée :"}
                      </h3>
                      <div className="text-green-800 prose prose-sm max-w-none">
                        {practicalCase.solution.split('\n').map((line, lineIndex) => (
                          <div key={lineIndex} className="mb-2 text-xs sm:text-sm">
                            {line.startsWith('**') && line.endsWith('**') ? (
                              <strong>{line.slice(2, -2)}</strong>
                            ) : line.startsWith('- ') ? (
                              <div className="ml-4">{line}</div>
                            ) : (
                              <div>{line}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {showTips[practicalCase.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="p-4 sm:p-6 bg-orange-50">
                      <h3 className="text-sm sm:text-base font-semibold text-orange-900 mb-3">
                        {"Conseils et points d'attention :"}
                      </h3>
                      <ul className="text-orange-800 space-y-2">
                        {practicalCase.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <Link 
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Quiz interactif</span>
            <span className="sm:hidden">Quiz</span>
          </Link>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
          >
            <span className="hidden sm:inline">Retour au plan du cours</span>
            <span className="sm:hidden">Plan du cours</span>
          </Link>
        </div>
      </div>
    </div>
  )
}