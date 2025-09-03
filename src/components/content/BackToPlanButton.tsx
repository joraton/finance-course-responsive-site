'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackToPlanButton() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
    >
      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="hidden xs:inline">{"Retour au plan du cours"}</span>
      <span className="xs:hidden">{"Retour"}</span>
    </Link>
  )
}