'use client'

import { Target, Rocket, TrendingUp, BarChart3, HelpCircle, Award } from 'lucide-react'
import SectionBlock from './SectionBlock'

export default function CoursePlan() {
  const sections = [
    {
      title: "Introduction",
      description: "Découvrez les concepts fondamentaux des restructurations d'entreprise et leur importance stratégique.",
      href: "/introduction",
      icon: Rocket,
      color: "blue"
    },
    {
      title: "Section I - Les apports partiels d'actif",
      description: "Maîtrisez les mécanismes et caractéristiques des apports partiels d'actif entre sociétés.",
      href: "/section-1",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Section II - Les scissions",
      description: "Comprenez les processus de scission et de transfert de branches d'activité.",
      href: "/section-2",
      icon: BarChart3,
      color: "purple"
    },
    {
      title: "Section III - Aspects comptables et fiscaux",
      description: "Approfondissez les implications comptables et fiscales des restructurations.",
      href: "/section-3",
      icon: Target,
      color: "orange"
    },
    {
      title: "Quiz interactif",
      description: "Testez vos connaissances avec des questions interactives et obtenez un feedback immédiat.",
      href: "/quiz",
      icon: HelpCircle,
      color: "red",
      buttonText: "Commencer le quiz"
    },
    {
      title: "Cas pratiques",
      description: "Mettez en pratique vos connaissances avec des exercices concrets et des corrections détaillées.",
      href: "/cas-pratiques",
      icon: Award,
      color: "violet",
      buttonText: "Voir les exercices"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-3 rounded-full">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          {"Plan du cours"}
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          {"Suivez un parcours structuré pour maîtriser les restructurations d'entreprise étape par étape."}
        </p>
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        {sections.map((section, index) => (
          <SectionBlock
            key={index}
            title={section.title}
            description={section.description}
            href={section.href}
            icon={section.icon}
            color={section.color}
            buttonText={section.buttonText}
          />
        ))}
      </div>
    </div>
  )
}