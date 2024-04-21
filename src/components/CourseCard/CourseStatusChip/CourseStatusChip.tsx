import { COURSE_STATUS_TYPE } from "../../../utils/course.constant";
import { ICourseStatusChipProps } from "../../../utils/course.interface";

export const CourseStatusChip = ({ type }: ICourseStatusChipProps) => {
  return (
    <div
      className={`${
        type == COURSE_STATUS_TYPE.free
          ? "bg-green-200 text-[green]"
          : type == COURSE_STATUS_TYPE.now
          ? "bg-blue-200 text-[blue]"
          : "bg-slate-200"
      } min-w-[4rem] min-h-[1.5rem] px-2 flex items-center justify-center m-1 rounded-lg text-[12px] font-bold`}
    >
      {type}
    </div>
  );
};
