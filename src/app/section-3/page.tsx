'use client'

import BackToPlanButton from '@/components/content/BackToPlanButton'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Target, Calculator, FileText, TrendingUp } from 'lucide-react'

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <BackToPlanButton />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {"Section III - Aspects comptables et fiscaux"}
              </h1>
              <p className="text-gray-600">
                {"Traitement des restructurations"}
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              {"1. Évaluation des apports"}
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {"Méthodes d'évaluation"}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {"Valeur comptable"}
                  </h4>
                  <p className="text-blue-700 text-sm">
                    {"Valeur nette comptable des éléments apportés selon les règles comptables en vigueur."}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {"Valeur réelle"}
                  </h4>
                  <p className="text-blue-700 text-sm">
                    {"Valeur de marché ou valeur d'expertise des biens apportés."}
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {"2. Traitement comptable"}
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                {"Chez la société apporteuse"}
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">{"Sortie des actifs"}</h4>
                  <p className="text-green-700 text-sm mb-2">{"Décomptabilisation des éléments apportés"}</p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    <div>{"Débit : Compte de titres de participation"}</div>
                    <div>{"Crédit : Comptes d'actifs apportés"}</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">{"Plus ou moins-values"}</h4>
                  <p className="text-green-700 text-sm">{"Constatation des écarts entre valeur d'apport et valeur comptable"}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                {"Chez la société bénéficiaire"}
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-purple-800 mb-2">{"Enregistrement des apports"}</h4>
                  <p className="text-purple-700 text-sm mb-2">{"Comptabilisation des éléments reçus"}</p>
                  <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                    <div>{"Débit : Comptes d'actifs reçus"}</div>
                    <div>{"Crédit : Capital social"}</div>
                    <div>{"Crédit : Prime d'apport (si applicable)"}</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-purple-800 mb-2">{"Augmentation de capital"}</h4>
                  <p className="text-purple-700 text-sm">{"Émission d'actions nouvelles en rémunération des apports"}</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"3. Régime fiscal"}
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                {"Régime de faveur (Article 210 B du CGI)"}
              </h3>
              <p className="text-yellow-800 mb-4">
                {"Sous certaines conditions, les opérations peuvent bénéficier d'un régime fiscal de faveur :"}
              </p>
              <ul className="text-yellow-700 space-y-2">
                <li>{"• Report d'imposition des plus-values"}</li>
                <li>{"• Neutralité fiscale de l'opération"}</li>
                <li>{"• Conditions de détention minimale"}</li>
                <li>{"• Engagement de conservation des titres"}</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                {"Conditions du régime de faveur"}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-red-100">
                  <h4 className="font-semibold text-red-800 mb-2">{"Conditions de forme"}</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>{"• Déclaration préalable"}</li>
                    <li>{"• Respect des délais"}</li>
                    <li>{"• Documentation complète"}</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-100">
                  <h4 className="font-semibold text-red-800 mb-2">{"Conditions de fond"}</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>{"• Motif économique valable"}</li>
                    <li>{"• Absence de montage artificiel"}</li>
                    <li>{"• Engagement de conservation"}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {"Moyens mnémotechniques"}
              </h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>{"COMPTABLE"}</strong> = <strong>{"C"}</strong>onstatation des <strong>{"O"}</strong>pérations, <strong>{"M"}</strong>ouvements de <strong>{"P"}</strong>articipations, <strong>{"T"}</strong>itres <strong>{"A"}</strong>ugmentés, <strong>{"B"}</strong>ilan <strong>{"L"}</strong>ibéré, <strong>{"E"}</strong>nregistrements</p>
                <p><strong>{"FISCAL"}</strong> = <strong>{"F"}</strong>aveur sous conditions, <strong>{"I"}</strong>mposition reportée, <strong>{"S"}</strong>ous conditions, <strong>{"C"}</strong>onservation requise, <strong>{"A"}</strong>rticle 210B, <strong>{"L"}</strong>égislation spécifique</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                {"Points clés à retenir"}
              </h3>
              <ul className="text-indigo-800 space-y-2">
                <li>{"• L'évaluation peut se faire à la valeur comptable ou réelle"}</li>
                <li>{"• Le traitement comptable diffère selon la position (apporteur/bénéficiaire)"}</li>
                <li>{"• Le régime fiscal de faveur nécessite le respect de conditions strictes"}</li>
                <li>{"• La documentation et les déclarations sont essentielles"}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            href="/section-2"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
            {"Section II - Les scissions"}
          </Link>
          
          <Link 
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200"
          >
            {"Quiz interactif"}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}