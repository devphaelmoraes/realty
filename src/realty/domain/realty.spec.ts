import { Realty } from './realty';
import { RealtyEntityErrorCodes } from './realty-error-codes';
import { RealtyType } from './realty-type';

describe('Realty', () => {
  describe('setTitle', () => {
    describe('when set valid title', () => {
      it('should set title', () => {
        const title = 'valid title';
        const realty = new Realty({
          title,
          type: RealtyType.APARTMENT,
          price: 1000,
        });
        expect(realty.title).toBe(title);
      });
    });

    describe('when title is null', () => {
      it('throws exception title_is_required', () => {
        const nullTitle = null;
        expect(
          () =>
            new Realty({
              title: nullTitle,
              type: RealtyType.APARTMENT,
              price: 1000,
            }),
        ).toThrowError(RealtyEntityErrorCodes.TITLE_IS_REQUIRED);
      });
    });

    describe('when title length is less than 3 characters', () => {
      it('throws exception title_must_be_greater_than_3_and_less_than_300', () => {
        const shortTitle = 'ab';
        expect(
          () =>
            new Realty({
              title: shortTitle,
              type: RealtyType.APARTMENT,
              price: 1000,
            }),
        ).toThrowError(
          RealtyEntityErrorCodes.TITLE_MUST_BE_GREATER_THAN_3_AND_LESS_THAN_300,
        );
      });
    });

    describe('when title length is more than 300 characters', () => {
      it('throws exception title_must_be_greater_than_3_and_less_than_300', () => {
        const longTitle =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec elit et arcu malesuada porttitor vitae eleifend augue. Proin efficitur elit nunc, fermentum gravida elit eleifend ut. Donec bibendum maximus risus, quis aliquet nisl fermentum at. Nulla volutpat venenatis orci non venenatis. Sed at ligula vel dui faucibus auctor ac in nulla. Nam ut augue quis urna sodales vulputate. Maecenas efficitur, neque nec pulvinar volutpat, erat turpis blandit tellus, at malesuada diam felis eu tortor..';
        expect(
          () =>
            new Realty({
              title: longTitle,
              type: RealtyType.APARTMENT,
              price: 1000,
            }),
        ).toThrowError(
          RealtyEntityErrorCodes.TITLE_MUST_BE_GREATER_THAN_3_AND_LESS_THAN_300,
        );
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
        ).toThrowError(
          RealtyEntityErrorCodes.DESCRIPTION_MUST_BE_LESS_THAN_OR_EQUAL_500,
        );
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
          ).toThrowError(RealtyEntityErrorCodes.PRICE_IS_REQUIRED);
        });
      });
      it('should throw error when price is less than 0', () => {
        const invalidPrice = -100;
        expect(
          () =>
            new Realty({
              title: 'some title',
              price: invalidPrice,
              type: RealtyType.APARTMENT,
            }),
        ).toThrowError(RealtyEntityErrorCodes.PRICE_MUST_BE_A_POSITIVE_NUMBER);
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
