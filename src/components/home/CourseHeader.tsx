'use client'

import { BookOpen, Clock, Target, Users } from 'lucide-react'

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="bg-white/20 p-3 sm:p-4 rounded-full">
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent px-2">
          {"Finance d'Entreprise"}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 px-2">
          {"Les apports partiels d'actif et restructurations"}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 flex items-center justify-center gap-2">
            <Target className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">{"Niveau DSCG"}</span>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">{"2-3 heures"}</span>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 flex items-center justify-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">{"6 sections"}</span>
          </div>
        </div>
        
        <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed px-2">
          {"Maîtrisez les concepts clés des restructurations d'entreprise, des apports partiels d'actif aux scissions, avec des cas pratiques et des exercices interactifs."}
        </p>
      </div>
    </div>
  )
}