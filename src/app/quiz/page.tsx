'use client'

import { useState } from 'react'
import BackToPlanButton from '@/components/content/BackToPlanButton'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Brain, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un apport partiel d'actif ?",
    options: [
      "Une transmission universelle de patrimoine",
      "Une opération par laquelle une société apporte une partie de ses actifs à une autre société",
      "Une fusion entre deux sociétés",
      "Une liquidation partielle d'entreprise"
    ],
    correctAnswer: 1,
    explanation: "L'apport partiel d'actif est une opération par laquelle une société (apporteuse) transmet une partie de ses actifs et passifs à une autre société (bénéficiaire) en échange de titres."
  },
  {
    id: 2,
    question: "Quelle est la principale différence entre une scission totale et une scission partielle ?",
    options: [
      "Le nombre de sociétés bénéficiaires",
      "La scission totale entraîne la dissolution de la société scindée",
      "Le montant des actifs transmis",
      "Le régime fiscal applicable"
    ],
    correctAnswer: 1,
    explanation: "Dans une scission totale, la société scindée disparaît et transmet l'intégralité de son patrimoine. Dans une scission partielle, elle continue d'exister après avoir transmis une partie de ses actifs."
  },
  {
    id: 3,
    question: "Quel article du Code Général des Impôts régit le régime fiscal de faveur ?",
    options: [
      "Article 210 A",
      "Article 210 B",
      "Article 210 C",
      "Article 211"
    ],
    correctAnswer: 1,
    explanation: "L'article 210 B du CGI prévoit le régime fiscal de faveur pour les opérations de restructuration, permettant notamment le report d'imposition des plus-values."
  },
  {
    id: 4,
    question: "Que signifie l'acronyme COMPTABLE dans le contexte des restructurations ?",
    options: [
      "Contrôle, Opérations, Mouvements, Participations, Titres, Augmentés, Bilan, Libéré, Enregistrements",
      "Constatation, Opérations, Mouvements, Participations, Titres, Augmentés, Bilan, Libéré, Enregistrements",
      "Calcul, Opérations, Mouvements, Participations, Titres, Augmentés, Bilan, Libéré, Enregistrements",
      "Certification, Opérations, Mouvements, Participations, Titres, Augmentés, Bilan, Libéré, Enregistrements"
    ],
    correctAnswer: 1,
    explanation: "COMPTABLE = Constatation des Opérations, Mouvements de Participations, Titres Augmentés, Bilan Libéré, Enregistrements. Ce moyen mnémotechnique aide à retenir les aspects comptables des restructurations."
  },
  {
    id: 5,
    question: "Quelles sont les conditions principales du régime fiscal de faveur ?",
    options: [
      "Déclaration préalable uniquement",
      "Motif économique valable et engagement de conservation",
      "Autorisation administrative préalable",
      "Montant minimum d'apport"
    ],
    correctAnswer: 1,
    explanation: "Le régime de faveur nécessite un motif économique valable, l'absence de montage artificiel, et un engagement de conservation des titres reçus."
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    setShowExplanation(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
    } else {
      calculateScore()
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setShowExplanation(false)
    setScore(0)
  }

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "Excellent ! Vous maîtrisez parfaitement le sujet."
    if (percentage >= 60) return "Bien ! Quelques révisions vous permettront d'atteindre l'excellence."
    return "Il est recommandé de revoir les sections du cours avant de continuer."
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <BackToPlanButton />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-6">
              <Trophy className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 ${getScoreColor()}`} />
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {"Quiz terminé !"}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {"Voici vos résultats"}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6">
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-lg sm:text-xl font-semibold mb-2 ${getScoreColor()}`}>
                {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                {getScoreMessage()}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Recommencer le quiz</span>
                <span className="sm:hidden">Recommencer</span>
              </button>
              
              <Link 
                href="/cas-pratiques"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
              >
                <span className="hidden sm:inline">Cas pratiques</span>
                <span className="sm:hidden">Cas pratiques</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <BackToPlanButton />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 sm:p-3 rounded-lg">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {"Quiz interactif"}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {"Testez vos connaissances sur les restructurations"}
              </p>
            </div>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                {`Question ${currentQuestion + 1} sur ${questions.length}`}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index
                  const isCorrect = index === questions[currentQuestion].correctAnswer
                  
                  return (
                    <motion.button
                      key={index}
                      onClick={() => !showExplanation && handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                        showExplanation
                          ? isCorrect
                            ? 'border-green-500 bg-green-50'
                            : isSelected
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 bg-gray-50'
                          : isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                      whileHover={!showExplanation ? { scale: 1.02 } : {}}
                      whileTap={!showExplanation ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base text-gray-900">{option}</span>
                        {showExplanation && (
                          <div className="flex-shrink-0 ml-2">
                            {isCorrect && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />}
                            {!isCorrect && isSelected && <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />}
                          </div>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
              
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2">
                    {"Explication :"}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-800">
                    {questions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
            <Link 
              href="/section-3"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Section III</span>
              <span className="sm:hidden">Section III</span>
            </Link>
            
            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                <span className="hidden sm:inline">{currentQuestion < questions.length - 1 ? "Question suivante" : "Voir les résultats"}</span>
                <span className="sm:hidden">{currentQuestion < questions.length - 1 ? "Suivante" : "Résultats"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}