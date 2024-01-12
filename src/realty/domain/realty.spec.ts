import { Realty } from './realty';
import { RealtyEntityErrorCodes } from './realty-error-codes';
import { RealtyType } from './realty-type';

describe('Realty', () => {
  describe('setTitle', () => {
    describe('when valid title', () => {
      it('should set title when title is valid', () => {
        const title = 'valid title';
        const realty = new Realty({
          title,
          type: RealtyType.APARTMENT,
          price: 1000,
        });
        expect(realty.title).toBe(title);
      });
    });
    describe('when invalid title', () => {
      const EXPECTED_ERROR = 'title must contain between 3 and 300 characters';

      it('should throw error when title is null', () => {
        const nullTitle = null;
        expect(
          () =>
            new Realty({
              title: nullTitle,
              type: RealtyType.APARTMENT,
              price: 1000,
            }),
        ).toThrowError('title is required');
      });

      it('should throw error when title length is less than 3 characters', () => {
        const shortTitle = 'ab';
        expect(
          () =>
            new Realty({
              title: shortTitle,
              type: RealtyType.APARTMENT,
              price: 1000,
            }),
        ).toThrowError(EXPECTED_ERROR);
      });

      it('should throw error when title length is more than 300 characters', () => {
        const longTitle =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec elit et arcu malesuada porttitor vitae eleifend augue. Proin efficitur elit nunc, fermentum gravida elit eleifend ut. Donec bibendum maximus risus, quis aliquet nisl fermentum at. Nulla volutpat venenatis orci non venenatis. Sed at ligula vel dui faucibus auctor ac in nulla. Nam ut augue quis urna sodales vulputate. Maecenas efficitur, neque nec pulvinar volutpat, erat turpis blandit tellus, at malesuada diam felis eu tortor..';
        expect(
          () =>
            new Realty({
              title: longTitle,
              type: RealtyType.APARTMENT,
              price: 1000,
            }),
        ).toThrowError(EXPECTED_ERROR);
      });
    });
  });

  describe('setDescription', () => {
    describe('when valid description', () => {
      it('should set description when description is valid', () => {
        const validDescription = 'some description';
        const realty = new Realty({
          title: 'some title',
          description: validDescription,
          type: RealtyType.APARTMENT,
          price: 1000,
        });
        expect(realty.description).toBe(validDescription);
      });
    });
    describe('when null description', () => {
      it('should set description null when description is null', () => {
        const nullDescription = null;
        const realty = new Realty({
          title: 'some title',
          description: nullDescription,
          type: RealtyType.APARTMENT,
          price: 1000,
        });
        expect(realty.description).toBe(null);
      });
    });
    describe('when invalid description', () => {
      const EXPECTED_ERROR =
        'description must be less than or equal to 500 characters';
      it('should throw error when description length is more than 500 characters', () => {
        const longDescription =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec elit et arcu malesuada porttitor vitae eleifend augue. Proin efficitur elit nunc, fermentum gravida elit eleifend ut. Donec bibendum maximus risus, quis aliquet nisl fermentum at. Nulla volutpat venenatis orci non venenatis. Sed at ligula vel dui faucibus auctor ac in nulla. Nam ut augue quis urna sodales vulputate. Maecenas efficitur, neque nec pulvinar volutpat, erat turpis blandit tellus, at malesuada diam felis eu tortor..';
        expect(
          () =>
            new Realty({
              title: 'some title',
              description: longDescription,
              type: RealtyType.APARTMENT,
              price: 1000,
            }),
        ).toThrowError(EXPECTED_ERROR);
      });
    });
  });

  describe('setPrice', () => {
    describe('when valid price', () => {
      it('returns price', () => {
        const validPrice = 150000;
        const realty = new Realty({
          title: 'some title',
          price: validPrice,
          type: RealtyType.APARTMENT,
        });
        expect(realty.price).toBe(validPrice);
      });
    });

    describe('when invalid price', () => {
      describe('when price is null', () => {
        it("should throw error 'price_is_required'", () => {
          expect(
            () =>
              new Realty({
                title: 'some title',
                price: null,
                type: RealtyType.APARTMENT,
              }),
          ).toThrowError('price_is_required');
        });
      });
      it('should throw error when price is less than 0', () => {
        const EXPECTED_ERROR = 'price must be a positive number';
        const invalidPrice = -100;
        expect(
          () =>
            new Realty({
              title: 'some title',
              price: invalidPrice,
              type: RealtyType.APARTMENT,
            }),
        ).toThrowError(EXPECTED_ERROR);
      });
    });
  });

  describe('when valid type', () => {
    describe('when type is APARTMENT', () => {
      it('returns type', () => {
        const realty = new Realty({
          title: 'some title',
          type: RealtyType.APARTMENT,
          price: 1000,
        });
        expect(realty.type).toBe(RealtyType.APARTMENT);
      });
    });

    describe('when type is HOUSE', () => {
      it('returns type', () => {
        const realty = new Realty({
          title: 'some title',
          type: RealtyType.HOUSE,
          price: 1000,
        });
        expect(realty.type).toBe(RealtyType.HOUSE);
      });
    });
  });

  describe('when invalid type', () => {
    describe('when type is null', () => {
      it("should throw error 'type_is_required'", () => {
        expect(
          () =>
            new Realty({
              title: 'some title',
              type: null,
              price: 1000,
            }),
        ).toThrowError(RealtyEntityErrorCodes.TYPE_IS_REQUIRED);
      });
    });
  });

  it('should return a Realty', () => {
    const expected_value = {
      title: 'some title',
      description: 'some description',
      price: 150000,
      type: 'APARTMENT',
    };

    const realty = new Realty({
      title: expected_value.title,
      description: expected_value.description,
      price: expected_value.price,
      type: RealtyType.APARTMENT,
    });

    expect(realty).toBeInstanceOf(Realty);
    expect(realty.title).toEqual(expected_value.title);
    expect(realty.description).toEqual(expected_value.description);
    expect(realty.price).toEqual(expected_value.price);
    expect(realty.type).toEqual(expected_value.type);
  });
});
