import { Class } from "./Class";
import { WeekDay } from "./WeekDay";
import { Course } from "./Course";
export class Session {
  startPeriod: number;
  periodCount: number;
  instructor: string;
  weekDay: string;
  class: Class;
  course: Course;
  room: string;
  type: SessionType;

  constructor(
    c: Class,
    weekDay: WeekDay = WeekDay.MON,
    start = 1,
    count = 1,
    instructor = "",
    room = "",
    // eslint-disable-next-line
    type: SessionType = SessionType.THEORY
  ) {
    this.class = c;
    this.course = c.course;
    this.startPeriod = start;
    this.periodCount = count;
    this.instructor = instructor;
    this.weekDay = WeekDay[weekDay];
    this.room = room;
    this.type = type;
    c.schedule.addSession(this, false);
  }
}

export enum SessionType {
  THEORY,
  // eslint-disable-next-line
  LAB,
}
