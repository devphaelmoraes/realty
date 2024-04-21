import { RealtyImagesErrorCodes } from './realty-image-error-codes';
import { RealtyImagesException } from './realty-image.exception';

interface RealtyImagesProps {
  url: string;
  isCover: boolean;
}

export class RealtyImage {
  private _url: string;
  private _isCover: boolean;

  constructor(props: RealtyImagesProps) {
    if (!props.url) {
      throw new RealtyImagesException(RealtyImagesErrorCodes.IMAGE_IS_REQUIRED);
    }
    this._url = props.url;
    this._isCover = props.isCover;
  }

  get url(): string {
    return this._url;
  }

  get isCover(): boolean {
    return this._isCover;
  }
}
