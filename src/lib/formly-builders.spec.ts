import { typedFormlyField } from './formly-builders';

interface SampleModel {
  one: string;
  two: number;
}

describe('typed formly field', () => {
  test('should contain key', () => {
    const field = typedFormlyField<SampleModel>({
      key: 'one',
      type: 'input',
    });

    expect(field).toHaveProperty('key', 'one');
  });
});
