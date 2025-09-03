'use client'

import BackToPlanButton from '@/components/content/BackToPlanButton'
import Link from 'next/link'
import { ChevronRight, BookOpen, Target, TrendingUp } from 'lucide-react'

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <BackToPlanButton />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {"Introduction"}
              </h1>
              <p className="text-gray-600">
                {"Les restructurations d'entreprise"}
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Target className="w-5 h-5" />
                {"Objectifs d'apprentissage"}
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li>{"• Comprendre les enjeux des restructurations d'entreprise"}</li>
                <li>{"• Distinguer les différents types de restructurations"}</li>
                <li>{"• Maîtriser les concepts d'apports partiels d'actif"}</li>
                <li>{"• Appréhender les mécanismes de scission"}</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"Contexte des restructurations"}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {"Les entreprises peuvent procéder à des restructurations, des cessions d'actifs, ou de branche. Ces opérations s'inscrivent dans une logique de réorganisation stratégique, d'optimisation fiscale ou de recentrage sur le cœur de métier."}
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                {"Types de restructurations étudiées"}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {"Apports partiels d'actif"}
                  </h4>
                  <p className="text-green-700 text-sm">
                    {"Transfert d'éléments d'actif à une autre société du groupe"}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {"Scissions"}
                  </h4>
                  <p className="text-green-700 text-sm">
                    {"Transfert de branche d'activité par création de sociétés nouvelles"}
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"Enjeux stratégiques"}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {"Ces opérations permettent aux entreprises de :"}
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>{"Optimiser leur structure organisationnelle"}</li>
              <li>{"Bénéficier d'avantages fiscaux"}</li>
              <li>{"Faciliter les cessions d'activités"}</li>
              <li>{"Améliorer la lisibilité financière"}</li>
            </ul>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {"Point clé à retenir"}
              </h3>
              <p className="text-yellow-800">
                {"Les restructurations d'entreprise sont des opérations complexes qui nécessitent une approche juridique, comptable et fiscale intégrée pour optimiser leurs effets."}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Link 
            href="/section-1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
          >
            {"Section I - Apports partiels d'actif"}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}