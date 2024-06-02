import { RealtyAddress } from './realty-address';

describe('RealtyAddress', () => {
  describe('when set street', () => {
    it('should set street', () => {
      const street = 'my street';
      const realty = new RealtyAddress({ street });
      expect(realty.street).toBe(street);
    });
  });
});
