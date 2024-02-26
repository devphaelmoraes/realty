import { RealtyImagesErrorCodes } from './realty-images-error-codes';
import { RealtyImagesException } from './realty-images.exception';

const MAX_IMAGES = 5;

interface RealtyImagesProps {
  url: string;
  isCover: boolean;
}

export class RealtyImages {
  private images: RealtyImagesProps[] = [];

  public setImage(image: RealtyImagesProps): void {
    if (!image.url) {
      throw new RealtyImagesException(RealtyImagesErrorCodes.IMAGE_IS_REQUIRED);
    }

    if (this.images.length === MAX_IMAGES) {
      throw new RealtyImagesException(
        RealtyImagesErrorCodes.MAX_IMAGES_EXCEEDED,
      );
    }

    this.images.push(image);
  }

  public getImages(): RealtyImagesProps[] {
    return this.images;
  }
}
