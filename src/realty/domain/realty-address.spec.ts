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

    it('and houseNumber is 0', () => {
      const houseNumber = 0;
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber,
      });
      expect(realtyAddress.houseNumber).toBe(houseNumber);
    });
  });

  describe('when houseNumber is null', () => {
    it('throws exception house_is_required', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: '65066-320',
            houseNumber: null,
          }),
      ).toThrowError(RealtyAddressErrorCodes.HOUSE_NUMBER_IS_REQUIRED);
    });
  });

  describe('when houseNumber is undefined', () => {
    it('throws exception house_is_required', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: '65066-320',
            houseNumber: undefined,
          }),
      ).toThrowError(RealtyAddressErrorCodes.HOUSE_NUMBER_IS_REQUIRED);
    });
  });

  describe('when houseNumber is negative number', () => {
    it('throws exception house_number_must_be_a_positive_number', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: '65066-320',
            houseNumber: -1,
          }),
      ).toThrowError(
        RealtyAddressErrorCodes.HOUSE_NUMBER_MUST_BE_A_POSITIVE_NUMBER,
      );
    });
  });

  describe('when set complement', () => {
    it('should set complement', () => {
      const complement = 'a'.repeat(500);
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber: 1,
        complement,
      });
      expect(realtyAddress.complement).toBe(complement);
    });
  });

  describe('when complement is greater then 500', () => {
    it('throws exception complement_must_be_less_than_500', () => {
      const complement = 'a'.repeat(501);
      expect(
        () =>
          new RealtyAddress({
            street: 'street',
            zipCode: '65066-320',
            houseNumber: 1,
            complement,
          }),
      ).toThrowError(
        RealtyAddressErrorCodes.COMPLEMENT_MUST_BE_LESS_THAN_OR_EQUAL_500,
      );
    });
  });
});
