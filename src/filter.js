const filterAverage = (courses, [minUserPrice, maxUserPrice]) => courses
  .filter(({ prices: [minCoursePrice, maxCoursePrice] }) => {
    const sumOfPrices = (minCoursePrice ?? maxCoursePrice) + (maxCoursePrice ?? minCoursePrice);
    const averageCoursePrice = sumOfPrices / 2;

    return (
      (minUserPrice ?? 0) <= averageCoursePrice && averageCoursePrice <= (maxUserPrice ?? Infinity)
    );
  });

const filterRange = (courses, [minUserPrice, maxUserPrice]) => courses
  .filter(({ prices: [minCoursePrice, maxCoursePrice] }) => (
    (minUserPrice ?? 0) <= (minCoursePrice ?? maxCoursePrice)
    && (maxCoursePrice ?? minCoursePrice) <= (maxUserPrice ?? Infinity)
  ));

const mapping = {
  average: (courses, requiredRange) => filterAverage(courses, requiredRange),
  range: (courses, requiredRange) => filterRange(courses, requiredRange),
};

export default (courses, requiredRange, condition = 'range') => (
  mapping[condition](courses, requiredRange)
);
