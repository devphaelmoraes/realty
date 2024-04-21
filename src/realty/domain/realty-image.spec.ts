import { RealtyImage } from './realty-image';

describe('RealtyImages', () => {
  describe('when creating a new RealtyImages instance with valid data', () => {
    it('should initialize the instance with the provided data', () => {
      const data = {
        url: 'https://myimage.com',
        isCover: true,
      };
      const image = new RealtyImage(data);
      expect(image.url).toBe(data.url);
      expect(image.isCover).toBe(data.isCover);
      expect(image).toBeInstanceOf(RealtyImage);
    });
  });
});
