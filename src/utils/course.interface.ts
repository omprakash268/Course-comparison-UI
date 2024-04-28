export interface ICategoryChipProps {
  categroy: string;
}

export interface ICourseStatusChipProps {
  type: string;
}

export interface ICardDataProps {
  cardData: ICourseDetails;
}

export interface ICourseDetails {
  id: number;
  categories: string[];
  type: string;
  courseName: string;
  platformAvailable: string;
  provider: string;
}

// Review Card
export interface IReviewCardDetails {
  id: number;
  review: string;
  courseName: string;
}
export interface IReviewCardProp {
  cardInfo: IReviewCardDetails;
}


// Popular Courses
export interface IPopularCourseDetails {
  id: number;
  courseType: string;
}
