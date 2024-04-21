import "./App.css";
import { CourseCard, Footer, Header } from "./components";
import { COURSE_DATA } from "./utils/course.constant";
import { ICourseDetails } from "./utils/course.interface";

function App() {
  return (
    <>
      <div className="bg-slate-200 min-h-screen">
        <Header />
        <div className="flex items-center justify-center p-2 flex-wrap px-[6rem]">
          
          {COURSE_DATA.map((card:ICourseDetails)=>{
            return <CourseCard cardData={card} />
          })}
        
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
