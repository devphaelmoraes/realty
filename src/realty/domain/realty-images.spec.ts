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

  describe('when attempting to set 5 images', () => {
    it('returns images', () => {
      const images = new RealtyImages();
      images.setImage({
        url: 'https://myimage.com/1',
        isCover: true,
      });
      images.setImage({
        url: 'https://myimage.com/2',
        isCover: false,
      });
      images.setImage({
        url: 'https://myimage.com/3',
        isCover: false,
      });
      images.setImage({
        url: 'https://myimage.com/4',
        isCover: false,
      });
      images.setImage({
        url: 'https://myimage.com/5',
        isCover: false,
      });
      expect(images.getImages()).toHaveLength(5);
    });
  });

  describe('when attempting to set more than 5 images', () => {
    it('throws exception max_images_exceeded', () => {
      const images = new RealtyImages();
      images.setImage({
        url: 'https://myimage.com/1',
        isCover: true,
      });
      images.setImage({
        url: 'https://myimage.com/2',
        isCover: false,
      });
      images.setImage({
        url: 'https://myimage.com/3',
        isCover: false,
      });
      images.setImage({
        url: 'https://myimage.com/4',
        isCover: false,
      });
      images.setImage({
        url: 'https://myimage.com/5',
        isCover: false,
      });
      expect(() => {
        images.setImage({
          url: 'https://myimage.com/6',
          isCover: false,
        });
      }).toThrowError(RealtyImagesErrorCodes.MAX_IMAGES_EXCEEDED);
    });
  });
});
