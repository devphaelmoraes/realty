import { RealtyImagesErrorCodes } from './realty-image-error-codes';
import { RealtyImagesException } from './realty-image.exception';

interface RealtyImageProps {
  id?: number;
  url: string;
  isCover: boolean;
}

export class RealtyImage {
  private _id: number;
  private _url: string;
  private _isCover: boolean;

  constructor(props: RealtyImageProps) {
    if (!props.url) {
      throw new RealtyImagesException(RealtyImagesErrorCodes.IMAGE_IS_REQUIRED);
    }
    this._id = props.id;
    this._url = props.url;
    this._isCover = props.isCover;
  }

  get id(): number {
    return this._id;
  }

  get url(): string {
    return this._url;
  }

  get isCover(): boolean {
    return this._isCover;
  }
}
