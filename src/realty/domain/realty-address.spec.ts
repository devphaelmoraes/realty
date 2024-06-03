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
        cityId: 1,
        stateId: 1,
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
            cityId: 1,
            stateId: 1,
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
            cityId: 1,
            stateId: 1,
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
        cityId: 1,
        stateId: 1,
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
            cityId: 1,
            stateId: 1,
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
            cityId: 1,
            stateId: 1,
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
        cityId: 1,
        stateId: 1,
      });
      expect(realtyAddress.houseNumber).toBe(houseNumber);
    });

    it('and houseNumber is 0', () => {
      const houseNumber = 0;
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber,
        cityId: 1,
        stateId: 1,
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
            cityId: 1,
            stateId: 1,
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
            cityId: 1,
            stateId: 1,
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
            cityId: 1,
            stateId: 1,
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
        cityId: 1,
        stateId: 1,
      });
      expect(realtyAddress.complement).toBe(complement);
    });
  });

  describe('when complement is null', () => {
    it('should set complement', () => {
      const complement = null;
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber: 1,
        complement,
        cityId: 1,
        stateId: 1,
      });
      expect(realtyAddress.complement).toBe(complement);
    });
  });

  describe('when complement is empty', () => {
    it('should set complement', () => {
      const complement = '';
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber: 1,
        complement,
        cityId: 1,
        stateId: 1,
      });
      expect(realtyAddress.complement).toBe(complement);
    });
  });

  describe('when complement is undefined', () => {
    it('should set complement', () => {
      const complement = undefined;
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber: 1,
        complement,
        cityId: 1,
        stateId: 1,
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
            cityId: 1,
            stateId: 1,
          }),
      ).toThrowError(
        RealtyAddressErrorCodes.COMPLEMENT_MUST_BE_LESS_THAN_OR_EQUAL_500,
      );
    });
  });

  describe('when set cityId ', () => {
    it('set cityId', () => {
      const cityId = 10;
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber: 1,
        complement: 'complement',
        cityId,
        stateId: 1,
      });
      expect(realtyAddress.cityId).toBe(cityId);
    });
  });

  describe('when cityId is null', () => {
    it('throws exception city_id_is_required', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: '65066-320',
            houseNumber: 1,
            cityId: null,
            stateId: 1,
          }),
      ).toThrowError(RealtyAddressErrorCodes.CITY_ID_IS_REQUIRED);
    });
  });

  describe('when cityId is negative number', () => {
    it('throws exception city_id_must_be_a_positive_number', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: '65066-320',
            houseNumber: 1,
            cityId: -1,
            stateId: 1,
          }),
      ).toThrowError(RealtyAddressErrorCodes.CITY_ID_MUST_BE_A_POSITIVE_NUMBER);
    });
  });

  describe('when set stateId ', () => {
    it('set stateId', () => {
      const stateId = 10;
      const realtyAddress = new RealtyAddress({
        street: 'street',
        zipCode: '65066-320',
        houseNumber: 1,
        complement: 'complement',
        cityId: 1,
        stateId,
      });
      expect(realtyAddress.stateId).toBe(stateId);
    });
  });

  describe('when set stateId id null', () => {
    it('throws exception state_id_is_required', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'street',
            zipCode: '65066-320',
            houseNumber: 1,
            complement: 'complement',
            cityId: 1,
            stateId: null,
          }),
      ).toThrowError(RealtyAddressErrorCodes.STATE_ID_IS_REQUIRED);
    });
  });

  describe('when stateId is negative number', () => {
    it('throws exception state_id_must_be_a_positive_number', () => {
      expect(
        () =>
          new RealtyAddress({
            street: 'a',
            zipCode: '65066-320',
            houseNumber: 1,
            cityId: 1,
            stateId: -1,
          }),
      ).toThrowError(
        RealtyAddressErrorCodes.STATE_ID_MUST_BE_A_POSITIVE_NUMBER,
      );
    });
  });
});
