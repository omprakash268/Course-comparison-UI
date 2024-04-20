import { ICourseDetails } from "./course.interface";

export const COURSE_STATUS_TYPE = {
  free: "Free",
  now: "Starts today",
};

export const courseCategory: string[] = ["Computer Science","Technology","Programming","DSA","ML","Data Structures and Algoritms","Java","Dynamic Programming",
];


export const COURSE_DATA:ICourseDetails[]=[
  {
    id:1,
    categories:courseCategory,
    courseName:'Programming for everybody ( Getting started with Python )',
    platformAvailable:'Udemy',
    provider:'Rajat Sharma',
    type:'Free',
  },
  {
    id:2,
    categories:courseCategory,
    courseName:'Programming for everybody ( Getting started with Python )',
    platformAvailable:'Udemy',
    provider:'Rohit Yadav',
    type:'Starts today',
  },
  {
    id:3,
    categories:courseCategory,
    courseName:'Programming for everybody ( Getting started with Python )',
    platformAvailable:'Udemy',
    provider:'Neha',
    type:'Free',
  },
  {
    id:4,
    categories:courseCategory,
    courseName:'Programming for everybody ( Getting started with Python )',
    platformAvailable:'Udemy',
    provider:'Sachin Kumar Tiwari',
    type:'Starts today',
  },
  {
    id:5,
    categories:['Programming',"Tech","Self Explor"],
    courseName:'Programming for everybody ( Getting started with Python )',
    platformAvailable:'Udemy',
    provider:'Pavan',
    type:'Free',
  },
  {
    id:6,
    categories:courseCategory,
    courseName:'Programming for everybody ( Getting started with Python )',
    platformAvailable:'Udemy',
    provider:'Rajat Sharma',
    type:'Free',
  },
];