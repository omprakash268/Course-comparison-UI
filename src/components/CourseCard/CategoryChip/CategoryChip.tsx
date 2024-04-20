import { ICategoryChipProps } from "../../../utils/course.interface";

export const CategoryChip = ({ categroy }: ICategoryChipProps) => {
  return (
    <div className="min-w-[1rem] h-[2rem] p-2 bg-slate-300 flex items-center justify-start m-1 rounded-lg text-[12px] border-[1px] border-[gray]">
      {categroy}
    </div>
  );
};
