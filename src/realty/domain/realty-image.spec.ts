import { RealtyImage } from './realty-image';
import { RealtyImagesErrorCodes } from './realty-image-error-codes';

describe('RealtyImage', () => {
  describe('when creating a new RealtyImages instance with valid data', () => {
    it('should initialize the instance with the provided data', () => {
      const data = {
        id: 1,
        url: 'https://myimage.com',
        isCover: true,
      };
      const image = new RealtyImage(data);
      expect(image.id).toBe(data.id);
      expect(image.url).toBe(data.url);
      expect(image.isCover).toBe(data.isCover);
      expect(image).toBeInstanceOf(RealtyImage);
    });
  });

  describe('when creating a new RealtyImages instance with null URL', () => {
    it('throws exception realty_image_is_required', () => {
      expect(
        () => new RealtyImage({ id: 1, url: null, isCover: true }),
      ).toThrowError(RealtyImagesErrorCodes.IMAGE_IS_REQUIRED);
    });
  });
});
