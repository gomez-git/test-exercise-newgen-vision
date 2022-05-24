import filterCoursesFromUserInput from '../src/filter.js';

// Список курсов
const courses = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
const requiredRange1 = [null, 200];
const requiredRange2 = [100, 350];
const requiredRange3 = [200, null];
const requiredRange4 = [null, null];

// Ожидаемые результаты
const expectedAverage = {
  expected1: [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in France', prices: [null, null] },
  ],
  expected2: [
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
  ],
  expected3: [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in USA', prices: [200, null] },
  ],
};

const expectedRange = {
  expected1: [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in France', prices: [null, null] },
  ],
  expected2: [
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in USA', prices: [200, null] },
  ],
  expected3: [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in USA', prices: [200, null] },
  ],
};

const mapping = {
  average: () => expectedAverage,
  range: () => expectedRange,
};

describe.each(['average', 'range'])('%s filter', (condition) => {
  const expectedValues = mapping[condition]();

  test.each([
    [requiredRange1, expectedValues.expected1],
    [requiredRange2, expectedValues.expected2],
    [requiredRange3, expectedValues.expected3],
    [requiredRange4, courses],
  ])('filter courses with %s', (requiredRange, expected) => {
    const actual = filterCoursesFromUserInput(courses, requiredRange, condition);

    expect(actual).toEqual(expected);
  });
});
