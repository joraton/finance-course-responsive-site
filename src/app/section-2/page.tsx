'use client'

import BackToPlanButton from '@/components/content/BackToPlanButton'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, BarChart3, Split, Building2 } from 'lucide-react'
import ScissionSchema from '@/components/schemas/ScissionSchema'

export default function Section2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <BackToPlanButton />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {"Section II - Les scissions"}
              </h1>
              <p className="text-gray-600">
                {"Transfert de branches d'activité"}
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Split className="w-6 h-6" />
              {"1. Définition et principe"}
            </h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-lg">
              <p className="text-purple-900 font-medium mb-3">
                {"La scission consiste en un transfert de branche d'activité par création de sociétés nouvelles."}
              </p>
              <p className="text-purple-800">
                {"Contrairement à l'apport partiel d'actif, la scission implique la création de nouvelles entités juridiques pour accueillir les branches d'activité transférées."}
              </p>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                {"Caractéristiques distinctives de la scission"}
              </h3>
              <div className="space-y-3 text-amber-800">
                <p><strong>{"1. Porte toujours sur une branche d'activité"}</strong> (jamais sur un élément isolé)</p>
                <p><strong>{"2. Les actionnaires de la société mère deviennent directement actionnaires de la société bénéficiaire"}</strong> (contrairement à l&apos;apport partiel où c&apos;est la société qui devient actionnaire)</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"2. Motivations des opérations de scissions"}
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                {"Problème de la décote du conglomérat"}
              </h3>
              <p className="text-red-800 mb-4">
                {"Les scissions sont motivées par des questions de communication lorsque le titre connaît une mauvaise performance (si Va+b sur le marché < Va +Vb)."}
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-red-100 mb-4">
                <h4 className="font-semibold text-red-800 mb-2">
                  {"Théorie de la valeur"}
                </h4>
                <p className="text-red-700 text-sm mb-2">
                  {"En théorie, la valeur de marché de l'entreprise correspond à la somme des valeurs de ses filiales et de sa propre valeur."}
                </p>
                <p className="text-red-700 text-sm">
                  {"Cependant, lorsque les activités d'une société cotée sont variées, le marché a du mal à valoriser cette entreprise en raison du défaut d'informations sur chaque branche."}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-800 mb-2">
                  {"Causes de la décote"}
                </h4>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>{"• Les investisseurs manquent d'indicateurs différenciés sur chaque activité"}</li>
                  <li>{"• Mauvaise allocation du capital entre activités rentables et moins rentables"}</li>
                  <li>{"• Coûts de fonctionnement élevés"}</li>
                  <li>{"• Démotivation des managers de filiales jugées moins stratégiques"}</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"3. Les différentes formes de scission"}
            </h2>
            
            <div className="space-y-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  {"Scission-distribution (Spin-off)"}
                </h3>
                <p className="text-blue-800 mb-3">
                  {"La société-mère se sépare d'une filiale existante ou nouvellement créée et distribue les actions de cette filiale à ses actionnaires dans les proportions de détention de la société-mère."}
                </p>
                <div className="bg-white p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">{"Intérêts :"}</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>{"• Meilleure gestion de l'entité de manière indépendante"}</li>
                    <li>{"• Meilleure valorisation des deux sociétés devenues indépendantes"}</li>
                    <li>{"• Enrichissement des actionnaires"}</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <Split className="w-5 h-5" />
                  {"Scission-dissolution (Split-up ou Demerger)"}
                </h3>
                <p className="text-green-800 mb-3">
                  {"La scission entraîne la disparition de la société existante qui se divise en plusieurs entités. Les actionnaires de la société dissoute sont rémunérés par des actions des nouvelles sociétés créées."}
                </p>
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">{"Objectifs :"}</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>{"• Meilleure gestion de l'entreprise devenue indépendante"}</li>
                    <li>{"• Meilleure valorisation des sociétés devenues indépendantes"}</li>
                    <li>{"• Enrichissement des actionnaires"}</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  {"OPRA en actions (Split-off)"}
                </h3>
                <p className="text-purple-800 mb-3">
                  {"Le partage du patrimoine s'accompagne d'une division du groupe d'actionnaires. La société mère offre la possibilité à ses actionnaires d'échanger tout ou partie de leurs actions contre celles de la filiale."}
                </p>
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-purple-800 mb-2">{"Mécanisme :"}</h4>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>{"• Offre publique de rachat d'actions payée en actions"}</li>
                    <li>{"• Les actions apportées sont annulées par la société-mère"}</li>
                    <li>{"• Création de deux groupes d'actionnaires distincts"}</li>
                    <li>{"• Objectif : transmission de patrimoine"}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Schémas explicatifs */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ScissionSchema />
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"4. Mécanisme général de la scission"}
            </h2>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {"Étapes de l'opération"}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {"1"}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{"Évaluation des branches"}</h4>
                    <p className="text-gray-600 text-sm">{"Détermination de la valeur des actifs et passifs à transférer"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {"2"}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{"Création des sociétés nouvelles"}</h4>
                    <p className="text-gray-600 text-sm">{"Constitution des entités qui recevront les branches"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {"3"}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{"Transfert des éléments"}</h4>
                    <p className="text-gray-600 text-sm">{"Apport des actifs et passifs aux nouvelles sociétés"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {"4"}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{"Attribution des titres"}</h4>
                    <p className="text-gray-600 text-sm">{"Remise des actions des nouvelles sociétés aux associés"}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {"5. Différences avec l'apport partiel d'actif"}
            </h2>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">
                {"Tableau comparatif"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-orange-200">
                      <th className="text-left py-2 text-orange-900">{"Critère"}</th>
                      <th className="text-left py-2 text-orange-900">{"Apport partiel"}</th>
                      <th className="text-left py-2 text-orange-900">{"Scission"}</th>
                    </tr>
                  </thead>
                  <tbody className="text-orange-800">
                    <tr className="border-b border-orange-100">
                      <td className="py-2 font-medium">{"Société bénéficiaire"}</td>
                      <td className="py-2">{"Existante ou nouvelle"}</td>
                      <td className="py-2">{"Toujours nouvelle"}</td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="py-2 font-medium">{"Rémunération"}</td>
                      <td className="py-2">{"À la société apporteuse"}</td>
                      <td className="py-2">{"Aux associés directement"}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">{"Société d'origine"}</td>
                      <td className="py-2">{"Subsiste toujours"}</td>
                      <td className="py-2">{"Peut disparaître"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                {"Moyens mnémotechniques"}
              </h3>
              <div className="text-yellow-800 space-y-2">
                <p><strong>{"SCISSION"}</strong> = <strong>{"S"}</strong>ociétés <strong>{"C"}</strong>réées pour <strong>{"I"}</strong>ntégrer des <strong>{"S"}</strong>egments {"d'activité"} <strong>{"S"}</strong>éparés par <strong>{"I"}</strong>nitiative de <strong>{"O"}</strong>rganisation <strong>{"N"}</strong>ouvelle</p>
                <p><strong>{"3 types de scissions"}</strong> :</p>
                <ul className="ml-4 space-y-1">
                  <li><strong>{"Spin-off"}</strong> = Distribution des actions aux actionnaires</li>
                  <li><strong>{"Split-up"}</strong> = Dissolution complète de la société mère</li>
                  <li><strong>{"Split-off"}</strong> = Échange d&apos;actions (OPRA)</li>
                </ul>
                <p><strong>{"Décote du conglomérat"}</strong> : Plus d&apos;activités = Plus de décote</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            href="/section-1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
            {"Section I - Apports partiels"}
          </Link>
          
          <Link 
            href="/section-3"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
          >
            {"Section III - Aspects comptables"}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}