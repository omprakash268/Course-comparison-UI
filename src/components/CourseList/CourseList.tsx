import { COURSE_DATA } from "../../utils/course.constant"
import { ICourseDetails } from "../../utils/course.interface"
import { CourseCard } from "../CourseCard/CourseCard"


export const CourseList = () => {
  return (
    <div className="flex items-center justify-center p-2 flex-wrap px-[6rem]">
          
          {COURSE_DATA.map((card:ICourseDetails)=>{
            return <CourseCard cardData={card} />
          })}
        
        </div>
  )
}
