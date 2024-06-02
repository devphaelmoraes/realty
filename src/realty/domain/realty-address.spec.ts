import { RealtyAddress } from './realty-address';
import { RealtyAddressErrorCodes } from './realty-address-error-codes';

describe('RealtyAddress', () => {
  describe('when set street', () => {
    it('should set street', () => {
      const street = 'a'.repeat(250);
      const realty = new RealtyAddress({ street });
      expect(realty.street).toBe(street);
    });
  });

  describe('when street is null', () => {
    it('throws exception street_is_required', () => {
      expect(
        () =>
          new RealtyAddress({
            street: null,
          }),
      ).toThrowError(RealtyAddressErrorCodes.STREET_IS_REQUIRED);
    });
  });

  describe('when street length is more than 250 characters', () => {
    it('throws exception street_must_be_less_than_or_equal_250', () => {
      const longStreet = 'a'.repeat(251);
      expect(
        () =>
          new RealtyAddress({
            street: longStreet,
          }),
      ).toThrowError(
        RealtyAddressErrorCodes.STREET_MUST_BE_LESS_THAN_OR_EQUAL_250,
      );
    });
  });
});
