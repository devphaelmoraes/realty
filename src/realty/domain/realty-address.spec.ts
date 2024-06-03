import { RealtyAddress } from './realty-address';
import { RealtyAddressErrorCodes } from './realty-address-error-codes';

describe('RealtyAddress', () => {
  describe('when set street', () => {
    it('should set street', () => {
      const street = 'a'.repeat(250);
      const realtyAddress = new RealtyAddress({
        street,
        zipCode: '12345-678',
        houseNumber: 1,
      });
      expect(realtyAddress.street).toBe(street);
    });
  });

  describe('when street is null', () => {
    it('throws exception street_is_required', () => {
      expect(
        () =>
          new RealtyAddress({
            street: null,
            zipCode: '12345-678',
            houseNumber: 1,
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
            zipCode: '12345-678',
            houseNumber: 1,
          }),
      ).toThrowError(
        RealtyAddressErrorCodes.STREET_MUST_BE_LESS_THAN_OR_EQUAL_250,
      );
    });
  });

  describe('when set zipCode', () => {
    it('should set zipCode', () => {
      const zipCode = '65066-320';
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode,
        houseNumber: 1,
      });
      expect(realtyAddress.zipCode).toBe(zipCode);
    });
  });

  describe('when zipCode is null', () => {
    it('throws exception zip_code_is_required', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: null,
            houseNumber: 1,
          }),
      ).toThrowError(RealtyAddressErrorCodes.ZIP_CODE_IS_REQUIRED);
    });
  });

  describe('when zipCode is invalid', () => {
    it('throws exception zip_code_is_invalid', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: 'A65066320',
            houseNumber: 1,
          }),
      ).toThrowError(RealtyAddressErrorCodes.ZIP_CODE_IS_INVALID);
    });
  });

  describe('when set houseNumber', () => {
    it('should set houseNumber', () => {
      const houseNumber = 10;
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber,
      });
      expect(realtyAddress.houseNumber).toBe(houseNumber);
    });
  });
});
