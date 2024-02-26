import { RealtyImages } from './realty-images';
import { RealtyImagesErrorCodes } from './realty-images-error-codes';

describe('RealtyImages', () => {
  describe('when set image', () => {
    it('returns images', () => {
      const images = new RealtyImages();
      images.setImage({
        url: 'https://myimage.com',
        isCover: true,
      });
      expect(images.getImages()).toEqual([
        { url: 'https://myimage.com', isCover: true },
      ]);
    });
  });

  describe('when image url is null', () => {
    it('throws exception realty_image_is_required', () => {
      const images = new RealtyImages();
      expect(() =>
        images.setImage({
          url: null,
          isCover: true,
        }),
      ).toThrowError(RealtyImagesErrorCodes.IMAGE_IS_REQUIRED);
    });
  });
});
