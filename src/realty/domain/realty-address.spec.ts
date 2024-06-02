import { RealtyAddress } from './realty-address';

describe('RealtyAddress', () => {
  describe('when set street', () => {
    it('should set street', () => {
      const street = 'my street';
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
      ).toThrowError('street_is_required');
    });
  });
});
