import { Realty } from './realty';

describe('Realty', () => {
  it('should throw an error when title length is less than 3 characters', () => {
    const expected_error = 'title must contain between 3 and 300 characters';
    const shortTitle = 'ab';
    expect(() =>
      Realty.create({
        title: shortTitle,
      }),
    ).toThrowError(expected_error);
  });

  it('should throw an error when title length is more than 300 characters', () => {
    const expected_error = 'title must contain between 3 and 300 characters';
    const longTitle =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec elit et arcu malesuada porttitor vitae eleifend augue. Proin efficitur elit nunc, fermentum gravida elit eleifend ut. Donec bibendum maximus risus, quis aliquet nisl fermentum at. Nulla volutpat venenatis orci non venenatis. Sed at ligula vel dui faucibus auctor ac in nulla. Nam ut augue quis urna sodales vulputate. Maecenas efficitur, neque nec pulvinar volutpat, erat turpis blandit tellus, at malesuada diam felis eu tortor..';
    expect(() =>
      Realty.create({
        title: longTitle,
      }),
    ).toThrowError(expected_error);
  });

  it('should throw an error when title is null', () => {
    const expected_error = 'title is required';
    const nullTitle = null;
    expect(() =>
      Realty.create({
        title: nullTitle,
      }),
    ).toThrowError(expected_error);
  });

  it('should return a Realty', () => {
    const validTitle = 'simple title';
    const realty = Realty.create({
      title: validTitle,
    });
    expect(realty.title).toBe(validTitle);
    expect(realty).toBeInstanceOf(Realty);
  });
});
