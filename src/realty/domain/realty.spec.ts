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

  it('should throw an error when description length is more than 500 characters', () => {
    const expected_error =
      'description must be less than or equal to 500 characters';
    const longDescription =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec elit et arcu malesuada porttitor vitae eleifend augue. Proin efficitur elit nunc, fermentum gravida elit eleifend ut. Donec bibendum maximus risus, quis aliquet nisl fermentum at. Nulla volutpat venenatis orci non venenatis. Sed at ligula vel dui faucibus auctor ac in nulla. Nam ut augue quis urna sodales vulputate. Maecenas efficitur, neque nec pulvinar volutpat, erat turpis blandit tellus, at malesuada diam felis eu tortor..';
    expect(() =>
      Realty.create({
        title: 'some title',
        description: longDescription,
      }),
    ).toThrowError(expected_error);
  });

  it('should return description null when description is null', () => {
    const nullDescription = null;
    const realty = Realty.create({
      title: 'some title',
      description: nullDescription,
    });
    expect(realty.description).toBe(null);
  });

  it('should throw an error when price is less than 0', () => {
    const invalidPrice = -100;
    expect(() =>
      Realty.create({
        title: 'some title',
        price: invalidPrice,
      }),
    ).toThrowError('price must be greater than 0');
  });

  it('should throw an error when price is 0', () => {
    const invalidPrice = 0;
    expect(() =>
      Realty.create({
        title: 'some title',
        price: invalidPrice,
      }),
    ).toThrowError('price must be greater than 0');
  });

  it('should return price null when price is null', () => {
    const nullPrice = null;
    const realty = Realty.create({
      title: 'some title',
      price: nullPrice,
    });
    expect(realty.price).toBe(null);
  });

  it('should return a Realty', () => {
    const expected_value = {
      title: 'some title',
      description: 'some description',
      price: 150000,
    };

    const realty = Realty.create({
      title: expected_value.title,
      description: expected_value.description,
      price: expected_value.price,
    });

    expect(realty).toBeInstanceOf(Realty);
    expect(realty.title).toEqual(expected_value.title);
    expect(realty.description).toEqual(expected_value.description);
    expect(realty.price).toEqual(expected_value.price);
  });
});
