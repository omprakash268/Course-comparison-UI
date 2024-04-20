import "./App.css";
import { CourseCard, Header } from "./components";
import { COURSE_DATA } from "./utils/course.constant";
import { ICourseDetails } from "./utils/course.interface";

function App() {
  return (
    <>
      <div className="bg-slate-300 min-h-screen w-screen">
        <Header />
        <div className="flex items-center justify-center p-2 flex-wrap">
          {COURSE_DATA.map((card:ICourseDetails)=>{
            return <CourseCard cardData={card} />
          })}
        
        </div>
      </div>
    </>
  );
}

export default App;
