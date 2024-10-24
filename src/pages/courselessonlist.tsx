import React from "react"
import { HeroLesson } from "@/components/CourseLessonList/HeroLesson"
import { Lesson } from "@/components/CourseLessonList/Lesson"
export const CourseLessonList = () => {
     return(
          <div className="mx-16 my-14">
               <HeroLesson />
               <div className="mt-6 flex flex-row justify-between gap-9">
                    <Lesson />
               </div>
          </div>
     )
}

export default CourseLessonList