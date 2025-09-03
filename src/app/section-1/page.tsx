'use client'

import BackToPlanButton from '@/components/content/BackToPlanButton'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, TrendingUp, Building, Users, FileText } from 'lucide-react'
import ApportPartielSchema from '@/components/schemas/ApportPartielSchema'

export default function Section1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <BackToPlanButton />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 sm:p-3 rounded-lg self-start">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {"Section I - Les apports partiels d'actif"}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {"Mécanismes et caractéristiques"}
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              {"1. Définition"}
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-4 sm:mb-6 rounded-r-lg">
              <p className="text-blue-900 font-medium mb-3 text-sm sm:text-base">
                {"L'apport partiel d'actif peut se faire :"}
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-3 sm:p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
                    {"Création d'une nouvelle société"}
                  </h4>
                  <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                    {"Les apports seront rémunérés par la création d'actions de cette société lors de la constitution."}
                  </p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
                    {"Société existante"}
                  </h4>
                  <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                    {"Les apports seront rémunérés par augmentation de capital de cette société qui créera des actions nouvelles."}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Building className="w-5 h-5" />
                {"Résultat de l'opération"}
              </h3>
              <p className="text-green-800">
                {"Dans les deux cas, la société qui apporte les actifs est rémunérée par des actions nouvelles et devient actionnaire de la filiale."}
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"2. Caractéristiques"}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {"Les apports peuvent être différents suivant les cas :"}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-2 sm:mb-3">
                  {"Élément isolé de l'actif"}
                </h3>
                <p className="text-purple-800 mb-2 sm:mb-3 text-sm sm:text-base">
                  {"Il peut s'agir d'un élément isolé de l'actif de l'entreprise :"}
                </p>
                <ul className="text-purple-700 space-y-1 text-xs sm:text-sm">
                  <li>{"• Une immobilisation"}</li>
                  <li>{"• Des titres"}</li>
                  <li>{"• Autres éléments d'actif"}</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-orange-900 mb-2 sm:mb-3">
                  {"Branche d'activité"}
                </h3>
                <p className="text-orange-800 text-xs sm:text-sm leading-relaxed">
                  {"La branche d'activité est l'ensemble des éléments d'actif et de passif d'une division d'une société qui constitue du point de vue de l'organisation une unité économique autonome."}
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5" />
                {"Moyens mnémotechniques"}
              </h3>
              <div className="text-yellow-800 space-y-2">
                <p><strong>{"APA"}</strong> = <strong>{"A"}</strong>pport <strong>{"P"}</strong>artiel {"d'"}<strong>{"A"}</strong>ctif</p>
                <p><strong>{"2 modalités"}</strong> : Création nouvelle société OU Société existante</p>
                <p><strong>{"2 types d'apports"}</strong> : Élément isolé OU Branche {"d'activité"}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ApportPartielSchema />
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                {"3. Évaluation et contrôle"}
              </h3>
              <p className="text-red-800 mb-3">
                {"L'évaluation des apports doit être réalisée par un commissaire aux apports."}
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-800 mb-2">
                  {"Rôle du commissaire aux apports"}
                </h4>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>{"• Évaluation indépendante des actifs apportés"}</li>
                  <li>{"• Vérification de la valeur des apports"}</li>
                  <li>{"• Protection des intérêts des associés"}</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                {"4. Cas particulier : Transformation en holding"}
              </h3>
              <div className="bg-white p-4 rounded-lg border border-indigo-100">
                <p className="text-indigo-800 mb-3">
                  <strong>{"Remarque importante :"}</strong> {"Si la société apporte tous ses actifs à une société bénéficiaire, elle n'aura plus dans son patrimoine que les titres de la société bénéficiaire."}
                </p>
                <p className="text-indigo-700 text-sm">
                  {"Elle devient alors holding de cette société."}
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {"Points clés à retenir"}
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>{"• L'apporteur devient toujours actionnaire de la société bénéficiaire"}</li>
                <li>{"• La rémunération se fait exclusivement par des actions nouvelles"}</li>
                <li>{"• L'opération peut concerner un élément isolé ou une branche complète"}</li>
                <li>{"• La branche d'activité doit constituer une unité économique autonome"}</li>
                <li>{"• L'évaluation par un commissaire aux apports est obligatoire"}</li>
                <li>{"• L'apport de tous les actifs transforme la société en holding"}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <Link 
            href="/introduction"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm sm:text-base"
          >
            <ChevronLeft className="w-4 h-4" />
            {"Introduction"}
          </Link>
          
          <Link 
            href="/section-2"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-sm sm:text-base"
          >
            {"Section II - Les scissions"}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}