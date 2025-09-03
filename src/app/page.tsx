import CourseHeader from '@/components/home/CourseHeader'
import CoursePlan from '@/components/home/CoursePlan'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader />
      <CoursePlan />
    </div>
  )
}
