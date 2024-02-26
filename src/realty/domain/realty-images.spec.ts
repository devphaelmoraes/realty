import { RealtyImages } from './realty-images';

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
});
