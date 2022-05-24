import sortCourses from '../src/sort.js';

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

const expectedMin = {
  asc: [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Germany', prices: [500, null] },
  ],
  desc: [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in France', prices: [null, null] },
  ],
};

const expectedMax = {
  asc: [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in Russia', prices: [null, 400] },
  ],
  desc: [
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in France', prices: [null, null] },
  ],
};

const expectedAverage = {
  asc: [
    { name: 'Courses in France', prices: [null, null] },
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in Germany', prices: [500, null] },
  ],
  desc: [
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in France', prices: [null, null] },
  ],
};

const mapping = {
  min: (sortOrder) => expectedMin[sortOrder === 'asc' ? 'asc' : 'desc'],
  max: (sortOrder) => expectedMax[sortOrder === 'asc' ? 'asc' : 'desc'],
  average: (sortOrder) => expectedAverage[sortOrder === 'asc' ? 'asc' : 'desc'],
};

describe.each(['min', 'max', 'average'])('%s sort', (condition) => {
  test.each(['asc', 'desc'])('%s', (sortOrder) => {
    const actual = sortCourses(courses, sortOrder, condition);
    const expected = mapping[condition](sortOrder);

    expect(actual).toEqual(expected);
  });
});
