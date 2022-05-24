const sortMin = (courses, sortOrder) => courses
  .slice()
  .sort(({ prices: [minCoursePrice1] }, { prices: [minCoursePrice2] }) => (
    sortOrder === 'asc'
      ? minCoursePrice1 - minCoursePrice2
      : minCoursePrice2 - minCoursePrice1
  ));

const sortMax = (courses, sortOrder) => courses
  .slice()
  .sort(({ prices: [, maxCoursePrice1] }, { prices: [, maxCoursePrice2] }) => (
    sortOrder === 'asc'
      ? maxCoursePrice1 - maxCoursePrice2
      : maxCoursePrice2 - maxCoursePrice1
  ));

const sortAverage = (courses, sortOrder) => courses
  .slice()
  .sort((
    { prices: [minCoursePrice1, maxCoursePrice1] },
    { prices: [minCoursePrice2, maxCoursePrice2] },
  ) => {
    const sumPrice1 = (minCoursePrice1 ?? maxCoursePrice1) + (maxCoursePrice1 ?? minCoursePrice1);
    const averageCoursePrice1 = sumPrice1 / 2;

    const sumPrice2 = (minCoursePrice2 ?? maxCoursePrice2) + (maxCoursePrice2 ?? minCoursePrice2);
    const averageCoursePrice2 = sumPrice2 / 2;

    return sortOrder === 'asc'
      ? averageCoursePrice1 - averageCoursePrice2
      : averageCoursePrice2 - averageCoursePrice1;
  });

const mapping = {
  min: (courses, sortOrder) => sortMin(courses, sortOrder),
  max: (courses, sortOrder) => sortMax(courses, sortOrder),
  average: (courses, sortOrder) => sortAverage(courses, sortOrder),
};

export default (courses, sortOrder = 'asc', condition = 'average') => (
  mapping[condition](courses, sortOrder)
);
