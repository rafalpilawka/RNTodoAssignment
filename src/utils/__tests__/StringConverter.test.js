import StringConverter from 'src/utils/listToStringConverter';

const result = 'NEW LIST\nAA completed: false\nBB completed: true';
describe('String converter', () => {
  it('should return correct value', () => {
    const stringInput = `[{"title":"AA","id":"1601637159964","completed": false},{"title":"BB","id":"1601637159964","completed": true}]`;
    expect(StringConverter(stringInput, 'New list')).toEqual(result);
  });
  it('should return correct value', () => {
    const stringInput = `[{"title":"AA","id":"1601637159964","completed": false},{"title":"BB","id":"1601637159964","completed": true}]`;
    expect(StringConverter(stringInput, 'New list 2')).not.toEqual(result);
  });
});
